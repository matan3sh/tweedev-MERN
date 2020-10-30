const express = require('express');
const { check } = require('express-validator');
const { register, getLoggedInUser, login } = require('./user.controller');
const auth = require('../../middleware/auth');

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

// @desc Login user
// @route POST /api/users/login
// @access Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  login
);

// @desc Get loggedin user
// @route GET /api/users/auth
// @access Private
router.get('/auth', auth, getLoggedInUser);

module.exports = router;
