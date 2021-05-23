'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING(40)},
      allowNull: false,
      unique: true
      ,
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Cities'}
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'States'}
    },
    country_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'Countries'}
    },
    description: {
      type: DataTypes.TEXT(500),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.State, {foreignKey: 'state_id'});
    Location.belongsTo(models.City, {foreginKey: "city_id"});
    Location.belongsTo(models.Country, {foreignKey: 'country_id'});
    Location.hasMany(models.Event, {foreignKey: 'location_id'});
  };
  return Location;
};
