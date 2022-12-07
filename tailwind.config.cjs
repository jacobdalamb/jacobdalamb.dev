/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["RubikVariable", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		function ({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = "") {
				return Object.keys(colorObj).reduce((vars, colorKey) => {
					const value = colorObj[colorKey];

					if (typeof value === "object") {
						// If the value is an object, call extractColorVars recursively on the object
						// and merge the resulting object into the vars object
						return { ...vars, ...extractColorVars(value, `-${colorKey}`) };
					}

					if (!value.toString().startsWith("#")) {
						return vars;
					}

					// Add the new color variable to the vars object
					return { ...vars, [`--color${colorGroup}-${colorKey}`]: value };
				}, {});
			}

			addBase({
				":root": extractColorVars(theme("colors")),
			});
		},
	],
};
