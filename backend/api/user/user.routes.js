const express = require('express');
const { check } = require('express-validator');
const { register } = require('./user.controller');

const router = express.Router();

// @desc Register user
// @route POST /api/users/register
// @access Public
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ],
  register
);

module.exports = router;
