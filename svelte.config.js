/** @type {import('@sveltejs/kit').Config} */
import path from 'path';
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			resolve: {
				alias: {
					$store: path.resolve('./src/store')
				}
			}
		}
	}
};

export default config;
