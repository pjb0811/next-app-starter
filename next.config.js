module.exports = {
  webpack(config) {
    /*
    config.devServer = config.devServer || {};
    config.devServer.proxy = {
      '/assist': {
        target: 'http://assist-api-dev.wemakeprice.com:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/assist': ''
        }
      }
    };
    */

    return config;
  }
};
