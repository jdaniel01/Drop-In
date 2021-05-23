'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      host: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {model: 'Users'},
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {model: "Locations"},
        allowNull: false
      },
      when: {
        type: Sequelize.DATE,
        allowNull: false
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
    return queryInterface.dropTable('Events');
  }
};
