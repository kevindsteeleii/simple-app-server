'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};