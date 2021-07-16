const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
router.use(jsonServer.rewriter({
    '/api/heroes': '/heroes'
}));
server.use(router);

server.listen(port);

