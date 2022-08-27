/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      tablet: '550px',
      laptop: '1100px',
      desktop: '1500px',
    },
    extend: {
      fontFamily: {
        sans: ['RubikVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
