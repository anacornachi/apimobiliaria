const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('../middlewares/auth/index.js');

const auth = authMiddleware();

const app = express();

app.use(bodyParser.json());

app.use(auth.initialize());

app.use(
  cors({
    origin: '*',
  })
);

module.exports = app;
