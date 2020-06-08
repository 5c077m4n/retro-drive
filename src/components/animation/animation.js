import * as PIXI from 'pixi.js';
import gsap from 'gsap';

import { getRandomInt } from '../../lib';
import bunnyPng from '@assets/img/bunny.png';

function init() {
	const app = new PIXI.Application({
		height: window.innerHeight,
		width: window.innerWidth,
		antialias: true,
		resolution: 1,
		backgroundColor: 0x1099bb,
	});
	app.renderer.autoResize = true;
	app.ticker.stop();
	document.body.appendChild(app.view);

	return app;
}

export function render() {
	const app = init();

	const texture = PIXI.Texture.from(bunnyPng);

	const bunny1 = PIXI.Sprite.from(texture);
	bunny1.interactive = true;
	bunny1.buttonMode = true;
	bunny1.anchor.set(0.5);
	bunny1.x = getRandomInt(100, app.screen.width - 100);
	bunny1.y = getRandomInt(100, app.screen.height - 100);

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

	app.stage.addChild(bunny1);

	app.ticker.start();
	gsap.to(bunny1, {
		rotation: 2 * Math.PI,
		repeat: -1,
		yoyo: true,
		duration: 2.0,
	});
}
