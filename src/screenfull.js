/*global Element */
(function( window, document ) {
	'use strict';

	var keyboardAllowed = 'ALLOW_KEYBOARD_INPUT' in Element,

		methods = (function() {
			var methodMap = [
				[
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenchange',
					'fullscreen',
					'fullscreenElement'
				],
				[
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					'webkitIsFullScreen',
					'webkitCurrentFullScreenElement'
				],
				[
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozfullscreenchange',
					'mozFullScreen',
					'mozFullScreenElement'
				]
			];
			for ( var i = 0, l = methodMap.length; i < l; i++ ) {
				var val = methodMap[i];
				if ( val[1] in document ) {
					return val;
				}
			}
		})(),

		screenfull = {
			isFullscreen: document[ methods[3] ],
			element: document[ methods[4] ],
			request: function( elem ) {
				var request = methods[0];
				elem = elem || document.documentElement;
				// If you request a new element when already in fullscreen, Chrome
				// will change directly to that element, while Firefox will do nothing.
				// Force Firefox to change element by exiting and then reenter, making it consistent.
				if ( request.indexOf('moz') !== -1 && elem !== this.element ) {
					this.exit();
				}
				elem[ request ]( keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT );
				// Work around Safari 5.1 bug: reports support for
				// keyboard in fullscreen even though it doesn't.
				if ( !document.isFullscreen ) {
					elem[ request ]();
				}
			},
			exit: function() {
				document[ methods[1] ]();
			},
			toggle: function( elem ) {
				if ( this.isFullscreen ) {
					this.exit();
				} else {
					this.request( elem );
				}
			},
			onchange: function() {}
		};

	if ( !methods ) {
		return window.screenfull = false;
	}

	document.addEventListener( methods[2], function( e ) {
		screenfull.isFullscreen = document[ methods[3] ];
		screenfull.element = document[ methods[4] ];
		screenfull.onchange( e );
	});

	window.screenfull = screenfull;

})( window, document );