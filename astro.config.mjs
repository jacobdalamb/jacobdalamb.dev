import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";

export default defineConfig({
	site: "https://jacoblamb.me",
	integrations: [
		svelte(),
		tailwind({ config: { applyBaseStyles: false } }),
		purgecss(),
	],
	integrations: [svelte(), tailwind()],
	output: "server",
	adapter: vercel(),
});
