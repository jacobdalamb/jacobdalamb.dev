import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://www.jtlamb.dev/",
  output: "server",
  adapter: vercel({ analytics: true }),
});
