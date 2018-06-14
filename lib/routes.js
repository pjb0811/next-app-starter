const routes = (module.exports = require('next-routes')());

routes.add('deal', '/deal/:id').add('promotion', '/promotion/:id');
