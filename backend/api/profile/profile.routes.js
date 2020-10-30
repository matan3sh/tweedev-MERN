const express = require('express');
const { getProfile } = require('./profile.controller');
const auth = require('../../middleware/auth');

const router = express.Router();

// @desc Get current user profile
// @route GET /api/profile/me
// @access Private
router.get('/me', auth, getProfile);

module.exports = router;
