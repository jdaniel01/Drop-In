const express = require('express');
const asyncHandler = require('express-async-handler');
const {Country, State} = require('../../db/models');
const router = express.Router();


router.get('/:id/states', asyncHandler(async (req, res) => {
    const {id} = req.params;
    let states = await State.findAll({where: {country_id: id}});
    return res.json(states);
}))

module.exports = router;
