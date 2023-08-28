import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

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
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
