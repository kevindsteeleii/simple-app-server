'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};