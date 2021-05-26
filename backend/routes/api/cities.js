const express = require('express');
const asyncHandler = require('express-async-handler');
const {Location} = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const cities = await City.findAll();
    return res.json(cities);
}))

router.get('/:id/locations', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const locations = await Location.findAll({where: {city_id: id}});
    return res.json(locations);
}))



module.exports = router;
