import { Application, Sprite, Texture } from 'pixi.js';

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
	document.body.appendChild(app.view);

	return app;
}

export function render() {
	const app = init();

	const texture = Texture.from(bunnyPng);

	const bunny = new Sprite(texture);
	bunny.interactive = true;
	bunny.anchor.set(0.5);
	bunny.x = app.screen.width / 2;
	bunny.y = app.screen.height / 2;

	app.stage.addChild(bunny);
	app.ticker.add((delta) => (bunny.rotation += 0.01 * delta));
}
