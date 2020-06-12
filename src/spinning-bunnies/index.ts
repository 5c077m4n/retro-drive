import { Container, Sprite } from 'pixi.js';

import { ticker, createRenderer, getGlobalResources } from '../shared/index';
import bunnyPng from '@assets/test/images/bunny.png';

export async function render(): Promise<void> {
	const resources = await getGlobalResources([
		{ name: 'bunny', content: bunnyPng },
	]);
	const renderer = createRenderer();
	const stage = new Container();

	const bunnies = Array(200)
		.fill(resources.bunny.texture)
		.map((texture) => Sprite.from(texture))
		.map((bunny) => {
			bunny.interactive = true;
			bunny.buttonMode = true;
			bunny.anchor.set(0.5);
			bunny.x = Math.random() * renderer.screen.width;
			bunny.y = Math.random() * renderer.screen.height;

			return bunny;
		})
		.map((bunny) => {
			ticker.add(() => (bunny.rotation += 0.1));
			return bunny;
		})
		.map((bunny) => {
			let isLarge = false;
			bunny.on('pointerdown', ({ target }: { target: Sprite }) => {
				if (isLarge) target.scale.set(1);
				else target.scale.set(5);

				isLarge = !isLarge;
			});

			return bunny;
		});
	stage.addChild(...bunnies);

	ticker.add(() => renderer.render(stage));
}
