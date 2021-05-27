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
    category_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Categories'}
    },
    description: {
      type: DataTypes.TEXT(150),
      allowNull: false,
      unique: true
    },
  }, {});
  Trick.associate = function(models) {
    // associations can be defined here
    Trick.belongsTo(models.Sport, {foreignKey: 'sport_id'});
    Trick.belongsTo(models.Category, {foreignKey: 'category_id'})
    Trick.hasMany(models.Ability, {foreignKey: "trick_id"});
  };
  return Trick;
};
