import { Loader } from 'pixi.js';

import bunnyPng from '@assets/img/bunny.png';

let isFirstRun = true;
export async function getGlobalResources() {
	return new Promise((resolve, reject) => {
		const loader = Loader.shared;

		if (isFirstRun) {
			loader.onError.add(reject);

			loader.add('bunny', bunnyPng);
			loader.load((_, resources) => {
				isFirstRun = false;
				return resolve(resources);
			});
		} else {
			return resolve(loader.resources);
		}
	});
}
