const express = require('express');
const { check } = require('express-validator');
const {
  getProfiles,
  getProfile,
  addExperience,
  submitUserProfile,
  getProfileByUserId,
  deleteProfile,
  deleteProfileExp,
  updateProfileExp,
  addEducation,
  deleteProfileEdu,
  updateProfileEdu,
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
// @route   POST api/profile/experience
// @access  Private
router.post(
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

// @desc    Add profile education
// @route   POST api/profile/education
// @access  Private
router.post(
  '/education',
  [
    auth,
    [
      check('school', 'School is required').not().isEmpty(),
      check('degree', 'Degree is required').not().isEmpty(),
      check('fieldofstudy', 'Field of study is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  addEducation
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

// @desc Delete experience from profile
// @route DELETE /api/profile/experience/:expId
// @access Private
router.delete('/experience/:expId', auth, deleteProfileExp);

// @desc Delete education from profile
// @route DELETE /api/profile/education/:eduId
// @access Private
router.delete('/education/:eduId', auth, deleteProfileEdu);

// @desc Update experience in profile
// @route PUT /api/profile/experience/:expId
// @access Private
router.put('/experience/:expId', auth, updateProfileExp);

// @desc Update education in profile
// @route PUT /api/profile/education/:eduId
// @access Private
router.put('/education/:eduId', auth, updateProfileEdu);

// @desc Get profile by user Id
// @route GET /api/profile/user/:userId
// @access Public
router.get('/user/:userId', getProfileByUserId);

module.exports = router;
