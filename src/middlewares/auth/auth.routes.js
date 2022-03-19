const authMiddleware = require('./index.js');
const AuthController = require('../../controllers/Auth.controller.js');

const auth = authMiddleware();

const authRoutes = (app) => {
  app.post('/login', AuthController.signIn);
};

module.exports = authRoutes;
