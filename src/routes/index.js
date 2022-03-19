const authRoutes = require('../middlewares/auth/auth.routes.js');
const RealEstateRoutes = require('./realestate.routes.js');
const userRoutes = require('./user.routes.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({status: 'Success!'});
  });

  authRoutes(app);
  RealEstateRoutes(app);
  userRoutes(app);
};
