module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.resolve.set('fallback', {
        'stream': require.resolve('stream-browserify'),
      });

    config.module
      .rule("js-plotly")
      .test(/\.js$/)
      .use("ify-loader")
      .loader("ify-loader")
      .end();
  }
};
