// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
  },
  plugins: ['@snowpack/plugin-postcss'],
  packageOptions: {},
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {},
};
