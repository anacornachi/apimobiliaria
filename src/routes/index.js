const RealEstateRoutes = require('./realestate.routes.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({status: 'Success!'});
  });

  RealEstateRoutes(app);
};
