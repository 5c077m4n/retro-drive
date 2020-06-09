import * as PIXI from 'pixi.js';
import gsap from 'gsap';

import { createRenderer } from './create-renderer';
import { imageLoader } from './image-loader';

export async function render() {
	const resources = await imageLoader();
	const renderer = createRenderer();
	const stage = new PIXI.Container();

	const bunnies = Array(20)
		.fill(resources.bunny.texture)
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
				if (isLarge) bunny.scale.set(1);
				else bunny.scale.set(5);

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
