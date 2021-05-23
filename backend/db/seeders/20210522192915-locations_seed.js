'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Locations', [
      { name: 'Veterans Skate Park', city_id: 1, state_id: 1, country_id: 1, description: 'This street plaza includes obstacles such as ledges, stairs, handrails and manual pads, plus the skull bowl which has real pool tile and pool coping.', image: 'https://www.concretedisciples.com/media/reviews/photos/thumbnail/300x300s/96/24/bf/20716_alabasterskatepark2_1294618157.jpg', website: "http://www.veteransskatepark.com/?phpMyAdmin=3f9c2261661fdcb058fe59d8ac271897", address: '7305 Highway 119' },
      { name: 'Ashland Public Park', city_id: 5, state_id: 1, country_id: 1, description: 'Decent park for the area, not big by any means. 3 foot mini, 3 foot spine, 2 tier box, funbox, 4 ft quarter, 4 ft roll-in, and two flat bars.', image: "NA", website: "NA", address: "3rd Ave. N." },
      { name: 'Bay Minette Skatepark', city_id: 9, state_id: 1, country_id: 1, description: 'Bay Minette Bypass', image: 'https://concretedisciples.com/wp-content/uploads/2012/10/media_reviews_photos_original_91_d5_5e_25060_BayMinetteskatepark1_1350064712.jpg', website: "NA", address: "W. 3rd St." },
      { name: "Highwheels Skatepark", city_id: 15, state_id: 1, country_id: 1, description: 'The ramps at highwheels are a 40 foot wide 7 foot with an elevator down to a 6 foot. This ramp also has a 7 1/2 foot roll in on the end. There is also a 4 foot tall spine that is 20 feet wide. All these ramps are outdoors and layered with 12 ga steel. Super fast, very nice. The street course is on the way. with more stuff aimed towards skateboarders. None of the ramps are prefab, no pads required and its only $5 bucks for the whole day. ', image: '', website: '', address: '2052 Gordon Terry Pkwy' },
      { name: "Fairhope Skatepark", city_id: 20, state_id: 1, country_id: 1, description: 'A skatepark of runs.', image: 'https://concretedisciples.com/wp-content/uploads/2013/03/media_reviews_photos_original_5b_19_6d_25205_fairhopeskatepark1_1364231957.jpg', website: 'http://www.cofairhope.com/ser_parks_trails.php', address: '701 Volanta Avenue' },
      { name: "Cox Creek Skatepark", city_id: 21, state_id: 1, country_id: 1, description: "two 4ft qp's. two 3ft qp's 4 flat rails , one kink and one round. pyramid with ledge. 2 wedges. 3ft spine. picnic table. and some banks. little small but it works. They have a new half pipe now,", image: 'https://concretedisciples.com/wp-content/uploads/2010/12/media_reviews_photos_original_50_c1_1c_19131_florenceskatepark1_1294618449.jpg', website: '', address: '2434 Chisholm Rd.' },
      { name: "Foley Skatepark", city_id: 22, state_id: 1, country_id: 1, description: 'this skatepark is got everything from a stair set with a handrail to a mini half pipe and manny pad.', image: '', website: '', address: 'Max Griffin Park' },
      { name: "Lions Skatepark", city_id: 25, state_id: 1, country_id: 1, description: 'Concrete Skatepark with ledges, quarters and more.', image: '', website: '', address: 'Hall St.' },
      { name: "Sims Skatepark", city_id: 27, state_id: 1, country_id: 1, description: 'Shaded concrete park with boxes, spines, a halfpipe, ledges and more.', image: 'https://www.concretedisciples.com/media/reviews/photos/thumbnail/300x300s/39/4f/32/25059_gulfshoresskatepark1_1350448961.jpg', website: 'http://www.blondejohns.com', address: '2008 West 3rd Street' },
      { name: "Huntsville Skatepark", city_id: 29, state_id: 1, country_id: 1, description: "Very basic park with little more than 4' or less concrete ramps and a tiny pool not good enough to easily carve completely", image: 'https://www.concretedisciples.com/media/reviews/photos/thumbnail/300x300s/7e/18/55/19232_huntsvilleskatepark1_1294618803.jpg', website: 'http://www.huntsvilleskatepark.com/index.php?phpMyAdmin=3f9c2261661fdcb058fe59d8ac271897', address: 'Clevland Ave. and Church St.' },
      { name: "Insanity Skatepark", city_id: 31, state_id: 1, country_id: 1, description: 'concrete', image: 'https://www.concretedisciples.com/media/reviews/photos/thumbnail/120x120c/81/00/1e/19233_huntsvilleal1opt_1294619074.jpg', website: '', address: '' },
      { name: "Battleground Skatepark", city_id: 11, state_id: 1, country_id: 1, description: 'Indoor skatepark', image: 'https://www.concretedisciples.com/media/reviews/photos/thumbnail/120x120c/1d/c3/80/battleground-skatepark-birmingham-74-1419715174.jpg', website: '', address: '' },
      { name: "Montgomery Skatepark", city_id: 34, state_id: 1, country_id: 1, description: 'NA', image: '', website: '', address: '' },
      { name: "Landing Zone Skatepark", city_id: 35, state_id: 1, country_id: 1, description: 'NA', image: '', website: '', address: '' },
      { name: "Bayou Wheels Skatepark", city_id: 36, state_id: 1, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Skate Zone Skatepark", city_id: 38, state_id: 1, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Sulligent Skatepark", city_id: 44, state_id: 1, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Sylacauga Skatepark", city_id: 45, state_id: 1, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Palmore Skatepark", city_id: 48, state_id: 1, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Spenard Community Skatepark", city_id: 51, state_id: 2, country_id: 1, description: 'NA', image: "https://www.concretedisciples.com/media/reviews/videos/thumbnail/300x300s/f1/13/ad/IBqa1DAq2Y8-v1619162319.jpg", website: '', address: 'Spenard Rec Center, Van Buren Street' },
      { name: "Mulcahy Skatepark", city_id: 51, state_id: 2, country_id: 1, description: 'NA', image: "", website: '', address: 'Between Mulcahy and Ben Boeke in the outdoor ice rinks' },
      { name: "Barrow Skatepark", city_id: 52, state_id: 2, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Eagle River Skatepark", city_id: 54, state_id: 2, country_id: 1, description: 'NA', image: "https://www.spohnranch.com/wp-content/uploads/2014/10/IMG_6777-2.jpg", website: '', address: 'Dalton Hwy.' },
      { name: "Cordova Skatepark", city_id: 53, state_id: 2, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Elmendorf AFB", city_id: 55, state_id: 2, country_id: 1, description: 'NA', image: "https://www.concretedisciples.com/media/reviews/photos/thumbnail/120x120c/50/fd/82/19222_elmendorfskatepark1_1294464119.jpg", website: '', address: '' },
      { name: "BMZ NC Skatepark", city_id: 56, state_id: 2, country_id: 1, description: 'NA', image: "", website: '', address: 'Dartmouth Dr. and Steelhead Rd.' },
      { name: "Girdwood Skatepark", city_id: 57, state_id: 2, country_id: 1, description: 'It look like the mini mini was recently resurfaced because it was slicker than a glacier but fast. The ground was a bit rugged so keeping speed while pushing around the park was a challenge.', image: "https://www.concretedisciples.com/media/reviews/photos/thumbnail/120x120c/1a/de/e1/18972_girkwoodskatepark1_1294464367.jpg", website: '', address: '' },
      { name: "Homer Skatepark", city_id: 59, state_id: 2, country_id: 1, description: 'This small skatepark is a pretty cool community skatepark. Like i said, it is small. This skatepark is mainly a street course with I think 3 small quarter pipes,a couple little kickers,a fun box with a set of stairs on one side of it.One downside to it that their is no lights', image: "https://www.concretedisciples.com/media/reviews/photos/thumbnail/120x120c/f3/45/aa/18944_homerskatepark1_1294464559.jpg", website: '', address: '360 W Pioneer Ave' },
      { name: "The Pipeline Skatepark", city_id: 60, state_id: 2, country_id: 1, description: '7500 square foot facility for skateboarding and in-line skating. ', image: "", website: 'http://www.juneau.org/parksrec/pipeline.php', address: '2400 Mendenhall Loop Road' },
      { name: "Kenai Skatepark", city_id: 61, state_id: 2, country_id: 1, description: 'One six foot quarter pipe, box jump with square rail, bank ramp with square rail, and a grind box.', image: "", website: '', address: 'coral st.' },
      { name: "Ketchikan Skatepark", city_id: 62, state_id: 2, country_id: 1, description: "It is two metal half pipes (one is 4 ft and the other is 6ft) connected by a spine on one side. If you like vert then its not that bad. But if you like street that's ok too. The park is right next to an elementary school. That school has stairs, ledges, handrails, drop-offs, and gaps. The park is also along side a gym that has all sorts of things.", image: "https://concretedisciples.com/wp-content/uploads/2010/12/media_reviews_photos_original_68_ba_ab_19223_ketchikan_1294464806.jpg", website: '', address: '601 Schoenbar Rd' },
      { name: "Nikiski Skatepark", city_id: 65, state_id: 2, country_id: 1, description: 'Good street, lots of rails and a couple ledges.', image: "", website: 'https://kpbsd.org/schools/nikiski-middle-high/', address: 'Nikiski middle school' },
      { name: "North Pole Skatepark", city_id: 67, state_id: 2, country_id: 1, description: 'NA', image: "", website: '', address: '' },
      { name: "Evan Casey Skatepark", city_id: 69, state_id: 2, country_id: 1, description: ' It features 2 really old quarter pipes at each end and a rail, box, and table top with ledge, and the newest addition is a huge table top with ledge and rail.', image: "https://www.concretedisciples.com/media/reviews/photos/thumbnail/300x300s/f4/ac/a8/20482_sewardskatepark1_1294465801.jpg", website: 'http://www.cityofseward.net/sprd/ballfields_sportsfields.htm?phpMyAdmin=3f9c2261661fdcb058fe59d8ac271897', address: 'Adams Street' },
      { name: "Soldotna Skatepark", city_id: 72, state_id: 2, country_id: 1, description: "Its got a pyramid with a round rail about 1 foot high and like 10 feet long going 5 on the flat and 5 on the slant. Its got a fun box that is about 18 inches high and 4 feet long then it slants and drops to a 8 inch high box also about 4 feet long.each side of the park has quarter pipes ranging from 4 feet to 7 feet high.", image: "https://www.concretedisciples.com/media/reviews/photos/thumbnail/300x300s/61/3c/4e/20014_soldotnaskatepark1_1294465965.jpg", website: 'http://www.ci.soldotna.ak.us/karen_st.html?phpMyAdmin=3f9c2261661fdcb058fe59d8ac271897', address: 'East Karen Street' },
      { name: "Wasilla Skatepark", city_id: 74, state_id: 2, country_id: 1, description: 'Features a 9 ft spine with like 4 feet of vert that doubles as a halfpipe, a pyramid and coping edged stairs, some speed bumps and a couple of rails. This is the only concrete park in the state.', image: "https://www.concretedisciples.com/media/reviews/photos/thumbnail/100x100c/c9/8f/15/19224_wasillaskatepark2_1294466117.jpg", website: 'http://www.cityofwasilla.com/?phpMyAdmin=3f9c2261661fdcb058fe59d8ac271897', address: 'N. Tommy Moe Dr.' },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
