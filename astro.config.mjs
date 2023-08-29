import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://portfolio-jacobthesheep.vercel.app/",
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
