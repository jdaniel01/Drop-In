'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define('Sport', {
    name: {
      type: DataTypes.STRING(30),
      validate: {
        len: [4, 30]
      },
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Sport.associate = function(models) {
    // associations can be defined here
    Sport.hasMany(models.Trick, {foreignKey: 'sport_id'});
    Sport.hasMany(models.Event, {foreignKey: 'sport_id'});
  };
  return Sport;
};
