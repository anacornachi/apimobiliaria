const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = require('../../models/User.model.js');
const config = require('./auth.config.js');

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = () => {
  const strategy = new Strategy(params, async (payload, done) => {
    const user = await User.findByPk(payload.id);

    if (user) {
      return done(null, {id: user.id});
    } else {
      return done(new Error('User not found'), null);
    }
  });
  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate('jwt', config.jwtSession);
    },
  };
};
