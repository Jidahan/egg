'use strict';

const moment = require('moment');
module.exports = app => {
  const { STRING, INTEGER, DataTypes } = app.Sequelize;
  const Animal = app.model.define('animal', {
    id: {
      type: INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: STRING(32),
      unique: true,
      allowNull: false,
      comment: '姓名',
    },
    age: {
      type: INTEGER,
      comment: '年龄',
    },
    gender: {
      type: STRING(10),
      comment: '性别',
    },
    type: {
      type: STRING(20),
      allowNull: true,
      comment: '类型',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      // 对查询结果的日期进行格式化
      get() {
        return moment(this.getDataValue('createdAt'))
          .format('YYYY-MM-DD HH:mm:ss');
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      // 对查询结果的日期进行格式化
      get() {
        return moment(this.getDataValue('updatedAt'))
          .format('YYYY-MM-DD HH:mm:ss');
      },
    },
    // timestamps: true,
    // freezeTableName: true,
  },
  {
    // 要使用 createdAt/updatedAt 必须开启这项配置
    timestamps: true,
    freezeTableName: true,
    // 必须开启 createdAt，updatedAt否则格式化无效
    // 或这不写配置项
    createdAt: true,
    updatedAt: true,
  });

  // 数据库同步
  Animal.sync();// ：如果数据库表不存在，则创建数据库表，如果存在，则不做任何操作
  // Animal.sync({ force: true });//：如果数据库表已经存在，则先删除数据库表，然后重新创建数据表
  // Animal.sync({ alter: true });//： 这个会比较数据库表当前状态（比如数据库表的列及数据类型等）与模型的不同之处，然后修改数据库表不同的地方以匹配模型

  Animal.associate = function() {
    app.model.Animal.belongsTo(app.model.User, { foreignKey: 'userId', targetKey: 'id' });
  };

  return Animal;
};
