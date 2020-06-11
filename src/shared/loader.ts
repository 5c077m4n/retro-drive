import { IResourceDictionary } from 'pixi.js';

import { loader } from './pixi';
import bunnyPng from '@assets/img/bunny.png';

let isFirstRun = true;
export async function getGlobalResources(): Promise<IResourceDictionary> {
	return new Promise((resolve, reject) => {
		if (isFirstRun) {
			loader.onError.add(reject);

			loader.add('bunny', bunnyPng);
			loader.load((_, resources) => {
				isFirstRun = false;
				return resolve(resources as IResourceDictionary);
			});
		} else {
			return resolve(loader.resources);
		}
	});
}
