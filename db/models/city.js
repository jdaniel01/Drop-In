'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING(165),
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Countries' }
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'States' }
    }
  }, {});
  City.associate = function (models) {
    // associations can be defined here
    City.belongsTo(models.Country, { foreignKey: 'country_id' });
    City.belongsTo(models.State, { foreignKey: 'state_id' })
    City.hasMany(models.Location, { foreignKey: 'city_id' })
  };
  return City;
};
