/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616642758847_8745';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg',
    username: 'root',
    password: 'example',
    define: {
      freezeTableName: true, // 强制表名称等于模型名称
      timestamps: false, // 禁用时间戳
    },

  };

  config.security = {
    csrf: {
      headerName: 'token', // 自定义请求头
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // mysql: {
    //   // 单数据库信息配置
    //   client: {
    //     // host
    //     host: 'localhost',
    //     // 端口号
    //     port: 3306,
    //     // 用户名
    //     user: 'test_user',
    //     // 密码
    //     password: 'test_password',
    //     // 数据库名
    //     database: 'test',
    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // },
  };

  return {
    ...config,
    ...userConfig,
  };
};
