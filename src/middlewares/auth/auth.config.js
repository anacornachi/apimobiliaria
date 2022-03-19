const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  jwtSecret: process.env.AUTH_SECRET,
  jwtSession: {session: false},
};
