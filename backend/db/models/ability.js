'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ability = sequelize.define('Ability', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    trick_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Tricks" }
    }
    }, {});
  Ability.associate = function (models) {
    // associations can be defined here
    Ability.belongsTo(models.User, { foreignKey: "user_id" });
    Ability.belongsTo(models.Trick, { foreignKey: "trick_id" });
  };
  return Ability;
};
