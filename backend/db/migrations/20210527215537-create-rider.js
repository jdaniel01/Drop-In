'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Riders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users"}
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Events"}
      },
      sport_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Sports"}
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
    return queryInterface.dropTable('Riders');
  }
};
