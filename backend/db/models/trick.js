'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trick = sequelize.define('Trick', {
    sport_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Sports'},
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50]
      }
    },
    description: {
      type: DataTypes.TEXT(150),
      allowNull: false,
      unique: true
    },
    pads: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Users'}
    },
    prerequisite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {model: 'Tricks'}
    }
  }, {});
  Trick.associate = function(models) {
    // associations can be defined here
    Trick.belongsTo(models.Trick, {foreignKey: 'prerequisite'});
    Trick.belongsTo(models.Sport, {foreignKey: 'sport_id'});
    Trick.belongsTo(models.User, {foreignKey: 'creator'});
    Trick.hasMany(models.Trick, {foreignKey: 'prerequisite'});
  };
  return Trick;
};
