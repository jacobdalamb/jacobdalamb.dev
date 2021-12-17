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
