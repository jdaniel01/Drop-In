const express = require('express');
const asyncHandler = require('express-async-handler');
const { Sport, Trick } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const sports = await Sport.findAll();
    return res.json(sports);
}));

router.get('/:id/tricks', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const tricks = await Trick.findAll({ where: { sport_id: id } });
    return res.json(tricks);
}));

router.get('/:id/tricks/:category', asyncHandler(async (req, res) => {
    const { id, category } = req.params;
    const tricks = await Trick.findAll({ where: { sport_id: id, category_id: category } });
    return res.json(tricks);
}));

module.exports = router;
