import { render } from './spinning-bunnies/index';

import './index.scss';

if (env.PRODUCTION && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => console.log('SW registered: ', registration))
			.catch((registrationError) =>
				console.error('SW registration failed: ', registrationError)
			);
	});
}

render();
