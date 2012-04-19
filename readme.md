# screenfull.js

Simple wrapper for cross-browser usage of the [Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode).  
You can read more about the Fullscreen API on [hacks.mozilla.org](http://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/).

### [Demo](http://sindresorhus.com/screenfull.js/)


## Support

- Chrome 15+
- Firefox 10+
- Safari 5.1+

Chrome is currently the only browser that allow the use of keyboard in fullscreen.


## Usage

### Example

Fullscreen the document:

```javascript
if ( screenfull ) {
	screenfull.request();
}
```

View source on the demo for more examples.

You can check for fullscreen support by checking the truthy/falsy value of `screenfull`.

### Methods

- `.request()` takes a DOM element, if nothing is specified it will fullscreen the document. If called with another element than the current active one, it will switch to that..

- `.exit()` takes you out of fullscreen.

- `.toggle()` requests fullscreen if it's not active, otherwise exits.

- `.onchange()` override this method to get notified about fullscreen changes.

### Parameters

- `.isFullscreen` boolean to tell if fullscreen is active.

- `.element` returns the currently fullscreened element, otherwise `null`.


## Contribute

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and minify your code using [grunt](https://github.com/cowboy/grunt).

*Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!*


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
(c) [Sindre Sorhus](http://sindresorhus.com)