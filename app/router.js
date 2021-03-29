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
  router.get('/user', controller.user.index); // 获取全部人员列表
  router.get('/user/:id', controller.user.show); // 获取单个人员数据
  router.post('/user', controller.user.create); // 添加人员
  router.put('/user/:id', controller.user.update); // 修改人员
  router.delete('/user/:id', controller.user.destroy); // 删除人员
}
