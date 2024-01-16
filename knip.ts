import type { KnipConfig } from "knip";

const config: KnipConfig = {
	astro: {
		entry: [
			"astro.config.{js,cjs,mjs,ts}",
			"src/content/config.ts",
			"src/pages/**/*.{astro,mdx,js,ts}",
			"src/components/**/*.{astro,mdx,js,ts}",
		],
	},
	project: ["src/**/*.ts"],
	ignore: ".astro/types.d.ts",
	compilers: {
		astro: (text: string) => [...text.matchAll(/import[^;]+/g)].join("\n"),
		css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join("\n"),
		mdx: (text: string) => [...text.matchAll(/import[^;]+/g)].join("\n"),
	},
};

export default config;
