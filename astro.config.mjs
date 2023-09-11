import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://portfolio-jacobthesheep.vercel.app/',
	output: 'server',
	adapter: vercel({
		analytics: true,
	}),
});
