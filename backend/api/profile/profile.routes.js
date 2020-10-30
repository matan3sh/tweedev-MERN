const express = require('express');
const { check } = require('express-validator');
const {
  getProfiles,
  getProfile,
  submitUserProfile,
  getProfileByUserId,
} = require('./profile.controller');
const auth = require('../../middleware/auth');

const router = express.Router();

// @desc Get all users profiles
// @route GET /api/profile
// @access Public
router.get('/', getProfiles);

// @desc Get current user profile
// @route GET /api/profile/me
// @access Private
router.get('/me', auth, getProfile);

// @desc Create or Update user profile
// @route POST /api/profile
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  submitUserProfile
);

// @desc Get profile by user Id
// @route GET /api/profile/user/:userId
// @access Public
router.get('/user/:userId', getProfileByUserId);

module.exports = router;
