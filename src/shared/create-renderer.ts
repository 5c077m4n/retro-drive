import { Renderer } from 'pixi.js';

export function createRenderer(): Renderer {
	// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	const renderer = new Renderer({
		height: window.innerHeight,
		width: window.innerWidth,
		resolution: window.devicePixelRatio || 1,
		autoDensity: true,
		antialias: true,
		backgroundColor: 0x1099bb,
	});
	window.addEventListener('resize', () => {
		renderer.resize(window.innerWidth, window.innerHeight);
	});
	document.body.appendChild(renderer.view);

	return renderer;
}
