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

  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   database: 'egg',
  //   username: 'root',
  //   password: 'example',
  //   define: {
  //     freezeTableName: true, // 强制表名称等于模型名称
  //     timestamps: false, // 禁用时间戳
  //   },

  // };

  // config.security = {
  //   csrf: {
  //     headerName: 'token', // 自定义请求头
  //   },
  // };

  // add your user config here
  const userConfig = {
    sequelize: {
      dialect: 'mysql',
      host: '47.93.233.47',
      port: 3306,
      database: 'egg',
      username: 'jihan',
      password: 'jh0427..',
      define: {
        freezeTableName: true, // 强制表名称等于模型名称
        timestamps: false, // 禁用时间戳
      },

    },
    security: {
      csrf: {
        headerName: 'token', // 自定义请求头
      },
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
