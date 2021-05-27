'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define('Rider', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Events" }
    }
  }, {});
  Rider.associate = function (models) {
    // associations can be defined here
    Rider.belongsTo(models.Event, {foreignKey: "event_id"});
    Rider.belongsTo(models.User, {foreignKey: "user_id"});

  };
  return Rider;
};
