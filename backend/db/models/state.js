'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    abbrv: {
      type: DataTypes.STRING(5),
      allowNull: true,
      unique: true
    },
    country_id: {
      type: DateTypes.INTEGER,
      allowNull: false,
      references: {model: 'Countries'}
    }
  }, {});
  State.associate = function(models) {
    // associations can be defined here
    State.belongsTo(models.Country, {foreignKey: 'country_id'});
    State.hasMany(models.City, {foreignKey: 'state_id'});
    State.hasMany(models.Location, {foreignKey: 'state_id'});
  };
  return State;
};
