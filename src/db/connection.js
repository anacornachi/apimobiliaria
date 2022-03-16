import {Sequelize} from 'sequelize';
import 'dotenv/config';

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
  sequelize.authenticate();
  console.log('Connected database');
} catch (error) {
  console.log(`Could not connect: ${error}`);
}

export default sequelize;
