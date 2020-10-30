const express = require('express');
const { getProfile } = require('./profile.controller');

const router = express.Router();

// @desc Test route
// @route GET /api/profile
// @access Public
router.get('/', getProfile);

module.exports = router;
