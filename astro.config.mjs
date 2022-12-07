import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://jacoblamb.me",
	integrations: [
		svelte(),
		tailwind({
			// Example: Disable injecting a basic `base.css` import on every page.
			// Useful if you need to define and/or import your own custom `base.css`.
			config: { applyBaseStyles: false },
		}),
	],
	output: "server",
	adapter: vercel(),
});
