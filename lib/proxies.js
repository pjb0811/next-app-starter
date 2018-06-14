const proxies = {
  '/assist': {
    target: 'http://assist-api-dev.wemakeprice.com:8080',
    changeOrigin: true,
    rewrite: path => path.replace('/assist', ''),
    logs: true
  }
};

module.exports = proxies;
