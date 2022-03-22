require('dotenv/config');
const app = require('./src/config/app.js');
const routes = require('./src/routes/index.js');
const sequelize = require('./src/db/connection.js');

const port = process.env.PORT || 3000;

let dbIsReady = false;

const connectDb = async () => {
  try {
    console.log(
      'Trying to start sequelize at',
      new Date().toLocaleTimeString()
    );
    await sequelize.authenticate();

    console.log('Database is connected');
    dbIsReady = true;
  } catch {
    console.log('Database is not able to connect, trying again...');
  }
};

const startServer = async () => {
  console.log('Trying to start server at', new Date().toLocaleTimeString());

  while (!dbIsReady) {
    await connectDb();
  }
  // const tryConnectDB = setInterval(async () => {
  //   await connectDb();
  //   if (dbIsReady) {
  //     clearInterval(tryConnectDB);
  //   }
  // }, 1000);

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
