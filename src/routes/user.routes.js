import {userController} from '../controllers/User.controller.js';
import authMiddleware from '../middlewares/auth/index.js';

const auth = authMiddleware();

export const userRoutes = (app) => {
  app.get('/user', auth.authenticate(), userController.getUser);

  app.post('/register', userController.register);
};
