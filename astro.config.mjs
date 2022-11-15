import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
	integrations: [svelte()],
	output: "server",
	adapter: vercel(),
});
