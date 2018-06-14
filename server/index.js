// const express = require('express');
// const proxyMiddleware = require('http-proxy-middleware');
const next = require('next');
const Koa = require('koa');
const koaProxy = require('koa-proxies');
const Router = require('koa-router');
const { parse } = require('url');

const proxies = require('../lib/proxies');
const getRoutes = require('../lib/routes');
const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const routes = getRoutes();
const app = next({
  dir: '.',
  dev
});

const handle = app.getRequestHandler();
let server;
let router;

app
  .prepare()
  .then(() => {
    server = new Koa();
    router = new Router();

    if (proxies) {
      Object.keys(proxies).forEach(function(context) {
        server.use(koaProxy(context, proxies[context]));
      });
    }

    router.get('*', async ctx => {
      const { req, res } = ctx;
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;
      const route = routes[pathname];
      if (route) {
        return app.render(req, res, route.page, query);
      }
      await handle(req, res);
      ctx.respond = false;
    });

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    server.use(router.routes());
    // server.all('*', (req, res) => handle(req, res));

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
