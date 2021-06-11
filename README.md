# egg

## How to start the database

./node_modules/.bin/sequelize db:create

## How to start the data table

./node_modules/.bin/sequelize db:migrate

## How to start the seed

./node_modules/.bin/sequelize db:seed:all

## drop the database

./node_modules/.bin/sequelize db:drop

## 区分环境 启动
EGG_SERVER_ENV=prod npm start


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
[网上教程 引入sequelize]: https://www.jianshu.com/p/2f78b1c88c51