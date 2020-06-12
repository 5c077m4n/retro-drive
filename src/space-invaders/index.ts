import { getGlobalResources } from '../shared/index';
import baddies from '@assets/space-invaders/images/baddies-tiles.png';
import warning from '@assets/space-invaders/images/warn-apace-invaders.png';

export async function render(): Promise<void> {
	const resources = await getGlobalResources([
		{ name: 'warning', content: warning },
		{ name: 'baddies', content: baddies },
	]);
}
