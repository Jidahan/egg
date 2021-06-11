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

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.jwt = {
    secret: 'ylw', // 自定义 token 的加密条件字符串
  };

  // add your user config here
  const userConfig = {
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'egg',
      username: 'root',
      password: 'example',
      timezone: '+08:00',
      define: {
        freezeTableName: true, // 强制表名称等于模型名称
        timestamps: false, // 禁用时间戳
      },

    },
    // security: {
    //   csrf: {
    //     headerName: 'Authorization', // 自定义请求头
    //   },
    //   // csrf: {
    //   //   enable: false,
    //   // },
    // },

  };

  return {
    ...config,
    ...userConfig,
  };
};
