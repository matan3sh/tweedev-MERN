const express = require('express');
const { getPosts } = require('./post.controller');

const router = express.Router();

// @desc Test route
// @route GET /api/posts
// @access Public
router.get('/', getPosts);

module.exports = router;
