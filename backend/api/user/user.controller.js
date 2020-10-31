const { validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../../utils/generateToken');

const User = require('../../models/User');

register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }
    const avatar = gravatar.url(email, {
      size: '200',
      rating: 'pg',
      default: 'mm',
    });
    user = new User({ name, email, avatar, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = { user: { id: user.id } };
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(payload),
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    const payload = { user: { id: user.id } };
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(payload),
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

getLoggedInUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  register,
  login,
  getLoggedInUser,
};
