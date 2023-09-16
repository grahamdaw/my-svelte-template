import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'

import * as path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		})
	],
	resolve: {
		// These make sure the paths used in tsconfig.json are resolved correctly.
		alias: {
			'$': path.resolve(__dirname, 'src'),
		},
	},
});
