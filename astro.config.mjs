import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
	site: "https://www.jacoblamb.me",
	output: "server",
	adapter: vercel(),
});
