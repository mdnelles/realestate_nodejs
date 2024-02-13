import Sequelize from 'sequelize';
import { db } from '../db';

export const Agent = db.sequelize.define(
  'agent',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    url: {
      type: Sequelize.STRING,
    },
    office_id: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
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
