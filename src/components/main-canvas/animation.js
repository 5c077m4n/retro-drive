import * as PIXI from 'pixi.js';

import bunnyPng from '@assets/img/bunny.png';

function init() {
	// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	const renderer = new PIXI.Renderer({
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

export function render() {
	const renderer = init();
	const stage = new PIXI.Container();

	const texture = PIXI.Texture.from(bunnyPng);
	const bunny1 = PIXI.Sprite.from(texture);
	bunny1.interactive = true;
	bunny1.buttonMode = true;
	bunny1.anchor.set(0.5);

	let isLarge = false;
	function onClick() {
		if (isLarge) {
			bunny1.scale.x /= 5;
			bunny1.scale.y /= 5;
		} else {
			bunny1.scale.x *= 5;
			bunny1.scale.y *= 5;
		}
		isLarge = !isLarge;
	}
	bunny1.on('pointerdown', onClick);
	stage.addChild(bunny1);

	const ticker = new PIXI.Ticker();
	ticker.add(() => {
		bunny1.x = renderer.screen.width / 2;
		bunny1.y = renderer.screen.height / 2;
		bunny1.rotation += 0.1;
		renderer.render(stage);
	});
	ticker.start();
}
