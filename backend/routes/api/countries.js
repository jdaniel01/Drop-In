const express = require('express');
const asyncHandler = require('express-async-handler');
const {Country, State} = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const countries = await Country.findAll();
    return res.json(countries);
}));

router.get('/:id/states', asyncHandler(async (req, res) => {
    const id = req.params.id;
    let states = await State.findAll({where: {country_id: id}});
    return res.json(states);
}))

module.exports = router;
