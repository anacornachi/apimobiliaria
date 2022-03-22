require('dotenv/config');
const Sequelize = require('sequelize');
const config = require('../config/database.js');

const sequelize = new Sequelize(config);

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
