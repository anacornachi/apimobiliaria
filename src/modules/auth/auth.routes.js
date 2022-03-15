import {jwt} from '../../utils/token.utils.js';
import {decrypt, encrypt} from '../../utils/encrypt.utils.js';
import authMiddleware from './index.js';
import User from '../../models/User.model.js';
import {AuthController} from '../../controllers/Auth.controller.js';

const auth = authMiddleware();

export const authRoutes = (app) => {
  app.post('/login', AuthController.signIn);
};
