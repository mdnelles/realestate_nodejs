import { Sequelize } from 'sequelize';
/* eslint-disable */
const env = require('dotenv').config().parsed;
const host = env.NODE_DB_HOST;

export const db: any = {};
const sequelize = new Sequelize(env.NODE_DB_NAME, env.NODE_DB_USER, env.NODE_DB_PASS, {
  port: env.NODE_DB_PORT,
  host,
  dialect: 'mysql',
  //logging: console.log,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// import mysql from 'mysql2/promise';

// const env = require('dotenv').config().parsed;

// const connection = mysql.createConnection({
//   host: env.NODE_DB_HOST,
//   user: env.NODE_DB_USER,
//   database: env.NODE_DB_NAME,
//   port: parseInt(env.NODE_DB_PORT),
//   password: env.NODE_DB_PASS,
// });

// export default connection;
