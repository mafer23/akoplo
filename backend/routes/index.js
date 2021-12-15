const userRouter = require('./users');

// const usersRouter = require('./users.router');

function routerApi(app) {
 app.use('/users', userRouter);
//  app.use('/users', productsRouter);
//  app.use('/categories', productsRouter);
}

module.exports = routerApi;
