const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.generateToken = (payload) => {
  return jwt.sign(payload, config.get('jwtSecret'), {
    expiresIn: '30d',
  });
};
