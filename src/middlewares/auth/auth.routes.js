import authMiddleware from './index.js';
import {AuthController} from '../../controllers/Auth.controller.js';

const auth = authMiddleware();

export const authRoutes = (app) => {
  app.post('/login', AuthController.signIn);
};
