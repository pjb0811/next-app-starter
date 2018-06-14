const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const next = require('next');
// const Koa = require('koa');
// const koaProxy = require('koa-proxies');
// const Router = require('koa-router');
// const { parse } = require('url');

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
let router;

app
  .prepare()
  .then(() => {
    server = express();
    router = express.Router();

    if (proxies) {
      Object.keys(proxies).forEach(function(context) {
        server.use(context, proxyMiddleware(proxies[context]));
      });
    }

    server.use(routeHandler);

    // router.get('*', async (req, res) => {
    //   await handle(req, res);
    //   ctx.respond = false;
    // });

    // server.use(async (req, res, next) => {
    //   res.statusCode = 200;
    //   await next();
    // });

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
