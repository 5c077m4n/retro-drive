import { Loader } from 'pixi.js';

import bunnyPng from '@assets/img/bunny.png';

export async function imageLoader() {
	return new Promise((resolve, reject) => {
		const loader = Loader.shared;
		loader.onError.add(reject);

		loader.add('bunny', bunnyPng);
		loader.load((_, resources) => resolve(resources));
	});
}
