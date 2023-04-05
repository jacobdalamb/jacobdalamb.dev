const OpenProps = require("open-props");
module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-preset-env"),
		require("postcss-jit-props")({
			...OpenProps,
		}),
	],
};
