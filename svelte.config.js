/** @type {import('@sveltejs/kit').Config} */
import generated from "@sveltejs/adapter-static";

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: generated()
	}
};

export default config;
