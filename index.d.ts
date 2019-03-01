export type RawEventNames = Readonly<{
	requestFullscreen: string;
	exitFullscreen: string;
	fullscreenElement: string;
	fullscreenEnabled: string;
	fullscreenchange: string;
	fullscreenerror: string;
}>;

export type EventName = 'change' | 'error';

export interface Screenfull {
	/**
	 * A boolean whether fullscreen is active.
	 */
	readonly isFullscreen: boolean;

	/**
	 * The element currently in fullscreen, otherwise `null`.
	 */
	readonly element: Element | null;

	/**
	 * A boolean whether you are allowed to enter fullscreen. If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).
	 */
	readonly enabled: boolean;

	/**
	 * Exposes the raw properties (prefixed if needed) used internally.
	 */
	raw: RawEventNames;

	/**
	 * Make an element fullscreen.
	 *
	 * If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).
	 *
	 * Keep in mind that the browser will only enter fullscreen when initiated by user events like click, touch, key.
	 *
	 * @param element - Default is `<html>`. If called with another element than the currently active, it will switch to that if it's a decendant.
	 * @returns A promise that resolves after the element enters fullscreen.
	 */
	request(element?: Element): Promise<void>;

	/**
	 * Brings you out of fullscreen.
	 *
	 * @returns A promise that resolves after the element exits fullscreen.
	 */
	exit(): Promise<void>;

	/**
	 * Requests fullscreen if not active, otherwise exits.
	 *
	 * @returns A promise that resolves after the element enters/exits fullscreen.
	 */
	toggle(element?: Element): Promise<void>;

	/**
	 * Add a listener for when the browser switches in and out of fullscreen or when there is an error.
	 */
	on(name: EventName, handler: (event: Event) => void): void;

	/**
	 * Remove a previously registered event listener.
	 */
	off(name: EventName, handler: (event: Event) => void): void;

	/**
	 * Alias for `.on('change', function)`.
	 */
	onchange(handler: (event: Event) => void): void;

	/**
	 * Alias for `.on('error', function)`.
	 */
	onerror(handler: (event: Event) => void): void;
}

/**
 * Simple wrapper for cross-browser usage of the JavaScript [Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode), which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have to.
 */
declare const screenfull: Screenfull | false;

export default screenfull;
export as namespace screenfull;
