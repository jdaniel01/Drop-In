'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Tricks', [
      {
        name: "One-Hander", sport_id: 1,
        description: "The rider removes one hand from the handlebar.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "No-Hander", sport_id: 1,
        description: "The rider removes both hands from the handlebar. These can can be done \"suicide\" with the rider in an upright position and his/her knees pinching the seat or they can be done \"tuck\" with the rider tucking the handlebars into his/her lap.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "One-Footer", sport_id: 1,
        description: "The rider removes one foot and then places it back on the bike before landing.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "No-Footer", sport_id: 1,
        description: "The rider removes both feet and then places them back on before landing.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Can-Can", sport_id: 1,
        description: "The rider removes one foot from the bike and extends it over to the opposite side of the bike, the leg passes in front of the leg that is still mounted to the bike.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Nac-Nac", sport_id: 1,
        description: "The rider removes one foot from the bike and swings it backwards while simultaneously pushing the back end of the bicycle forward with the still mounted leg. The removed leg crosses over to the other side of the bike and passes behind the mounted leg.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "X-up", sport_id: 1,
        description: "The rider turns the handlebars 180 degrees while keeping both hands on.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Bar spin", sport_id: 1,
        description: "The rider throws the handlebars and spins thems 360 degrees before catching them again.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Busdriver", sport_id: 1,
        description: "The rider removes one hand and uses the other hand to push the bars around 360 degrees before grabbing back on.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Tobboggan", sport_id: 1,
        description: "The tobboggan is a combo trick. To count as a tobboggan it must meet the following 1) the rider must be grabbing the seat with one hand. 2) The handlebars must be turned 90 degrees. 3) The rider must be leaned back with thier butt behind thier seat, preferably on or behind on the rear tire.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Turndown", sport_id: 1,
        description: "The rider brings the bike up vertical while straightening thier body and turning the handlebars 180 degrees.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Lookback", sport_id: 1,
        description: "Similar to turndown but the bike is kept horizontal. A lookback is also down against any rotation, while a turndown is done with the direction of rotation.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Tailwhip", sport_id: 1,
        description: "The rider kicks the rear end of the bike 360 degrees while the bars remain steady.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Downside Tailwhip", sport_id: 1,
        description: "A downside tailwhip is done with a rotation, for example out of a quarter pipe, the kicks in the bike in the opposite direction that he/she spins.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Decade", sport_id: 1,
        description: "Similar to a tailwhip except that the rider and ahndlebars rotate 360 degrees while the rear end remains stationary.", createdAt: new Date(), updatedAt: new Date, category_id: 2
      },
      {
        name: "Double Peg", sport_id: 1,
        description: "The rider grinds on a ledge or rail with both front and rear pegs on the same side.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Icepick", sport_id: 1,
        description: "Back peg only, front wheel and peg are balanced in the air.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Toothpick", sport_id: 1,
        description: "Front peg only, back peg and wheel are balanced in the air.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Smith", sport_id: 1,
        description: "Front peg on the surface, back tire on the surface.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Feeble", sport_id: 1,
        description: "Back peg on the surface, front tire on the surface.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Crooked", sport_id: 1,
        description: "Can only be done on rails and narrow ledges. The bike is positioned so that each wheel is on either side of the obstacle. The rider grinds on the front-right peg and back-left peg, or vice versa.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Derrek Duser", sport_id: 1,
        description: "Similar to a crooked grind but instead of being supported by a front peg the grind is performed on the rear peg and the bottom bracket.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Pedal Grind", sport_id: 1,
        description: "A generic term for any grind done on the pedal instead of on the pegs. Most peg grinds can be duplicated on the pedal, ie a pedal-feeble would be with the pedal (front or rear) and the front tire on the obstacle. However, there are some pedal grinds that are unique and cannot be performed with pegs.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Crank slide", sport_id: 1,
        description: "On the front crank arm, or pedal. One wheel on either side of the rail. Similar to a crooked except that the bike is usually more sideways and only has one point of contact instead of two.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "BB slide", sport_id: 1,
        description: "On the back crank arm, and/or BB. One wheel on either side of the rail. Similar to a Derek Duster, but without the extra support of the back peg.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Magic carpet", sport_id: 1,
        description: "Only the pedal on the rail with cranks vertical. Both axles suspended above the rail by downward crank pressure.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Levitator", sport_id: 1,
        description: "A hybrid peg/pedal grind. Pedal and front peg on rail, back peg suspended by downward crank pressure. (it sounds like this is what you are doing)", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Luc-e", sport_id: 1,
        description: "Prn. \"Lucky\" A hybrid peg/pedal grind. The grind is performed on the rear peg and front pedal while the front end of the bike is \"dipped\" so that the front wheel is below the grind surface.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "60/40", sport_id: 1,
        description: "A generic modifier that can apply to many types of grinds. 60/40 is when 2 different parts of the bike are grinding on 2 different surfaces, one slightly higher than the other. Imagine steps, the rear peg on one step and the front peg on the next step higher.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Unlucky", sport_id: 1,
        description: "A hybrid peg and pedal grind. The grind is performed with front peg and pedal while the rear end of the bike is hanging below the grind surface.", category_id: 3, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Bar Turn", sport_id: 1,
        description: "You swing the handlebars 90 degrees smoothly, while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Euro Table", sport_id: 1,
        description: "Turn the bars 30° and put your bike parallel to the ground while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Invert", sport_id: 1,
        description: "You turn with your side to the bike while in the air, your bike and body are parallel to each other and perpendicular to the ground.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Moto Whip", sport_id: 1,
        description: "Tuck the bike towards your rear leg while in the air to turn it with both your arms and legs.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Superman", sport_id: 1,
        description: "A rider removes both feet from pedals and pushes them backwards so that the body is parrallel with the ground.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Tabletop", sport_id: 1,
        description: "While in the air the rider brings bike up to one side of the body by turning the bars and using body movement.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Indian air", sport_id: 1,
        description: "While in the air rider removes feet from pedals, cross legs above the bike in the air, then put them back on pedals and lands.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "180", sport_id: 1,
        description: "A 180° rotation and landing with your back forwards.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "360", sport_id: 1,
        description: "A 360° spin of rider with bike around vertical axis.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "540", sport_id: 1,
        description: "A 540° spin performed while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "720", sport_id: 1,
        description: "Two 360° spins in one jump.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Alleyoop", sport_id: 1,
        description: "Going up the quarter in an arc opposite to your direction, jump out and perform a loop in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Funbox Jumping", sport_id: 1,
        description: "A jump over the fanbox.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Funbox Race", sport_id: 1,
        description: "A funbox race is lower and slower than a funbox jump. And less strenuous to perform.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Spine Transfer", sport_id: 1,
        description: "Jump straight up from Alleeoop and at the peak direct your bike down to landing.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Barspin", sport_id: 1,
        description: "A 360° rotation of the bars while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Chicken Barspin", sport_id: 1,
        description: "A 360° rotation of the bars with your front wheel in the air and the rear wheel on the ground.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "180 Barspin", sport_id: 1,
        description: "A 180° turn performed from Bunny Hop with a Barspin while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Truckdriver", sport_id: 1,
        description: "A 360° rotation with barspin while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "540 Barspin", sport_id: 1,
        description: "A 540° spin with a barspin while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Nollie Barspin", sport_id: 1,
        description: "A jump from the front wheel with the barspin while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fakie Barspin", sport_id: 1,
        description: "A Barspin performed while riding with your back forwards.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Double Barspin", sport_id: 1,
        description: "Two full rotations of the bars while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Opposite Barspin", sport_id: 1,
        description: "A Barspin spinned in opposite direction.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Triple Barspin", sport_id: 1,
        description: "Three full rotations of the bars while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Bunny Hop/J Hop/Pro Hop", sport_id: 1,
        description: "A jump up when you first lift the front wheel, then the rear wheel, and land on both at one time.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Accelerate", sport_id: 1,
        description: "Pedal forward while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Drop", sport_id: 1,
        description: "A leap downwards from any element.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Drop In", sport_id: 1,
        description: "A leap into the quarter.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Ninja Drop", sport_id: 1,
        description: "Jump from feet holding the bike over the drop and place yourself on the bike while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fakie", sport_id: 1,
        description: "Riding with your back facing forwards.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fakie out", sport_id: 1,
        description: "Exit from fakie, which is turning to normal position facing frontwards.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Half Cab", sport_id: 1,
        description: "The rider rollouts and gives extra pedal pressure to pick up the bike and make a 180° turn, completing the rollout.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Full Cab", sport_id: 1,
        description: "Exit from Fakie by performing a 360° rotation backed on rear wheel.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fakie 540 out", sport_id: 1,
        description: "Exit from Fakie when you do a 360 tap and add another 180° turn.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "180 Nose Pivot", sport_id: 1,
        description: "A 180° turn on the front wheel.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "180 Footjam to Fakie", sport_id: 1,
        description: "A Footjam followed by a 180° turn on the front wheel and riding Fakie.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "360 Tap", sport_id: 1,
        description: "A full spin on the rear wheel.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Footjam 360", sport_id: 1,
        description: "A 360° spin on a front wheel with a foot being put on a front wheel.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "360 Nose Pivot", sport_id: 1,
        description: "A 360° turn on the front wheel.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Bikeflip", sport_id: 1,
        description: "The rider flips the bike while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Flair", sport_id: 1,
        description: "A combination of a Backflip with a 180° turn to land facing back down the ramp.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Frontflip", sport_id: 1,
        description: "Both rider and bike do a forward flip while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Backflip Barspin", sport_id: 1,
        description: "The rider flips the bars while performing a Backflip.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Double Backflip", sport_id: 1,
        description: "Both a rider and a bike do a double flip backwards while in midair.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Side Hop", sport_id: 1,
        description: "A sideways jump, which will be handy for jumping off stairs or exiting grinds.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Grizzly", sport_id: 1,
        description: "A one-footer when you simultaneously pull the bars against your hip and push the bike forward with the back leg.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Tire Grab", sport_id: 1,
        description: "Grab the front tire with your hand while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Seat Grab", sport_id: 1,
        description: "A rider grabs the seat with one hand while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Frame Grab", sport_id: 1,
        description: "You grab the frame with one hand while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Tuck No Hander", sport_id: 1,
        description: "You remove both hands from the bars and tuck the bars into your lap.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Suicide No Hand", sport_id: 1,
        description: "When a rider removes hands from the bars being in an upright position, knees are pinching the seat.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "No Foot Can-Can", sport_id: 1,
        description: "The rider does a Can-Can but takes the other foot off the pedal as well, so that both legs are on one side of the bike.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Nollie", sport_id: 1,
        description: "A jump when you lift your rear wheel first, then lift the front wheel, and land on both wheels at one time.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Nollie 180", sport_id: 1,
        description: "A 180° rotation while the jump performed from the front wheel.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Nollie 360", sport_id: 1,
        description: "A 360° rotation in a jump performed from the front wheel.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Nollie Halfcab", sport_id: 1,
        description: "Ride in Fakie in Nose Manual position, jump to 180°, pushing from the front wheel.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Nothing", sport_id: 1,
        description: "Both hands are removed from handle bars and both feet are removed from pedals while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Tri-star", sport_id: 1,
        description: "When a rider performs One-hand and No-footer at the same time.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Pedal Stall", sport_id: 1,
        description: "A stand on one pedal on the edge of the quarter.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Crossfoot", sport_id: 1,
        description: "Riding with your legs crossed, when left leg is on the right pedal and right leg is on the left pedal.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "X-Ride", sport_id: 1,
        description: "Riding with the bars turned 180° and your arms crossed.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "180 Tailwhip", sport_id: 1,
        description: "A 180° turn with a full spin of the frame around the front of the bike.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "360 Tailwhip", sport_id: 1,
        description: "A 360° spin with a Tailwhip while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Hop Whip", sport_id: 1,
        description: "A Bunny Hop combined with a kicking the frame around the front of bmx while in the air.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Opposite Tailwhip", sport_id: 1,
        description: "A frame spinned in opposite direction while your feet stance is not changed.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Fakie Tailwhip", sport_id: 1,
        description: "While riding backwards jump a Bunny Hop and kick the frame around the front of bmx.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Double Tailwhip", sport_id: 1,
        description: "The rider spins the tail of the bike around twice.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Triple Tailwhip", sport_id: 1,
        description: "The rider spins the tail of the bike around three times.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Tire Slide", sport_id: 1,
        description: "A skidding motion performed with your rear tire, can be done on any obstacle.", category_id: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Wallride", sport_id: 1,
        description: "Riding on a vertical or very steep wall with both wheels.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Walltap", sport_id: 1,
        description: "Jump, hit the wall with both wheels and push back landing to fakie.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Ruben Wallride", sport_id: 1,
        description: "A wallride with your front wheel directed downwards.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Walltop", sport_id: 1,
        description: "Touch the wall with both wheels perpendicular to the ground.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: "Candy Bar", sport_id: 1,
        description: "While in the air you bring your rear leg over the bars, keeping the front one on the pedal, and put it back on pedal.", category_id: 2, createdAt: new Date(), updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('People', null, {});
  }
};
