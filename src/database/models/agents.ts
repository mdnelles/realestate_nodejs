import Sequelize from 'sequelize';
import { db } from '../db';

export const Agents = db.sequelize.define(
  'agents',
  {
    id: {
      // type: Sequelize.INTEGER,
      type: Sequelize.STRING,
      primaryKey: true,
      // autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    license_number: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    phone2: {
      type: Sequelize.STRING,
    },
    cell: {
      type: Sequelize.STRING,
    },
    cell2: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    office_id: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    isAuto: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    isDeleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  },
);
