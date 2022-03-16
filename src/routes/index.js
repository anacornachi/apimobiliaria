import {authRoutes} from '../middlewares/auth/auth.routes.js';
import {RealEstateRoutes} from './realestate.routes.js';
import {userRoutes} from './user.routes.js';

export default (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({status: 'Success!'});
  });

  authRoutes(app);
  RealEstateRoutes(app);
  userRoutes(app);
};
