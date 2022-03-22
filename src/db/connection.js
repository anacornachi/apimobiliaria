require('dotenv/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

try {
  setTimeout(() => {
    sequelize.authenticate().then(() => {
      console.log('Connected database');
    });
  }, 3000);
} catch (error) {
  console.log(`Could not connect: ${error}`);
}

module.exports = sequelize;
