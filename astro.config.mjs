import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
	site: "https://jacoblamb.me",
	integrations: [svelte()],
	output: "server",
	adapter: vercel(),
});
