const proxies = {
  '/assist': {
    target: 'http://assist-api-dev.wemakeprice.com:8080',
    changeOrigin: true,
    pathRewrite: { '^/assist': '' }
  }
};

module.exports = proxies;
