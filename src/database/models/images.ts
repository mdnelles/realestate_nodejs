import Sequelize from 'sequelize';
import { db } from '../db';

export const Images: any = db.sequelize.define(
  'images',
  {
    imageName: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    isDeleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    orphaned: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  },
);
