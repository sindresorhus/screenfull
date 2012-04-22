# screenfull.js

Simple wrapper for cross-browser usage of the JavaScript [Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode), which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have too.


### [Demo](http://sindresorhus.com/screenfull.js)


## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/sindresorhus/screenfull.js/master/dist/screenfull.min.js
[max]: https://raw.github.com/sindresorhus/screenfull.js/master/dist/screenfull.js


## Support

- Chrome 15+
- Firefox 10+
- Safari 5.1+

Safari 5.1 doesn't support use of the keyboard in fullscreen.



## Documentation


### Examples


#### Fullscreen the page

```javascript
document.getElementById('#button').addEventListener('click', function() {
	if ( screenfull ) {
		screenfull.request();
	} else {
		// Ignore or do something else
	}
});
```


#### Fullscreen an element

```javascript
var elem = document.getElementById('#target');
document.getElementById('#button').addEventListener('click', function() {
	screenfull.request( elem );
});
```


#### Fullscreen an element with jQuery

```javascript
var target = $('#target')[0]; // Get DOM element from jQuery collection
$('#button').click(function() {
	screenfull.request( target );
});
```


#### Toggle fullscreen on a image with jQuery

```javascript
$('img').click(function() {
	// We can use `this` since we want the clicked element
	screenfull.toggle( this );
});
```


#### Detect fullscreen change

```javascript
screenfull.onchange = function() {
	console.log( 'Am I fullscreen? ' + screenfull.isFullscreen ? 'Yes' : 'No' );
};
```


See the [demo](http://sindresorhus.com/screenfull.js) for more examples, and view the source.

You can check for fullscreen support by checking the truthy/falsy value of `screenfull` as done in the example above.

*Keep in mind that the browser will only enter fullscreen when initiated by the user, like click.*


### Methods

#### .request()

Accepts a DOM element. Default is `<html>`.  
If called with another element than the currently active, it will switch to that.

#### .exit()

Brings you out of fullscreen.

#### .toggle()

Requests fullscreen if not active, otherwise exits.

#### .onchange()

Override this method to get notified about fullscreen changes.


### Parameters

#### .isFullscreen

Returns a boolean whether fullscreen is active.

#### .element

Returns the element currently in fullscreen, otherwise `null`.


## Resources

- [Using the Fullscreen API in web browsers](http://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/)
- [MDN - Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode)


## Contribute

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and minify your code using [grunt](https://github.com/cowboy/grunt).

*Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!*


## License

MIT License  
(c) [Sindre Sorhus](http://sindresorhus.com)