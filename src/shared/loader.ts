import { IResourceDictionary } from 'pixi.js';

import { loader } from './pixi';

let isFirstRun = true;
export async function getGlobalResources(
	images: { name: string; content: unknown }[]
): Promise<IResourceDictionary> {
	return new Promise((resolve, reject) => {
		if (isFirstRun) {
			loader.onError.add(reject);

			images.forEach(({ name, content }) => loader.add(name, content));
			loader.load((_, resources) => {
				isFirstRun = false;
				return resolve(resources as IResourceDictionary);
			});
		} else {
			return resolve(loader.resources);
		}
	});
}
