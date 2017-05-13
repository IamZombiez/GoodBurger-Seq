const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    eaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
    // myTime: {
    //   type: DataTypes.DATE,
    //   defaultValue: Sequelize.NOW
    // }

  });
  return Burgers;
};