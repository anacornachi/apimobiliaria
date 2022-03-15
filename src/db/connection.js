import {Sequelize} from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

try {
  sequelize.authenticate();
  console.log('Connected database');
} catch (error) {
  console.log(`Could not connect: ${error}`);
}

export default sequelize;
