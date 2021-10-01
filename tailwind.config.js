const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: ['./public/index.html'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '667px',
      md: '1024px',
      lg: '1080px',
      xl: '2560px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '@media (prefers-color-scheme: dark)': {
              h1: {
                color: '#e5e7eb',
              },
              h2: {
                color: '#e5e7eb',
              },
              a: {
                color: '#FEF08A', // #FEF08A yellow-200 8.35, #D9F99D lime-200 8.33
              },
              color: '#e5e7eb',
              'p.lead': {
                color: '#e5e7eb',
              },
            },
            color: '#111827',
            '[class~=lead]': {
              color: '#111827',
            },
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
            },
          },
        },
      },
      boxShadow: {
        light: 'inset 0 -0.125em #FFFFFF',
        lightHover: 'inset 0 -1.8em 0 #111827',
        dark: 'inset 0 -0.125em #FEF08A',
        darkHover: 'inset 0 -1.8em 0 #FEF08A',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
