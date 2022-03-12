import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from './config.js';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default () => {
  const strategy = new Strategy(params, (payload, done) => {
    // buscar um usuario no banco com o id vindo do payload
    // e tiver usuario, reotrna o id do usuario
    // se der erro é porque nao existe o usuario
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
