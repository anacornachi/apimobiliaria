import * as dotenv from 'dotenv';
import sequelize from './src/db/connection.js';
import app from './src/config/app.js';
import express from 'express';
import routes from './src/routes/index.js';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const port = process.env.PORT || 3000;

routes(app);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log('Server running on http://localhost:' + port);
    });
  })
  .catch((error) => console.log(error));
