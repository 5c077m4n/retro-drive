import { Sprite } from 'pixi.js';

export function testAABBCollision(o1: Sprite, o2: Sprite): boolean {
	const bounds1 = o1.getBounds();
	const bounds2 = o2.getBounds();

	return (
		bounds1.x < bounds2.x + bounds2.width &&
		bounds1.x + bounds2.width > bounds2.x &&
		bounds1.y < bounds2.y + bounds2.height &&
		bounds1.y + bounds2.height > bounds2.y
	);
}
