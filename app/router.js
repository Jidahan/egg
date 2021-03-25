'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.news.list);
  // router.resources('users', '/users', controller.user);
  setUserRouter(router, controller);
};

function setUserRouter(router, controller) {
  router.get('/user', controller.user.index);
  router.get('/user/:id', controller.user.show);
  router.post('/user', controller.user.create);
  router.put('/user/:id', controller.user.update);
}
