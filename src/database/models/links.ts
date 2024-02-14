import Sequelize from 'sequelize';
import { db } from '../db';

export const Links: any = db.sequelize.define(
  'links',
  {
    link_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    listing_id: {
      type: Sequelize.STRING,
    },
    link_type: {
      type: Sequelize.STRING(255),
    },
    link_title: {
      type: Sequelize.STRING(255),
    },
    link_url: {
      type: Sequelize.STRING(255),
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
