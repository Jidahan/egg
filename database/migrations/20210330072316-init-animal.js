'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DataTypes, STRING } = Sequelize;
    await queryInterface.createTable('animal', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userId: INTEGER,
      name: STRING(30),
      age: INTEGER,
      gender: STRING(10),
      type: STRING(30),
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    });
    // .then(() => {
    //   return queryInterface.addConstraint('animal', [ 'userId' ], {
    //     type: 'foreign key',
    //     name: 'fk_animal_userId_user',
    //     references: {
    //       table: 'user',
    //       field: 'id',
    //     },
    //   });
    // });
  },
  // 在执行数据库降级时调用的函数，删除 user 表
  down: async queryInterface => {
    await queryInterface.dropTable('animal');
  },
};
