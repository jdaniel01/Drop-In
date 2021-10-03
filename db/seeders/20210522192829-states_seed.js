'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('States', [
    {
      name: 'Alabama',
      abbrv: 'AL',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alaska',
      abbrv: 'AK',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Arizona',
      abbrv: 'AZ',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Arkansas',
      abbrv: 'AR',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'California',
      abbrv: 'CA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Colorado',
      abbrv: 'CO',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Connecticut',
      abbrv: 'CT',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Delaware',
      abbrv: 'DE',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Florida',
      abbrv: 'FL',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Georgia',
      abbrv: 'GA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hawaii',
      abbrv: 'HI',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Idaho',
      abbrv: 'ID',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Illinois',
      abbrv: 'IL',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Indiana',
      abbrv: 'IN',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iowa',
      abbrv: 'IA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kansas',
      abbrv: 'KS',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kentucky',
      abbrv: 'KY',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Louisiana',
      abbrv: 'LA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Maine',
      abbrv: 'ME',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Maryland',
      abbrv: 'MD',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Massachusetts',
      abbrv: 'MA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Michigan',
      abbrv: 'MI',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Minnesota',
      abbrv: 'MN',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mississippi',
      abbrv: 'MS',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Missouri',
      abbrv: 'MO',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Montana',
      abbrv: 'MT',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nebraska',
      abbrv: 'NE',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nevada',
      abbrv: 'NV',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New Hampshire',
      abbrv: 'NH',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New Jersey',
      abbrv: 'NJ',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New Mexico',
      abbrv: 'NM',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New York',
      abbrv: 'NY',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'North Carolina',
      abbrv: 'NC',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'North Dakota',
      abbrv: 'ND',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ohio',
      abbrv: 'OH',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Oklahoma',
      abbrv: 'OK',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Oregon',
      abbrv: 'OR',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pennsylvania',
      abbrv: 'PA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rhode Island',
      abbrv: 'RI',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'South Carolina',
      abbrv: 'SC',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'South Dakota',
      abbrv: 'SD',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tennessee',
      abbrv: 'TN',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Texas',
      abbrv: 'TX',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Utah',
      abbrv: 'UT',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vermont',
      abbrv: 'VT',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Virginia',
      abbrv: 'VA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Washington',
      abbrv: 'WA',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'West Virginia',
      abbrv: 'WV',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wisconsin',
      abbrv: 'WI',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wyoming',
      abbrv: 'WY',
      country_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('States', null, {});
  }
};
