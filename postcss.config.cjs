const OpenProps = require("open-props");
module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-jit-props")({
			...OpenProps,
			"--c-bg": "Canvas",
			"--c-text": "CanvasText",
			"--c-link-text": "LinkText",
			"--c-visited-text": "VisitedText",
			"--c-active-text": "ActiveText",
			"--c-button-bg": "ButtonFace",
			"--c-button-text": "ButtonText",
			"--c-button-border": "ButtonBorder",
			"--c-field-bg": "Field",
			"--c-field-text": "FieldText",
			"--c-highlight-bg": "Highlight",
			"--c-highlight-text": "HighlightText",
			"--c-selected-item": "SelectedItem",
			"--c-selected-item-text": "SelectedItemText",
			"--c-mark-bg": "Mark",
			"--c-mark-text": "MarkText",
			"--c-gray-text": "GrayText",
			"--c-accent-bg": "AccentColor",
			"--c-accent-text": "AccentColorText",
			"--dark": "@custom-media --dark (prefers-color-scheme: dark);",
		}),
	],
};
