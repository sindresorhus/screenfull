# screenfull.js

> Simple wrapper for cross-browser usage of the JavaScript [Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode), which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have too.


### [Demo](http://sindresorhus.com/screenfull.js)

### [Check out my other projects](https://github.com/sindresorhus?tab=repositories)


## Install

Only 0.7 kB gzipped.

Download the [production version][min] or the [development version][max].

[min]: https://github.com/sindresorhus/screenfull.js/raw/gh-pages/dist/screenfull.min.js
[max]: https://github.com/sindresorhus/screenfull.js/raw/gh-pages/dist/screenfull.js

```sh
$ npm install --save screenfull
```

```sh
$ bower install --save screenfull
```


## Why?

### Screenfull

```js
if (screenfull.enabled) {
	screenfull.request();
}
```

### Vanilla JavaScript

```js
document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}

// Actually it's more if you want it to work in Safari, but let's not go there...
```


## Support

[Supported browsers](http://caniuse.com/fullscreen)

Safari 5.1 doesn't support use of the keyboard in fullscreen.


## Documentation


### Examples


#### Fullscreen the page

```js
document.getElementById('button').addEventListener('click', function () {
	if (screenfull.enabled) {
		screenfull.request();
	} else {
		// Ignore or do something else
	}
});
```


#### Fullscreen an element

```js
var elem = document.getElementById('target');
document.getElementById('button').addEventListener('click', function () {
	if (screenfull.enabled) {
		screenfull.request(elem);
	}
});
```


#### Fullscreen an element with jQuery

```js
var target = $('#target')[0]; // Get DOM element from jQuery collection
$('#button').click(function () {
	if (screenfull.enabled) {
		screenfull.request(target);
	}
});
```


#### Toggle fullscreen on a image with jQuery

```js
$('img').click(function () {
	if (screenfull.enabled) {
		// We can use `this` since we want the clicked element
		screenfull.toggle(this);
	}
});
```


#### Detect fullscreen change

```js
if (screenfull.enabled) {
	document.addEventListener(screenfull.raw.fullscreenchange, function () {
		console.log('Am I fullscreen? ' + (screenfull.isFullscreen ? 'Yes' : 'No'));
	});
}
```

See the [demo](http://sindresorhus.com/screenfull.js) for more examples, and view the source.

You can check for fullscreen support by checking the truthy/falsy value of `screenfull` as done in the example above.


### Methods

#### .request()

Make an element fullscreen.

Accepts a DOM element. Default is `<html>`. If called with another element than the currently active, it will switch to that if it's a decendant.

If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).

Keep in mind that the browser will only enter fullscreen when initiated by user events like click, touch, key.

#### .exit()

Brings you out of fullscreen.

#### .toggle()

Requests fullscreen if not active, otherwise exits.

#### .onchange()

<del>Override this method to get notified about fullscreen changes.</del>

You should rather use a real event listener:

```js
document.addEventListener(screenfull.raw.fullscreenchange, function () {});
```

#### .onerror()

<del>Override this method to get notified about fullscreen errors.</del>

You should rather use a real event listener:

```js
document.addEventListener(screenfull.raw.fullscreenerror, function () {});
```


### Properties

#### .isFullscreen

Returns a boolean whether fullscreen is active.

#### .element

Returns the element currently in fullscreen, otherwise `null`.

#### .enabled

Returns a boolean whether you are allowed to enter fullscreen. If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).

#### .raw

Exposes the raw properties (prefixed if needed) used internally: `requestFullscreen`, `exitFullscreen`, `fullscreenElement`, `fullscreenEnabled`, `fullscreenchange`, `fullscreenerror`

```js
$(document).on(screenfull.raw.fullscreenchange, function () {
	console.log('Fullscreen change');
});
```


## Resources

- [Using the Fullscreen API in web browsers](http://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/)
- [MDN - Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode)
- [W3C Fullscreen spec](http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html)
- [Building an amazing fullscreen mobile experience](http://www.html5rocks.com/en/mobile/fullscreen/)


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
