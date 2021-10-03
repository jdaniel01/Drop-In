'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stat = sequelize.define('Stat', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "Users"}
    },
    trick_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "Tricks"}
    },
  }, {});
  Stat.associate = function(models) {
    // associations can be defined here
    Stat.belongsTo(models.User, {foreignKey: "user_id"});
    Stat.belongsTo(models.Trick, {foreignKey: "trick_id"});
  };
  return Stat;
};
