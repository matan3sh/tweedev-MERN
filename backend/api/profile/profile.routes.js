const express = require('express');
const { check } = require('express-validator');
const {
  getProfiles,
  getProfile,
  addExperience,
  submitUserProfile,
  getProfileByUserId,
  deleteProfile,
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

// @desc    Add profile experience
// @route   PUT api/profile/experience
// @access  Private
router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('company', 'Company is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  addExperience
);

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

// @desc Delete profile, user & posts
// @route DELETE /api/profile
// @access Private
router.delete('/', auth, deleteProfile);

// @desc Get profile by user Id
// @route GET /api/profile/user/:userId
// @access Public
router.get('/user/:userId', getProfileByUserId);

module.exports = router;
