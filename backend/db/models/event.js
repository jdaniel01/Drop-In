'use strict';
const {Validator} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    host: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Users'}
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50]
      }
    },
    sport_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: "Sports"}
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Locations'}
    },
    when: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User, {foreignKey: 'host'});
    Event.belongsTo(models.Location, {foreignKey: 'location_id'});
    Event.belongsTo(models.Sport, {foreignKey: 'sport_id'});
  };
  return Event;
};
