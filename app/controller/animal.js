'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class AnimalController extends Controller {

  async create() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const { name, age, gender, type } = ctx.request.body;
    const animal = await ctx.model.Animal.create({ name, age, gender, type, userId });
    ctx.status = 201;
    ctx.body = animal;
  }

  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Animal.findAll();
  }

  async show() {
    const ctx = this.ctx;
    if (await ctx.model.User.findByPk(toInt(ctx.params.id)) === null) {
      ctx.body = {
        message: '暂无数据',
      };
    } else {
      ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id), {
        include: [{
          model: ctx.model.Animal,
          as: 'animals',
          attributes: [ 'name', 'age', 'gender', 'type' ],
        }],
      });
    }
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const animal = await ctx.model.Animal.findByPk(id);
    if (!animal) {
      ctx.status = 404;
      ctx.body = {
        message: '暂未找到该宠物',
      };
      return;
    }

    const { name, age, gender, type } = ctx.request.body;
    await animal.update({ name, age, gender, type });
    ctx.body = animal;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const animal = await ctx.model.Animal.findByPk(id);
    if (!animal) {
      ctx.status = 404;
      return;
    }

    await animal.destroy();
    ctx.status = 200;
  }


}

module.exports = AnimalController;
