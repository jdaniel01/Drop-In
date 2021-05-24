'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Sports', [
     {name: "BMX", description: "Performing tricks and/or stunts while riding a bicycle with (usually) a 20 inch wheelbase.", createAt: new Date(), updatedAt: new Date()},
     {name: "Skateboarding", description: "Performing tricks and/or stunts while riding a skateboard.", createdAt: new Date(), updatedAt: new Date()},
     {name: "Inline Skating", description: "Performing tricks and/or stunts while wearing roller blades (inline skates).", createdAt: new Date(), updatedAt: new Date()},
     {name: "Scootering", description: "Performing tricks and/or stunts while riding a scooter.", createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Sports', null, {});
  }
};
