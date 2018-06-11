module.exports = {
  webpack: config => {
    /* config.devServer = config.devServer || {};
    config.devServer.proxy = {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }; */

    return config;
  }
};
