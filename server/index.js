const next = require('next');
// const express = require('express');
// const proxyMiddleware = require('http-proxy-middleware');
const Koa = require('koa');
const proxies = require('koa-proxies');
const Router = require('koa-router');

const devProxy = {
  '/api': {
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    rewrite: path => path.replace('/api', ''),
    logs: true
  }
};

const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
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

    if (devProxy) {
      Object.keys(devProxy).forEach(function(context) {
        server.use(proxies(context, devProxy[context]));
      });
    }

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res);
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
