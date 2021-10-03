'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    },
    abbrv: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true
  }
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
    Country.hasMany(models.State, {foreignKey: 'country_id'});
    Country.hasMany(models.City, {foreignKey: 'country_id'});
    Country.hasMany(models.Location, {foreignKey: 'country_id'});
  };
  return Country;
};
