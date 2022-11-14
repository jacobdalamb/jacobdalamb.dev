import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [svelte(), tailwind()],
	output: "server",
	adapter: vercel(),
});
