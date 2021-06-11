'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async token(ctx) {
    // try {
    const token = ctx.app.jwt.sign({
      ...ctx.request.body,
    }, this.app.config.jwt.secret, {
      expiresIn: '60m', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
    });
    console.log(token);
    return token;

    // } catch (error) {
    //   console.log(error);
    //   return {
    //     code: 60204,
    //     message: 'Account and password are incorrect.',
    //   };
    // }


    // const { username, password } = ctx.request.body;
    // if (username === 'admin' && password === 'cool666') {
    //   ctx.body = {
    //     code: 20000,
    //     data: {
    //       roles: [ 'admin' ],
    //       introduction: 'I am a super administrator',
    //       avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    //       name: 'Super Admin',
    //     },
    //     message: 'success',
    //   };
    // } else {
    //   ctx.body = {
    //     code: 400,
    //     message: 'error',
    //   };
    // }

  }

}

module.exports = LoginController;
