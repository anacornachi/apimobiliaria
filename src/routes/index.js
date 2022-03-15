import {authRoutes} from '../modules/auth/auth.routes.js';
import {RealEstateRoutes} from './realestate.routes.js';
import {userRoutes} from './user.routes.js';

export default (app) => {
  app.get('/', (req, res) => {
    res.json({status: 'Success!'});
  });

  authRoutes(app);
  RealEstateRoutes(app);
  userRoutes(app);
};
