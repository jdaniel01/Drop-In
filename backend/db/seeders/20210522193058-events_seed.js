'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Events', [
     {host: 1, name: "Game of B.I.K.E.", location_id: 178, sport_id: 1, description: "Going to beat Matty Cramer!", when: new Date(), createdAt: new Date(), updatedAt: new Date()}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Events', null, {});
  }
};
