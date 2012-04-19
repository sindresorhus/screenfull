/*!
* screenfull.js
* v0.9.0 - 2012-04-19
* https://github.com/sindresorhus/screenfull.js
* (c) Sindre Sorhus; MIT License
*/

/*global Element:true*/
(function( window, document ) {
	'use strict';

	var methods = (function() {
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
	})();

	if ( !methods ) {
		return window.screenfull = false;
	}

	var keyboardAllowed = 'ALLOW_KEYBOARD_INPUT' in Element;

	var screenfull = {
		init: function() {
			document.addEventListener( methods[2], function(e) {
				screenfull.isFullscreen = document[ methods[3] ];
				screenfull.element = document[ methods[4] ];
				screenfull.onchange(e);
			});
			return this;
		},
		isFullscreen: document[ methods[3] ],
		element: document[ methods[4] ],
		request: function( elem ) {
			elem = elem || document.documentElement;
			elem[ methods[0] ]( keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT );
			// Work around Safari 5.1 bug: reports support for keyboard in fullscreen even though it doesn't.
			if ( !document.isFullscreen ) {
				elem[ methods[0] ]();
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

	window.screenfull = screenfull.init();

})( window, document );