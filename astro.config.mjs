import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-jacobthesheep.vercel.app/',
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
