import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { authorUrlString } from "./src/utils/meta";

// https://astro.build/config
export default defineConfig({
	site:
		process.env.VERCEL_ENV === "production"
			? `${authorUrlString}`
			: process.env.VERCEL_URL
			  ? `https://${process.env.VERCEL_URL}/`
			  : "https://localhost:4321/",
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});
