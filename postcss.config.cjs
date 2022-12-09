// const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-jit-props")({ ...OpenProps, files: ["./src/styles/props.css"] }),
	],
};
