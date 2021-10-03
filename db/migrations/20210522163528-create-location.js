'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Cities'}
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'States'}
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Countries'}
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
      },
      website: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};
