const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/index.html'],
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
                color: '#FEF08A',
              },
              '.lead': {
                color: '#e5e7eb',
              },
              color: '#e5e7eb',
            },
            '.lead.intro': {
                color: '#000',
              },
            color: '#000',
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
            },
          },
        },
      },
      boxShadow: {
        light: 'inset 0 -0.125em #FFFFFF',
        lightHover: 'inset 0 -1.8em 0 #000',
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
