const userController = require('../controllers/User.controller.js');
const authMiddleware = require('../middlewares/auth/index.js');

const auth = authMiddleware();

const userRoutes = (app) => {
  app.get('/user', auth.authenticate(), userController.getUser);

  app.post('/register', userController.register);
};

module.exports = userRoutes;
