'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = {
      code: 1000,
      data: await ctx.model.User.findAll(),
    };
  }

  async show() {
    const ctx = this.ctx;
    if (await ctx.model.User.findByPk(toInt(ctx.params.id)) === null) {
      ctx.body = {
        message: '暂未找到该人员',
      };
    } else {
      ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
    }
  }

  async create() {
    const ctx = this.ctx;
    const { name, age, gender, phone } = ctx.request.body;
    const user = await ctx.model.User.create({ name, age, gender, phone });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      ctx.body = {
        message: '暂未找到该人员',
      };
      return;
    }

    const { name, age, gender } = ctx.request.body;
    await user.update({ name, age, gender });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
