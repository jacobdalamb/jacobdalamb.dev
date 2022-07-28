const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			tablet: '550px',
			laptop: '1100px',
			desktop: '1500px'
		},
		extend: {
			fontFamily: {
				sans: ['RubikVariable', ...defaultTheme.fontFamily.sans]
			}
		}
	}
};
