/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/ffmpeg-wasm-gif-converter-study/',
    src: '/ffmpeg-wasm-gif-converter-study/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
