const express = require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator');
const {User, Location, State, Country, City} = require('../../db/models');
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
    handleValidationErrors
]


router.post('/', validateLocation, asyncHandler(async (req, res, next)=> {
    const {name, city_id, state_id, country_id, description, image, website, address} = req.body;
    if (name && city_id && state_id && country_id && description && image && website && address){
        const location = {name, city_id, state_id, country_id, description, image, website, address};
        let data = await Location.create(location);
        res.redirect(`/${data.id}`);
    } else {let err =  Error("There was an error. Please try again."); next(err)}
}));


module.exports = router;
