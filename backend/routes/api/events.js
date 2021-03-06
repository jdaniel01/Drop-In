const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Rider, Event, User, Sport, Location, Country, City, State } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateEvent = [
    check('host')
        .exists({ checkFalsy: true })
        .withMessage("You must be logged in to host a session.")
        .custom(value => {
            let host;
            async () => {
                host = await User.findOne({ where: { id: value } })
            }
            if (!host) false;
        })
        .withMessage("You must be logged in to host a session."),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name for the session.")
        .isLength({ max: 50, min: 3 })
        .withMessage("Session name must be greater than 2 characters (max 50) long.")
        .custom(value => {
            let name;
            async () => {
                name = await Event.findOne({ where: { name: value } });
            }
            if (!name) true;
        })
        .withMessage("Session name already exists. Please rename your session."),
    check('sport_id')
        .exists({ checkFalsy: true })
        .withMessage("Your session must specify a sport.")
        .custom(value => {
            let sport;
            async () => {
                sport = await Sport.findOne({ where: { id: value } });
            }
            if (sport) true;
        })
        .withMessage("You must specify a valid sport."),
    check('location_id')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a location for your session.")
        .custom(value => {
            let location;
            async () => {
                location = await Location.findOne({ where: { id: value } })
            }
            if (location) true
        })
        .withMessage("Please provide a valid location."),
    check('when')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a date for your session.")
        .isDate()
        .withMessage("You must provide a date with the correct format."),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description for your session."),
    handleValidationErrors
];

router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll();
    return res.json(events);
}));

router.post('/', asyncHandler(async (req, res) => {
    const { host, name, sport_id, location_id, description, when } = req.body;
    let event = await Event.create({ host, name, sport_id, description, location_id, when });
    return res.json(event);
}));

router.get('/dates', asyncHandler(async (req, res) => {
    const events = await Event.findAll({ order: ['when'], limit: 20, include: [User, Location] })
    return res.json(events);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const event = await Event.findOne({ where: { id: req.params.id }, include: [User, Location, Sport] });
    const location = await Location.findOne({ where: { id: event.location_id }, include: [Country, City, State] })
    return res.json({ event, location });
}));

router.get('/:id/riders', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const riders = await Rider.findAll({ where: { event_id: id }, include: User });
    return res.json(riders);
}));

router.post('/:id/riders', asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const user = req.body;

    let test = await Rider.findOne({ where: { event_id: id, user_id: user.id } });
    if (!test) {
        await Rider.create({ user_id: user.id, event_id: id })
        const riders = await Rider.findAll({ where: { event_id: id }, include: User });
        return res.json(riders);
    }
    else {
        const error = new Error("Rider has already joined session.");
        next(error);
    }
}));

router.delete('/:id/riders/:riderId', asyncHandler(async (req, res) => {
    const {id, riderId} = req.params;
    const rider = await Rider.findOne({where: {event_id: id, user_id: riderId}});
    if (rider){
        await Rider.delete(rider);
        const riders = await Rider.findAll({where: {event_id: id}, include: User});
        return res.json(riders);
    }
}));

module.exports = router;
