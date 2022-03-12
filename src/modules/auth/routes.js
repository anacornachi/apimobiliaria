import {jwt} from '../../utils/token';
import {Express} from 'express';

import {decrypt, encrypt} from '../../utils/encrypt';

import authMiddleware from '.';

const auth = authMiddleware();

export const authRoutes = (app) => {
  app.get('/user', auth.authenticate(), (req, res) => {
    // decodifica a requisicao e pega o usuario
  });

  app.post('/register', async (req, res) => {
    // para criar usuario
    // ver se o usuario existe e se nao existir pode criar
  });

  app.post('/login', (req, res) => {
    // pra fazer login
    // a gente ve se o usuario ta cadastrado e se os dados batem :)
  });
};
