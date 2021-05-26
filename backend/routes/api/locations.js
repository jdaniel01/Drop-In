const express = require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator');
const {Location} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateLocation = [
    check('name')
        .exists({checkFalsy: true})
        .withMessage("Please provide a location name.")
        .custom(value => {
            let location;
            async ()=> {
                location = await Location.findOne({where: {name: value}})
            }
            if(!location) true;
        })
        .withMessage("The location you entered already exists."),
    check('description')
        .exists({checkFalsy: true})
        .withMessage("Please provide a description of the location."),
    check('city_id')
        .exists({checkFalsey: true})
        .withMessage('Please choose a city for this location.'),
    check('state_id')
        .exists({checkFalsey: true})
        .withMessage('Please choose a state for this location.'),
    check('country_id')
        .exists({checkFalsey: true})
        .withMessage('Please choose a country for this location.'),
    check('image')
        .exists({checkFalsey: true})
        .withMessage('Please provider an image for this location.')
        .isString()
        .withMessage('Image must be provided in url format.'),
    check('website')
        .exists({checkFalsey: true})
        .withMessage('Please provide a website for this location.'),
    check('address')
        .exists({checkFalsey: true})
        .withMessage('Please provide an address for this location.'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const locations = await Location.findAll();
    return res.json(locations);
}));


router.post('/', validateLocation, asyncHandler(async (req, res)=> {
    const {name, city_id, state_id, country_id, description, image, website, address} = req.body;

        const data = {name, city_id, state_id, country_id, description, image, website, address};
        let location = await Location.create(data);
        return res.json(location);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const location = await Location.findByPk(id);
    return res.json(location);
}));

module.exports = router;
