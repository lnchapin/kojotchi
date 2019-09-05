'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    evoScore: DataTypes.INTEGER,
    foodScore: DataTypes.INTEGER,
    hygineScore: DataTypes.INTEGER,
    lastFood: DataTypes.DATE,
    lastHygine: DataTypes.DATE,
    lastAttention: DataTypes.DATE,
    attentionScore: DataTypes.INTEGER,
    type: DataTypes.STRING,
    died: DataTypes.BOOLEAN
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
  };
  return Pet;
};
