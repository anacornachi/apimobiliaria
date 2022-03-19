const jwt_simple = require('jwt-simple');
const config = require('../middlewares/auth/auth.config.js');

const decode = (req) => {
  const token = req.headers.authorization.split(' ')[1];
  return jwt_simple.decode(token, config.jwtSecret);
};

const encode = (payload) => {
  return jwt_simple.encode(payload, config.jwtSecret);
};

module.exports = jwt = {
  decode,
  encode,
};
