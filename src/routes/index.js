import realEstateRoutes from './realestate.routes.js';

export default (app) => {
  app.get('/', (req, res) => {
    res.json({status: 'Success!'});
  });

  realEstateRoutes(app);
};
