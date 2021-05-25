const express = require('express');
const asyncHandler = require('express-async-handler');
const {City} = require('../../db/models');
const router = express.Router();


router.get('/:id/cities', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const cities = await City.findAll({where: {state_id: id}});
    return res.json(cities);
}))

module.exports = router;
