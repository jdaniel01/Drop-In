'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Cities', [
    {
        name: "Alabaster",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alexander City",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Andalusia",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anniston",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ashland",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Athens",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Atmore",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Auburn",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bay Minette",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bessemer",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Birmingham",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chickasaw",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clanton",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cullman",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Decatur",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Demopolis",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dothan",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Enterprise",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eufaula",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairhope",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Florence",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Foley",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Payne",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gadsden",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greensboro",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenville",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gulf Shores",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Guntersville",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huntsville",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jasper",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Madison",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marion",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mobile",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Montgomery",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Muscle Shoals",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Iberia",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Opelika",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ozark",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Phenix City",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Prichard",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Scottsboro",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Selma",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sheffield",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sulligent",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sylacauga",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Talladega",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Troy",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tuscaloosa",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tuscumbia",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tuskegee",
        state_id: 1, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anchorage",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barrow",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cordova",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eagle River",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elmendorf",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairbanks",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Girdwood",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Haines",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Homer",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Juneau",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kenai",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ketchikan",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kodiak",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kotzebue",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nikiski",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nome",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Pole",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palmer",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Seward",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sitka",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Skagway",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Soldotna",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Valdez",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wasilla",
        state_id: 2, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ajo",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Apache Junction",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Avondale",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bagdad",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Benson",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bisbee",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Buckeye",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bullhead City",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Camp Verde",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Casa Grande",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chandler",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chinle",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chino Valley",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clifton",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coolidge",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cottonwood",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Douglas",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Flagstaff",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Florence",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Defiance",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fountain Hills",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ganado",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gila Bend",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gilbert",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glendale",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Globe",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Goodyear",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huachuca City",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kingman",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Havasu City",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marana",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Maricopa",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mesa",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New River",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nogales",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oraibi",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Page",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Payson",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peoria",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Phoenix",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Picture Rocks",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Prescott",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Quartzsite",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Queen Creek",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Red Rock",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Safford",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Scottsdale",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sedona",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Showlow",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sierra Vista",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Snowflake",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Somerton",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "St. Johns",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Surprise",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tempe",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tombstone",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tuba City",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tucson",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Walpi",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wickenburg",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Willcox",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Williams",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Window Rock",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winslow",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yuma",
        state_id: 3, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arkadelphia",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arkansas Post",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Batesville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Benton",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bentonville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Blytheville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Camden",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Conway",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Crossett",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dardanelle",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "De Queen",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Dorado",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eureka Springs",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fayetteville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Forrest City",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Smith",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gentry",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harrison",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Helena",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hope",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hot Springs",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jacksonville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jonesboro",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Little Rock",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Magnolia",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morrilton",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nashville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Little Rock",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Osceola",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Paragould",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Piggott",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pine Bluff",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pocahontas",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rogers",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Russellville",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Searcy",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Siloam Springs",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Star City",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stuttgart",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Trumann",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Van Buren",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Memphis",
        state_id: 4, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alameda",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alhambra",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "American Canyon",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anaheim",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anderson",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Antioch",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arcadia",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arcata",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Atascadero",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Atwater",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Auburn",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Avenal",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bakersfield",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barstow",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belmont",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Benicia",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Berkeley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beverly Hills",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Biggs",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bishop",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bolinas",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brea",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brentwood",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Buena Park",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Burbank",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Calexico",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Calistoga",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cameron Park",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Campbell",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Capitola",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carlsbad",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carmel",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carmichael",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Castro Valley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Castroville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ceres",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chico",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chula Vista",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Citrus Heights",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Claremont",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clearlake",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cloverdale",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clovis",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Compton",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Concord",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corning",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corona",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coronado",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corte Madera",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Costa Mesa",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Crescent City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Culver City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Daly City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Davis",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Delano",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Delhi",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dixon",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Downey",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dublin",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Oakland",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Centro",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Cerrito",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Dorado Hills",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elk Grove",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Monte",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Escondido",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eureka",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairfield",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Firebaugh",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Folsom",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fontana",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fremont",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fresno",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fullerton",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Galt",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Garden Grove",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gilroy",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glendale",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gonzales",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grass Valley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenfield",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gridley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Groveland",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hanford",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hayward",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Healdsburg",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hollister",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hollywood",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huntington Beach",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Indio",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Inglewood",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ione",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Irvine",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "King City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "La Habra",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laguna Beach",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lancaster",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lathrop",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lemoore",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lincoln",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Livermore",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lodi",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lompoc",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lone Pine",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Long Beach",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Los Angeles",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Loyalton",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Madera",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Malibu",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mammoth lakes",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mantica",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marina",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mariposa",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Martinez",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marysville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mather",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Menlo Park",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Merced",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mill Valley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Modesto",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monterey",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moraga",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morgan Hill",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morro Bay",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mountain View",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Napa",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Needles",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newark",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport Beach",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norwalk",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Novato",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oakhurst",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oakland",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oceanside",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ojai",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ontario",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orange",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orange Cove",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oroville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oxnard",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pacifica",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pacific Grove",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palm Springs",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palmdale",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palo Alto",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pasadena",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Petaluma",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Piedmont",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Placerville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pleasanton",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pomona",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Hueneme",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portola",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Quincy",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rancho Cucamonga",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Red Bluff",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Redding",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Redlands",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Redondo Beach",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Redwood City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Richmond",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rio Vista",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ripon",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Riverbank",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Riverside",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rocklin",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Roseville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sacramento",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salinas",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Bernardino",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Clemente",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Diego",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Fernando",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Francisco",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Gabriel",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Jose",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Juan Capistrano",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Leandro",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Lorenzo",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Luis Obispo",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Marino",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Mateo",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Pedro",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Rafael",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Ramon",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Simeon",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Ana",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Barbara",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Clara",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Clarita",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Cruz",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Monica",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Rosa",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sausalito",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Scotts Valley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sebastopol",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Selma",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shafter",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shasta Lake City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Simi Valley",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Soledad",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sonoma",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sonora",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Lake Tahoe",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South San Francisco",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "St. Helena",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stockton",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sunnyvale",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Susanville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Templeton",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Thousand Oaks",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Torrance",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tracy",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Truckee",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tulare",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Turlock",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ukiah",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Union City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vacaville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vallejo",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ventura",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Victorville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Visalia",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Walnut Creek",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watsonville",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watts",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Weed",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Covina",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Whittier",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Willits",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Windsor",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woodland",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yorba Linda",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yreka",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yuba City",
        state_id: 5, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alamosa",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aspen",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aurora",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boulder",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Breckenridge",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brighton",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canon City",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Central City",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Climax",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Colorado Springs",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cortez",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cripple Creek",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Denver",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Durango",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Englewood",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Estes Park",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Collins",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Morgan",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Georgetown",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glenwood Springs",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Golden",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grand Junction",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greeley",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gunnison",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "La Junta",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Leadville",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Littleton",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Longmont",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Loveland",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Montrose",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ouray",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pagosa Springs",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pueblo",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Silverton",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Steamboat Springs",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sterling",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Telluride",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Trinidad",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vail",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Walsenburg",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Westminster",
        state_id: 6, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ansonia",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Berlin",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomfield",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Branford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bridgeport",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bristol",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coventry",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Danbury",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Darien",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Derby",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Hartford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Haven",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Enfield",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairfield",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Farmington",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenwich",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Groton",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Guilford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hamden",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hartford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lebanon",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Litchfield",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manchester",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mansfield",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Meriden",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middletown",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mystic",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Naugatuck",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Britain",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Haven",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New London",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Haven",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norwalk",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norwich",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Old Saybrook",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orange",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Seymour",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shelton",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Simsbury",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Southington",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stamford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stonington",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stratford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Torrington",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wallingford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waterbury",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waterford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watertown",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Hartford",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Haven",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Westport",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wethersfield",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Willimantic",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Windham",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Windsor",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Windsor Locks",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winsted",
        state_id: 7, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dover",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lewes",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milford",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Castle",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newark",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Smyrna",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wilmington",
        state_id: 8, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Apalachicola",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bartow",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belle Glade",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boca Raton",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bradenton",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cape Coral",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clearwater",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cocoa Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cocoa-Rockledge",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coral Gables",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Daytona Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "De Land",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Deerfield Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Delray Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fernandina Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Lauderdale",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Myers",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Pierce",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Walton Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gainesville",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hallandale Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hialeah",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hollywood",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Homestead",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jacksonville",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Key West",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake City",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Wales",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lakeland",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Largo",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Melbourne",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Miami",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Miami Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Naples",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Smyrna Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ocala",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orlando",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ormond Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palatka",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palm Bay",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palm Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Panama City",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pensacola",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pompano Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Augustine",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Petersburg",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sanford",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sarasota",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sebring",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tallahassee",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tampa",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tarpon Springs",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Titusville",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Venice",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Palm Beach",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "White Springs",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winter Haven",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winter Park",
        state_id: 9, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Albany",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Americus",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Andersonville",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Athens",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Atlanta",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Augusta",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bainbridge",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Blairsville",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brunswick",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Calhoun",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carrollton",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbus",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dahlonega",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dalton",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Darien",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Decatur",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Douglas",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Point",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fitzgerald",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Valley",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gainesville",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "La Grange",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Macon",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marietta",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milledgeville",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plains",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rome",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Savannah",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Toccoa",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Valdosta",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warm Springs",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warner Robins",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: 47,
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waycross",
        state_id: 10, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hanalei",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hilo",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Honaunau",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Honolulu",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kahului",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kaneohe",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kapaa",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kawaihae",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lahaina",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laie",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wahiawa",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wailuku",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waimea",
        state_id: 11, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Blackfoot",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boise",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bonners Ferry",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Caldwell",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coeur d’Alene",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Idaho City",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Idaho Falls",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kellogg",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lewiston",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moscow",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nampa",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pocatello",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Priest River",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rexburg",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sun Valley",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Twin Falls",
        state_id: 12, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alton",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arlington Heights",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arthur",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aurora",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belleville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belvidere",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomington",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brookfield",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cahokia",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cairo",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Calumet City",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canton",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carbondale",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carlinville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carthage",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Centralia",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Champaign",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charleston",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chester",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chicago",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chicago Heights",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cicero",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Collinsville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Danville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Decatur",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "DeKalb",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Des Plaines",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dixon",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Moline",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Saint Louis",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Effingham",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elgin",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elmhurst",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Evanston",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Freeport",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Galena",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Galesburg",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glen Ellyn",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glenview",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Granite City",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harrisburg",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Herrin",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Highland Park",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jacksonville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Joliet",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kankakee",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kaskaskia",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kewanee",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "La Salle",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Forest",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Libertyville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lincoln",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lisle",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lombard",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Macomb",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mattoon",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moline",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monmouth",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Vernon",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mundelein",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Naperville",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nauvoo",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Normal",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Chicago",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oak Park",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: 37,
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ottawa",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palatine",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Park Forest",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Park Ridge",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pekin",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peoria",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Petersburg",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pontiac",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Quincy",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rantoul",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "River Forest",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rock Island",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rockford",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shawneetown",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Skokie",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Holland",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Springfield",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Streator",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Summit",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Urbana",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vandalia",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Virden",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waukegan",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wheaton",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wilmette",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winnetka",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wood River",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Zion",
        state_id: 13, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anderson",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bedford",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomington",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbus",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Connersville",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corydon",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Crawfordsville",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Chicago",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elkhart",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elwood",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Evansville",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Wayne",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "French Lick",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gary",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Geneva",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Goshen",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenfield",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hammond",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hobart",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huntington",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Indianapolis",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jeffersonville",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kokomo",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lafayette",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Madison",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marion",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Michigan City",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mishawaka",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Muncie",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nappanee",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nashville",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Albany",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Castle",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Harmony",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peru",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plymouth",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Richmond",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Claus",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shelbyville",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Bend",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Terre Haute",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Valparaiso",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vincennes",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wabash",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Lafayette",
        state_id: 14, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Amana Colonies",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ames",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boone",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Burlington",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cedar Falls",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cedar Rapids",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charles City",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cherokee",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clinton",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Council Bluffs",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Davenport",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Des Moines",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dubuque",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Estherville",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairfield",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Dodge",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grinnell",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Indianola",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Iowa City",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Keokuk",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mason City",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Pleasant",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Muscatine",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newton",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oskaloosa",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ottumwa",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sioux City",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waterloo",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Webster City",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Des Moines",
        state_id: 15, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abilene",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arkansas City",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Atchison",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chanute",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coffeyville",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Council Grove",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dodge City",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Emporia",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Scott",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Garden City",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Great Bend",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hays",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hutchinson",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Independence",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Junction City",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kansas City",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lawrence",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Leavenworth",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Liberal",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manhattan",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McPherson",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Medicine Lodge",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newton",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Olathe",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Osawatomie",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ottawa",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Overland Park",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pittsburg",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salina",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shawnee",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Smith Center",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Topeka",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wichita",
        state_id: 16, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ashland",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barbourville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bardstown",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Berea",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boonesborough",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bowling Green",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Campbellsville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Covington",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Danville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elizabethtown",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Frankfort",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harlan",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harrodsburg",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hazard",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Henderson",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hodgenville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hopkinsville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lexington",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Louisville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mayfield",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Maysville",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middlesboro",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Owensboro",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Paducah",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Paris",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Richmond",
        state_id: 17, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abbeville",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alexandria",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bastrop",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Baton Rouge",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bogalusa",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bossier City",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gretna",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Houma",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lafayette",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Charles",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monroe",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morgan City",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Natchitoches",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Iberia",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Orleans",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Opelousas",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ruston",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Martinville",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shreveport",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Thibodaux",
        state_id: 18, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Auburn",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Augusta",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bangor",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bar Harbor",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bath",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belfast",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Biddeford",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boothbay Harbor",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brunswick",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Calais",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Caribou",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Castine",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eastport",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ellsworth",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Farmington",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Kent",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gardiner",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Houlton",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kennebunkport",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kittery",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lewiston",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lubec",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Machias",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orono",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portland",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Presque Isle",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rockland",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rumford",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saco",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Scarborough",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waterville",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "York",
        state_id: 19, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aberdeen",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Annapolis",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Baltimore",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bethesda-Chevy Chase",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bowie",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cambridge",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Catonsville",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "College Park",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbia",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cumberland",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Easton",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elkton",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Emmitsburg",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Frederick",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenbelt",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hagerstown",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hyattsville",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laurel",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oakland",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ocean City",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rockville",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Marys City",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salisbury",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Silver Spring",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Takoma Park",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Towson",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Westminster",
        state_id: 20, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abington",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Adams",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Amesbury",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Amherst",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Andover",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arlington",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Athol",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Attleboro",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barnstable",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bedford",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beverly",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boston",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bourne",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Braintree",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brockton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brookline",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cambridge",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charlestown",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chelmsford",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chelsea",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chicopee",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clinton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cohasset",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Concord",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Danvers",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dartmouth",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dedham",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dennis",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Duxbury",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eastham",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Edgartown",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Everett",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairhaven",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fall River",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Falmouth",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fitchburg",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Framingham",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gloucester",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Great Barrington",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenfield",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Groton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harwich",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Haverhill",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hingham",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Holyoke",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hyannis",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ipswich",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lawrence",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lenox",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Leominster",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lexington",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lowell",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ludlow",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lynn",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Malden",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marblehead",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marlborough",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Medford",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nahant",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Natick",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Bedford",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newburyport",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Adams",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Northampton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norwood",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peabody",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pittsfield",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plymouth",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Provincetown",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Quincy",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Randolph",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Revere",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sandwich",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saugus",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Somerville",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Hadley",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Springfield",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stockbridge",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stoughton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sturbridge",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sudbury",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Taunton",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tewksbury",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Truro",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watertown",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Webster",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wellesley",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wellfleet",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Bridgewater",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Springfield",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Westfield",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Weymouth",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Whitman",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Williamstown",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woburn",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woods Hole",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Worcester",
        state_id: 21, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Adrian",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alma",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ann Arbor",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Battle Creek",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bay City",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Benton Harbor",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomfield Hills",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cadillac",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charlevoix",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cheboygan",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dearborn",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Detroit",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Lansing",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eastpointe",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ecorse",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Escanaba",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Flint",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grand Haven",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grand Rapids",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grayling",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grosse Pointe",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hancock",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Highland Park",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Holland",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Houghton",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Interlochen",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Iron Mountain",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ironwood",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ishpeming",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jackson",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kalamazoo",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lansing",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Livonia",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ludington",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mackinaw City",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manistee",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marquette",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Menominee",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Midland",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monroe",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Clemens",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Pleasant",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Muskegon",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Niles",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Petoskey",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pontiac",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Huron",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Royal Oak",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saginaw",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Ignace",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Joseph",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sault Sainte Marie",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Traverse City",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Trenton",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warren",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wyandotte",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ypsilanti",
        state_id: 22, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Albert Lea",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alexandria",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Austin",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bemidji",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomington",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brainerd",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Crookston",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Duluth",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ely",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eveleth",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Faribault",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fergus Falls",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hastings",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hibbing",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "International Falls",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Little Falls",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mankato",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Minneapolis",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moorhead",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Ulm",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Northfield",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Owatonna",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pipestone",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Red Wing",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rochester",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Cloud",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Paul",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sauk Centre",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Saint Paul",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stillwater",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Willmar",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winona",
        state_id: 23, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bay Saint Louis",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Biloxi",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canton",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clarksdale",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbia",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbus",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corinth",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenville",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenwood",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grenada",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gulfport",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hattiesburg",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Holly Springs",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jackson",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laurel",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Meridian",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Natchez",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ocean Springs",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oxford",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pascagoula",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pass Christian",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Philadelphia",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Gibson",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Starkville",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tupelo",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vicksburg",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Point",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yazoo City",
        state_id: 24, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boonville",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Branson",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cape Girardeau",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carthage",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chillicothe",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clayton",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbia",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Excelsior Springs",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ferguson",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Florissant",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fulton",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hannibal",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Independence",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jefferson City",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Joplin",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kansas City",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kirksville",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lamar",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lebanon",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lexington",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Maryville",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mexico",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monett",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Neosho",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Madrid",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rolla",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Charles",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Joseph",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Louis",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sainte Genevieve",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sedalia",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Springfield",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warrensburg",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Plains",
        state_id: 25, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anaconda",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Billings",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bozeman",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Butte",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dillon",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Benton",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glendive",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Great Falls",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Havre",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Helena",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kalispell",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lewistown",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Livingston",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Miles City",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Missoula",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Virginia City",
        state_id: 26, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beatrice",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bellevue",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boys Town",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chadron",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbus",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fremont",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grand Island",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hastings",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kearney",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lincoln",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McCook",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Minden",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nebraska City",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norfolk",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Platte",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Omaha",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plattsmouth",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Red Cloud",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sidney",
        state_id: 27, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boulder City",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carson City",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elko",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ely",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fallon",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Genoa",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Goldfield",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Henderson",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Las Vegas",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Las Vegas",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Reno",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sparks",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Virginia City",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winnemucca",
        state_id: 28, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Berlin",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Claremont",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Concord",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Derry",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dover",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Durham",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Exeter",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Franklin",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hanover",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hillsborough",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Keene",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laconia",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lebanon",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manchester",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nashua",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peterborough",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plymouth",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portsmouth",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rochester",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Somersworth",
        state_id: 29, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Asbury Park",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Atlantic City",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bayonne",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomfield",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bordentown",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bound Brook",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bridgeton",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Burlington",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Caldwell",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Camden",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cape May",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clifton",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cranford",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Orange",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Edison",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elizabeth",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Englewood",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Lee",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glassboro",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hackensack",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Haddonfield",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hoboken",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Irvington",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jersey City",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lakehurst",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lakewood",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Long Beach",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Long Branch",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Madison",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Menlo Park",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Millburn",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Millville",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Montclair",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morristown",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Holly",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Brunswick",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Milford",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newark",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ocean City",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orange",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Parsippany–Troy Hills",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Passaic",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Paterson",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Perth Amboy",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plainfield",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Princeton",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ridgewood",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Roselle",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rutherford",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Somerville",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Orange Village",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Totowa",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Trenton",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Union",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Union City",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vineland",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wayne",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Weehawken",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West New York",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Orange",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Willingboro",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woodbridge",
        state_id: 30, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Acoma",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alamogordo",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Albuquerque",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Artesia",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belen",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carlsbad",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clovis",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Deming",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Farmington",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gallup",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grants",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hobbs",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Las Cruces",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Las Vegas",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Los Alamos",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lovington",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portales",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Raton",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Roswell",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Santa Fe",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shiprock",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Silver City",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Socorro",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Taos",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Truth or Consequences",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tucumcari",
        state_id: 31, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Albany",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Amsterdam",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Auburn",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Babylon",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Batavia",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beacon",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bedford",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Binghamton",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bronx",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brooklyn",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Buffalo",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chautauqua",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cheektowaga",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clinton",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cohoes",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coney Island",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cooperstown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corning",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cortland",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Crown Point",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dunkirk",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Aurora",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Hampton",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eastchester",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elmira",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Flushing",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Forest Hills",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fredonia",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Garden City",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Geneva",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Glens Falls",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gloversville",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Great Neck",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hammondsport",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harlem",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hempstead",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Herkimer",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hudson",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huntington",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hyde Park",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ilion",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ithaca",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jamestown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Johnstown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kingston",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lackawanna",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Placid",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Levittown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lockport",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mamaroneck",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manhattan",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Massena",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middletown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mineola",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Vernon",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Paltz",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Rochelle",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Windsor",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New York City",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newburgh",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Niagara Falls",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Hempstead",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nyack",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ogdensburg",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Olean",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oneida",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oneonta",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ossining",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oswego",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oyster Bay",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Palmyra",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peekskill",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plattsburgh",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Washington",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Potsdam",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Poughkeepsie",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Queens",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rensselaer",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rochester",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rome",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rotterdam",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rye",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sag Harbor",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saranac Lake",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saratoga Springs",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Scarsdale",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Schenectady",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Seneca Falls",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Southampton",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Staten Island",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stony Brook",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stony Point",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Syracuse",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tarrytown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ticonderoga",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tonawanda",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Troy",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Utica",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watertown",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watervliet",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watkins Glen",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Seneca",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "White Plains",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woodstock",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yonkers",
        state_id: 32, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Asheboro",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Asheville",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bath",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beaufort",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Boone",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Burlington",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chapel Hill",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charlotte",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Concord",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Durham",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Edenton",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elizabeth City",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fayetteville",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gastonia",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Goldsboro",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greensboro",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenville",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Halifax",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Henderson",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hickory",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "High Point",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hillsborough",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jacksonville",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kinston",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kitty Hawk",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lumberton",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morehead City",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morganton",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nags Head",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Bern",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pinehurst",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Raleigh",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rocky Mount",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salisbury",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shelby",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wilmington",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wilson",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winston-Salem",
        state_id: 33, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bismarck",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Devils Lake",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dickinson",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fargo",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grand Forks",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jamestown",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mandan",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Minot",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rugby",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Valley City",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wahpeton",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Williston",
        state_id: 34, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Akron",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alliance",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ashtabula",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Athens",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barberton",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bedford",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bellefontaine",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bowling Green",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canton",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chillicothe",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cincinnati",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cleveland",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cleveland Heights",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbus",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Conneaut",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cuyahoga Falls",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dayton",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Defiance",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Cleveland",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Liverpool",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elyria",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Euclid",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Findlay",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gallipolis",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenville",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hamilton",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kent",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kettering",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lakewood",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lancaster",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lima",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lorain",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mansfield",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marietta",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marion",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Martins Ferry",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Massillon",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mentor",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middletown",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milan",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Vernon",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Philadelphia",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newark",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Niles",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North College Hill",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norwalk",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oberlin",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Painesville",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Parma",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Piqua",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portsmouth",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Put-in-Bay",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sandusky",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shaker Heights",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Springfield",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Steubenville",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tiffin",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Toledo",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Urbana",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warren",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wooster",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Worthington",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Xenia",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yellow Springs",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Youngstown",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Zanesville",
        state_id: 35, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ada",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Altus",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alva",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anadarko",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ardmore",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bartlesville",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bethany",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chickasha",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Claremore",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clinton",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cushing",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Duncan",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Durant",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Edmond",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Reno",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elk City",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Enid",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eufaula",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Frederick",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Guthrie",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Guymon",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hobart",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Holdenville",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hugo",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lawton",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McAlester",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Miami",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Midwest City",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moore",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Muskogee",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norman",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oklahoma City",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Okmulgee",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pauls Valley",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pawhuska",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Perry",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ponca City",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pryor",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sallisaw",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sand Springs",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sapulpa",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Seminole",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shawnee",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stillwater",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tahlequah",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "The Village",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tulsa",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vinita",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wewoka",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woodward",
        state_id: 36, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Albany",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ashland",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Astoria",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Baker City",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beaverton",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bend",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brookings",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Burns",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coos Bay",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corvallis",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eugene",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grants Pass",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hillsboro",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hood River",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jacksonville",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "John Day",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Klamath Falls",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "La Grande",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Oswego",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lakeview",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McMinnville",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Medford",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newberg",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ontario",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oregon City",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pendleton",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Orford",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portland",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Prineville",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Redmond",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Reedsport",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Roseburg",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salem",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Seaside",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Springfield",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "The Dalles",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tillamook",
        state_id: 37, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abington",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aliquippa",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Allentown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Altoona",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ambridge",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bedford",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bethlehem",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bloomsburg",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bradford",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bristol",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carbondale",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Carlisle",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chambersburg",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chester",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbia",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Easton",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Erie",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Franklin",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Germantown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gettysburg",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greensburg",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hanover",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harmony",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harrisburg",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hazleton",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hershey",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Homestead",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Honesdale",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jeannette",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jim Thorpe",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Johnstown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lancaster",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lebanon",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Levittown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lewistown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lock Haven",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lower Southampton",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McKeesport",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Meadville",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middletown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monroeville",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nanticoke",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Castle",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Hope",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Kensington",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norristown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oil City",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Philadelphia",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Phoenixville",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pittsburgh",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pottstown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pottsville",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Reading",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Scranton",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shamokin",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sharon",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "State College",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stroudsburg",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sunbury",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Swarthmore",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tamaqua",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Titusville",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Uniontown",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warren",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Chester",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wilkes-Barre",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Williamsport",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "York",
        state_id: 38, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barrington",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bristol",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Central Falls",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cranston",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Greenwich",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "East Providence",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kingston",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middletown",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Narragansett",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "North Kingstown",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pawtucket",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portsmouth",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Providence",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Kingstown",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tiverton",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warren",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Warwick",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Westerly",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wickford",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Woonsocket",
        state_id: 39, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abbeville",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aiken",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anderson",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beaufort",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Camden",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charleston",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbia",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Darlington",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Florence",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gaffney",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Georgetown",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenville",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenwood",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hartsville",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lancaster",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mount Pleasant",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Myrtle Beach",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orangeburg",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rock Hill",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Spartanburg",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sumter",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Union",
        state_id: 40, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aberdeen",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belle Fourche",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brookings",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canton",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Custer",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "De Smet",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Deadwood",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hot Springs",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huron",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lead",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Madison",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milbank",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mitchell",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mobridge",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pierre",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rapid City",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sioux Falls",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Spearfish",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sturgis",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vermillion",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Watertown",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yankton",
        state_id: 41, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alcoa",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Athens",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chattanooga",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clarksville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cleveland",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Columbia",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cookeville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dayton",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elizabethton",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Franklin",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gallatin",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gatlinburg",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greeneville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jackson",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Johnson City",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jonesborough",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kingsport",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Knoxville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lebanon",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Maryville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Memphis",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morristown",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Murfreesboro",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nashville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norris",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oak Ridge",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shelbyville",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tullahoma",
        state_id: 42, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abilene",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alpine",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Amarillo",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Arlington",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Austin",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Baytown",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beaumont",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Big Spring",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Borger",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brownsville",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bryan",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Canyon",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cleburne",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "College Station",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Corpus Christi",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Crystal City",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Dallas",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Del Rio",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Denison",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Denton",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eagle Pass",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Edinburg",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "El Paso",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fort Worth",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Freeport",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Galveston",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Garland",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Goliad",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Greenville",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harlingen",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Houston",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huntsville",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Irving",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Johnson City",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kilgore",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Killeen",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kingsville",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laredo",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Longview",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lubbock",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lufkin",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marshall",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McAllen",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "McKinney",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mesquite",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Midland",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Mission",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nacogdoches",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Braunfels",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Odessa",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orange",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pampa",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Paris",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pasadena",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pecos",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pharr",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plainview",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plano",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Arthur",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Lavaca",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Richardson",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Angelo",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Antonio",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Felipe",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "San Marcos",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sherman",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sweetwater",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Temple",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Texarkana",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Texas City",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tyler",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Uvalde",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Victoria",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waco",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Weatherford",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wichita Falls",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ysleta",
        state_id: 43, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alta",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "American Fork",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bountiful",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brigham City",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cedar City",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clearfield",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Delta",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fillmore",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Green River",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Heber City",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kanab",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Layton",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lehi",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Logan",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manti",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moab",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Monticello",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Murray",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Nephi",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ogden",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orderville",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Orem",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Panguitch",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Park City",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Payson",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Price",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Provo",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint George",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Salt Lake City",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Spanish Fork",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Springville",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tooele",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vernal",
        state_id: 44, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Barre",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bellows Falls",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bennington",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Brattleboro",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Burlington",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Essex",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manchester",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Middlebury",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Montpelier",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Plymouth",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rutland",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Albans",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Saint Johnsbury",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sharon",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winooski",
        state_id: 45, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Abingdon",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Alexandria",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bristol",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charlottesville",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Chesapeake",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Danville",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairfax",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Falls Church",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fredericksburg",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hampton",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hanover",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hopewell",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lexington",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lynchburg",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manassas",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Martinsville",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Market",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newport News",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Norfolk",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Petersburg",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portsmouth",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Reston",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Richmond",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Roanoke",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Staunton",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Suffolk",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Virginia Beach",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waynesboro",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Williamsburg",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Winchester",
        state_id: 46, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Aberdeen",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Anacortes",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Auburn",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bellevue",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bellingham",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bremerton",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Centralia",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coulee Dam",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Coupeville",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ellensburg",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ephrata",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Everett",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hoquiam",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kelso",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kennewick",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Longview",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moses Lake",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oak Harbor",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Olympia",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pasco",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Point Roberts",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Port Angeles",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Pullman",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Puyallup",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Redmond",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Renton",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Richland",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Seattle",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Spokane",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Tacoma",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Vancouver",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Walla Walla",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wenatchee",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Yakima",
        state_id: 47, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bath",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beckley",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Bluefield",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Buckhannon",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charles Town",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Charleston",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Clarksburg",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Elkins",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fairmont",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Grafton",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Harpers Ferry",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hillsboro",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hinton",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Huntington",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Keyser",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lewisburg",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Logan",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Martinsburg",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Morgantown",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Moundsville",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Martinsville",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Parkersburg",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Philippi",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Point Pleasant",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Princeton",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Romney",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Shepherdstown",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "South Charleston",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Summersville",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Weirton",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Welch",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wellsburg",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Weston",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wheeling",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "White Sulphur Springs",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Williamson",
        state_id: 48, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Appleton",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ashland",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Baraboo",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Belmont",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Beloit",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Eau Claire",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Fond du Lac",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Green Bay",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Hayward",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Janesville",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Kenosha",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "La Crosse",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lake Geneva",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Madison",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Manitowoc",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Marinette",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Menasha",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Milwaukee",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Neenah",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "New Glarus",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oconto",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Oshkosh",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Peshtigo",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Portage",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Prairie du Chien",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Racine",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rhinelander",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ripon",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sheboygan",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Spring Green",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Stevens Point",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sturgeon Bay",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Superior",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Waukesha",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wausau",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wauwatosa",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Allis",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "West Bend",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Wisconsin Dells",
        state_id: 49, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Buffalo",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Casper",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cheyenne",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Cody",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Douglas",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Evanston",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Gillette",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Green River",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Jackson",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Lander",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Laramie",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Newcastle",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Powell",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rawlins",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Riverton",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Rock Springs",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Sheridan",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Ten Sleep",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Thermopolis",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Torrington",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    },
    {
        name: "Worland",
        state_id: 50, country_id: 1, createdAt: new Date(), updatedAt: new Date()
    }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Cities', null, {});
  }
};
