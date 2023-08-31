import vercel from "@astrojs/vercel/serverless";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://portfolio-jacobthesheep.vercel.app/",
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
  image: {
    service: passthroughImageService(),
  },
});
