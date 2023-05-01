import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";

export default defineConfig({
	site: "https://www.jtlamb.dev/",
	output: "server",
	adapter: vercel(),
	integrations: [image()],
});
