import {DataTypes} from 'sequelize';
import sequelize from '../db/connection.js';
import User from './User.model.js';

const RealEstate = sequelize.define(
  'realEstate',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      require: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    properties: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
    initialProperties: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    broker: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
      require: true,
    },
    initialBroker: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    adminCpf: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    adminName: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
  },
  {
    tableName: 'realEstates',
  }
);

export default RealEstate;
