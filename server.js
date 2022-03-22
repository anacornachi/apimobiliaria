const dotenv = require('dotenv');
const app = require('./src/config/app.js');
const routes = require('./src/routes/index.js');
const sequelize = require('./src/db/connection.js');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
