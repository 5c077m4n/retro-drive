import * as PIXI from 'pixi.js';
import gsap from 'gsap';

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

	const bunnies = Array(20)
		.fill(PIXI.Texture.from(bunnyPng))
		.map((texture) => PIXI.Sprite.from(texture))
		.map((bunny) => {
			bunny.interactive = true;
			bunny.buttonMode = true;
			bunny.anchor.set(0.5);
			bunny.x = Math.random() * renderer.screen.width;
			bunny.y = Math.random() * renderer.screen.height;

			return bunny;
		})
		.map((bunny) => {
			let isLarge = false;
			bunny.on('pointerdown', () => {
				if (isLarge) {
					bunny.scale.x /= 5;
					bunny.scale.y /= 5;
				} else {
					bunny.scale.x *= 5;
					bunny.scale.y *= 5;
				}
				isLarge = !isLarge;
			});

			return bunny;
		});
	bunnies.forEach((bunny) => stage.addChild(bunny));

	gsap.ticker.add((time) => {
		bunnies.forEach((bunny) => (bunny.rotation += Math.sin(time) / 7));
		renderer.render(stage);
	});
}
