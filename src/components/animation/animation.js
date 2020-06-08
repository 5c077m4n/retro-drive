import { Application, Sprite, Texture } from 'pixi.js';
import gsap from 'gsap';

import { getRandomInt } from '../../lib';
import bunnyPng from '@assets/img/bunny.png';

function init() {
	const app = new Application({
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

	const texture = Texture.from(bunnyPng);

	const bunny1 = new Sprite(texture);
	bunny1.interactive = true;
	bunny1.anchor.set(0.5);
	bunny1.x = app.screen.width / 2;
	bunny1.y = app.screen.height / 2;

	app.stage.addChild(bunny1);
	app.ticker.start();
	gsap.to(bunny1, {
		rotation: 2 * Math.PI,
		repeat: -1,
		yoyo: true,
		duration: 2.0,
	});
}
