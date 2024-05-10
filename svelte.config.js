import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			layout: {
				blog: './src/lib/layouts/Blog.svelte',
				features: './src/lib/layouts/Features.svelte'
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
