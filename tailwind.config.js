const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "667px",
      md: "1024px",
      lg: "1080px",
      xl: "2560px",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "@media (prefers-color-scheme: dark)": {
              h1: {
                color: theme("colors.gray.200"),
              },
              h2: {
                color: theme("colors.gray.200"),
              },
              a: {
                color: theme("colors.gray.200"),
              },
              '[class~="lead"]': {
                color: theme("colors.gray.200"),
              },
              color: theme("colors.gray.200"),
            },
            color: theme("colors.black"),
            '[class~="lead"]': {
              color: theme("colors.black"),
            },
            maxWidth: "none",
            a: {
              textDecoration: "none",
              color: theme("colors.gray.200"),
            },
          },
        },
      }),
      fontFamily: {
        sans: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
