const express = require('express');
const asyncHandler = require('express-async-handler');
const {check} = require('express-validator');
const {handleValidationErrors} = require('../../utils/validation');
const {setTokenCookie, requireAuth} = require('../../utils/auth');
const {User} = require('../../db/models');
const router = express.Router();

const validateSignup = [
    check('email')
        .exists({checkFalsey: true})
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({checkFalsey: true})
        .isLength({min: 4})
        .withMessage('Please provide a username with at least 4 characters'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email address.'),
    check('password')
        .exists({checkFalsey: true})
        .isLength({min: 6})
        .withMessage('Password must contain 6 or more characters.'),
    handleValidationErrors
];

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const {email, password, username} = req.body;
    const user = await  User.signup({email, username, password});

    await setTokenCookie(res, user);
    return res.json({user});
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id);
    const 
}));

module.exports = router;
