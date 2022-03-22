require('dotenv/config');
const app = require('./src/config/app.js');
const routes = require('./src/routes/index.js');
const sequelize = require('./src/db/connection.js');

const port = process.env.PORT || 3000;

let dbIsReady = false;

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is connected');
    dbIsReady = true;
  } catch {}
};

const startServer = async () => {
  console.log('Trying to start server at', new Date().toLocaleTimeString());

  while (!dbIsReady) {
    await connectDb();
  }

  if (dbIsReady) {
    try {
      await sequelize.sync();
      console.log('Database is sync');

      routes(app);
      app.listen(port, () => {
        console.log('Server running on http://localhost:' + port);
      });
    } catch (error) {
      console.log('#'.repeat(200), error);
    }
  }
};

startServer();
