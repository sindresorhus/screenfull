import {expectType} from 'tsd-check';
import screenfull from '.';

if (screenfull) {
	expectType<boolean>(screenfull.enabled);
	expectType<boolean>(screenfull.isFullscreen);
	expectType<Element | null>(screenfull.element);

	if (screenfull.enabled) {
		const elem: Element = document.getElementById('target')!;

		expectType<Promise<void>>(screenfull.request());
		expectType<Promise<void>>(screenfull.request(elem));
		expectType<Promise<void>>(screenfull.toggle());
		expectType<Promise<void>>(screenfull.toggle(elem));
		expectType<Promise<void>>(screenfull.exit());

		screenfull.on('change', event => expectType<Event>(event));
		screenfull.on('error', event => expectType<Event>(event));
		screenfull.off('change', event => expectType<Event>(event));
		screenfull.off('error', event => expectType<Event>(event));
		screenfull.onchange(event => expectType<Event>(event));
		screenfull.onerror(event => expectType<Event>(event));

		expectType<string>(screenfull.raw.requestFullscreen);
		expectType<string>(screenfull.raw.exitFullscreen);
		expectType<string>(screenfull.raw.fullscreenElement);
		expectType<string>(screenfull.raw.fullscreenEnabled);
		expectType<string>(screenfull.raw.fullscreenchange);
		expectType<string>(screenfull.raw.fullscreenerror);
	}
}
