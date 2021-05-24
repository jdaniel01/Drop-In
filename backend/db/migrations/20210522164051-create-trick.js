'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tricks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sport_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Sports'}
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Categories'}
      },
      description: {
        type: Sequelize.TEXT(150),
        allowNull: false,
        unique: true
      },
      pads: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      creator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tricks');
  }
};
