'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() { // async await 异步
    const dataList = await this.data();
    this.ctx.body = {
      code: 0,
      masg: 'success!',
      data: dataList,
    };
  }

  async data() {
    return {
      list: [
        { id: 1, title: 'news1', url: 'https://i.loli.net/2019/05/20/5ce26578e0e5549312.png' },
        { id: 2, title: 'news2', url: 'https://i.loli.net/2019/05/20/5ce2657a0e01277224.png' },
        { id: 3, title: 'news3', url: 'https://i.loli.net/2019/05/20/5ce2657b67be250185.png' },
      ],
    };
  }
}

module.exports = NewsController;
