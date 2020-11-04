const express = require('express');
const { check } = require('express-validator');
const {
  getPosts,
  addPost,
  getPost,
  deletePost,
  likeAPost,
  unlikeAPost,
  addCommentToPost,
  deletePostComment,
} = require('./post.controller');
const auth = require('../../middleware/auth');

const router = express.Router();

// @desc Get all posts
// @route GET /api/posts
// @access Public
router.get('/', getPosts);

// @desc Add new post
// @route POST /api/posts
// @access Private
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  addPost
);

// @desc Add comment to a post
// @route POST /api/posts/comment/:postId
// @access Private
router.post(
  '/comment/:postId',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  addCommentToPost
);

// @desc Delete comment from a post
// @route DELETE /api/posts/comment/:postId/:commentId
// @access Private
router.delete('/comment/:postId/:commentId', auth, deletePostComment);

// @desc Like a post
// @route PUT /api/posts/like/:postId
// @access Private
router.put('/like/:postId', auth, likeAPost);

// @desc Like a post
// @route PUT /api/posts/like/:postId
// @access Private
router.put('/unlike/:postId', auth, unlikeAPost);

// @desc Get single post by id
// @route GET /api/posts/:postId
// @access Public
router.get('/:postId', getPost);

// @desc Delete post
// @route DELETE /api/posts/:postId
// @access Private
router.delete('/:postId', auth, deletePost);

module.exports = router;
