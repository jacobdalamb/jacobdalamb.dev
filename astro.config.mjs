import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://jacoblamb.me",
	integrations: [svelte(), tailwind()],
	output: "server",
	adapter: vercel(),
});
