import vercel from "@astrojs/vercel/serverless";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import { authorUrlString } from "./src/utils/meta";

// https://astro.build/config
export default defineConfig({
	site: authorUrlString,
	output: "server",
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
