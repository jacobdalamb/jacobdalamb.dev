module.exports = {
  dark: 'media',
  experimental: 'all',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    mode: 'all',
    content: ['./public/index.html'],
    preserveHtmlElements: false,
  },
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    typography: {
      default: {
        css: {
          h1: {
            color: '#161e2e',
          },
          h2: {
            color: '#161e2e',
          },
          h3: {
            color: '#161e2e',
          },
          'pre code': {
            color: '#f4f5f7',
          },
          pre: {
            backgroundColor: '#252f3f',
          },
          color: '#161e2e',
          maxWidth: 'none',
          '[class~="lead"]': {
            color: '#161e2e',
          },
          a: {
            color: '#161e2e',
            textDecoration: 'none',
          },
        },
      },
    },
    screens: {
      sm: '667px',
      md: '1024px',
      lg: '1080px',
      xl: '2560px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      instagram: '#405de6',
      twitter: '#1da1f2',
      facebook: '#3b5998',
      hashnode: '#2962ff',

      fontawesome: '#228ae6',
      deno: '#161e2e',
      npm: '#cb3837',
      html: '#e34f26',
      css: '#3a8fd6',
      js: '#f7df1e',
      swift: '#fd9426',
      react: '#00d8ff',
      vue: '#42b883',
      node: '#215732',
      vsc: '#005ba4',
      svelte: '#ff3e00',
      sapper: '#159794',
      ts: '#294e80',
      git: '#f14e32',

      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d',
      },
      orange: {
        50: '#fff8f1',
        100: '#feecdc',
        200: '#fcd9bd',
        300: '#fdba8c',
        400: '#ff8a4c',
        500: '#ff5a1f',
        600: '#d03801',
        700: '#b43403',
        800: '#8a2c0d',
        900: '#73230d',
      },
      yellow: {
        50: '#fdfdea',
        100: '#fdf6b2',
        200: '#fce96a',
        300: '#faca15',
        400: '#e3a008',
        500: '#c27803',
        600: '#9f580a',
        700: '#8e4b10',
        800: '#723b13',
        900: '#633112',
      },
      green: {
        50: '#f3faf7',
        100: '#def7ec',
        200: '#bcf0da',
        300: '#84e1bc',
        400: '#31c48d',
        500: '#0e9f6e',
        600: '#057a55',
        700: '#046c4e',
        800: '#03543f',
        900: '#014737',
      },
      teal: {
        50: '#edfafa',
        100: '#d5f5f6',
        200: '#afecef',
        300: '#7edce2',
        400: '#16bdca',
        500: '#0694a2',
        600: '#047481',
        700: '#036672',
        800: '#05505c',
        900: '#014451',
      },
      blue: {
        50: '#ebf5ff',
        100: '#e1effe',
        200: '#c3ddfd',
        300: '#a4cafe',
        400: '#76a9fa',
        500: '#3f83f8',
        600: '#1c64f2',
        700: '#1a56db',
        800: '#1e429f',
        900: '#233876',
      },
      indigo: {
        50: '#f0f5ff',
        100: '#e5edff',
        200: '#cddbfe',
        300: '#b4c6fc',
        400: '#8da2fb',
        500: '#6875f5',
        600: '#5850ec',
        700: '#5145cd',
        800: '#42389d',
        900: '#362f78',
      },
      purple: {
        50: '#f6f5ff',
        100: '#edebfe',
        200: '#dcd7fe',
        300: '#cabffd',
        400: '#ac94fa',
        500: '#9061f9',
        600: '#7e3af2',
        700: '#6c2bd9',
        800: '#5521b5',
        900: '#4a1d96',
      },
      pink: {
        50: '#fdf2f8',
        100: '#fce8f3',
        200: '#fad1e8',
        300: '#f8b4d9',
        400: '#f17eb8',
        500: '#e74694',
        600: '#d61f69',
        700: '#bf125d',
        800: '#99154b',
        900: '#751a3d',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      half: '50%',
    },
    boxShadow: {
      xs: '0 0px 0px rgba(0, 0, 0, 0.014),0 0px 0.1px rgba(0, 0, 0, 0.02),0 0px 0.1px rgba(0, 0, 0, 0.025),0 0px 0.2px rgba(0, 0, 0, 0.03),0 0px 0.4px rgba(0, 0, 0, 0.036),0 0px 1px rgba(0, 0, 0, 0.05)',
      sm: '0 0px 0.1px rgba(0, 0, 0, 0.014),0 0.1px 0.1px rgba(0, 0, 0, 0.02),0 0.1px 0.3px rgba(0, 0, 0, 0.025),0 0.2px 0.4px rgba(0, 0, 0, 0.03),0 0.4px 0.8px rgba(0, 0, 0, 0.036),0 1px 2px rgba(0, 0, 0, 0.05)',
      default: '0 0.7px 2.2px rgba(0, 0, 0, 0.017),0 0.9px 2.7px rgba(0, 0, 0, 0.024),0 0.9px 3px rgba(0, 0, 0, 0.03),0 0.9px 3.1px rgba(0, 0, 0, 0.036),0 1px 2.9px rgba(0, 0, 0, 0.043),0 1px 2px rgba(0, 0, 0, 0.06)',
      md: '0 2.2px 4.3px -1px rgba(0, 0, 0, 0.017),0 2.7px 5.5px -1px rgba(0, 0, 0, 0.024),0 3px 6px -1px rgba(0, 0, 0, 0.03),0 3.1px 6.2px -1px rgba(0, 0, 0, 0.036),0 2.9px 5.9px -1px rgba(0, 0, 0, 0.043),0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 0.9px 1.3px -2px rgba(0, 0, 0, 0.014),0 1.8px 2.9px -2px rgba(0, 0, 0, 0.02),0 2.5px 4.4px -2px rgba(0, 0, 0, 0.025),0 3px 5.4px -2px rgba(0, 0, 0, 0.03),0 3.5px 5.9px -2px rgba(0, 0, 0, 0.036),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 10.8px 10.8px -5px rgba(0, 0, 0, 0.011),0 13.7px 13.7px -5px rgba(0, 0, 0, 0.016),0 15.1px 15.1px -5px rgba(0, 0, 0, 0.02),0 15.4px 15.4px -5px rgba(0, 0, 0, 0.024),0 14.7px 14.7px -5px rgba(0, 0, 0, 0.029),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 0.7px 1.4px -12px rgba(0, 0, 0, 0.07),0 1.7px 3.3px -12px rgba(0, 0, 0, 0.101),0 3.1px 6.3px -12px rgba(0, 0, 0, 0.125),0 5.6px 11.2px -12px rgba(0, 0, 0, 0.149),0 10.4px 20.9px -12px rgba(0, 0, 0, 0.18),0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      white: '4px 4px 0px 0px #FFFFFF;',
      indigo: '4px 4px 0px 0px #5850ec;',
      light: 'inset 0 -0.125em #FFFFFF',
      lightHover: 'inset 0 -1.8em 0 #161e2e',
      dark: 'inset 0 -0.125em #161e2e',
      darkHover: 'inset 0 -1.8em 0 #FFFFFF',
    },
    fontFamily: {
      sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
  },
  variants: {
    textColor: ({ after }) => after(['group-hover']),
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/typography')],
};
