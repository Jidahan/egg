'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwt = middleware.jwt(app.config.jwt);
  setUserRouter(router, controller, jwt);
  setUserAndAnimalRouter(router, controller, jwt);
  setLogin(router, controller, jwt);
};

function setUserRouter(router, controller, jwt) { // 人员
  // router.get('/user', controller.user.index); // 获取全部人员列表
  // router.get('/user/:id', controller.user.show); // 获取单个人员数据
  // router.post('/user', controller.user.create); // 添加人员
  // router.put('/user/:id', controller.user.update); // 修改人员
  // router.delete('/user/:id', controller.user.destroy); // 删除人员
  router.resources('user', '/user', jwt, controller.user);
}


function setUserAndAnimalRouter(router, controller, jwt) { // 人关联宠物
  // router.get('/animal', controller.animal.index); // 获取全部人员和宠物列表
  router.post('/user/:id/animal', controller.animal.create); // 根据用户添加关联宠物
  router.get('/user/:id/animal', controller.animal.show); // 根据用户查询关联宠物
  // router.put('/animal/:id', controller.animal.update); // 修改宠物信息
  // router.delete('/animal/:id', controller.animal.destroy); // 删除宠物信息
  router.resources('animal', '/animal', jwt, controller.animal);
}

function setLogin(router, controller, jwt) { // 登陆
  router.post('/login', controller.login.index);
  router.get('/info', jwt, controller.login.info);
}
