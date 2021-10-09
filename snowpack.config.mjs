/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: '/_dist',
    public: '/',
  },
  packageOptions: {},
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {},
  plugins: ['@snowpack/plugin-postcss'],
};
