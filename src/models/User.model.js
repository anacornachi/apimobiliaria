import {DataTypes} from 'sequelize';
import sequelize from '../db/connection.js';
import bcrypt from 'bcrypt';

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      require: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
  },
  {
    tableName: 'users',
  }
);

export default User;
