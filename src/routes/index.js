import realEstateRoutes from './realestate.routes.js';
import {authRoutes} from '../modules/auth/routes.js';

export default (app) => {
  app.get('/', (req, res) => {
    res.json({status: 'Success!'});
  });

  authRoutes(app);
  realEstateRoutes(app);
};
