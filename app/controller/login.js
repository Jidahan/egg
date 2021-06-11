'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async index() {
    const ctx = this.ctx;

    const token = ctx.app.jwt.sign({
      ...ctx.request.body,
    }, this.app.config.jwt.secret, {
      expiresIn: '999m', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
    });
    ctx.body = {
      code: 1000,
      token,
    };
  }

  async info() {
    const ctx = this.ctx;
    ctx.body = {
      code: 1000,
      data: {
        roles: [ 'admin' ],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
      },
      message: 'success',
    };
  }

}

module.exports = LoginController;
