const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const next = require('next');

const proxies = require('../lib/proxies');
const routes = require('../lib/routes');
const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.',
  dev
});
const routeHandler = routes.getRequestHandler(app);
const handle = app.getRequestHandler();
let server;

app
  .prepare()
  .then(() => {
    server = express();

    if (proxies) {
      Object.keys(proxies).forEach(function(context) {
        server.use(context, proxyMiddleware(proxies[context]));
      });
    }

    server.use(routeHandler);
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
