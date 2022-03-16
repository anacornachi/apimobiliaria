import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authMiddleware from '../middlewares/auth/index.js';

const auth = authMiddleware();

const app = express();

app.use(bodyParser.json());

app.use(auth.initialize());

app.use(
  cors({
    origin: '*',
  })
);

export default app;
