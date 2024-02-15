import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const create = async (req: Req, res: Res) => {
  try {
    const { tableName, params, values } = req.body;
    let valuesArr = values.toString().includes(',') ? values.split(',') : [values];
    let paramsArr = params.toString().includes(',') ? params.split(',') : [params];
    if (tableName === 'users') {
      console.error('Cannot create a user');
      res.status(400).send('Bad Request');
      return;
    }

    // build the query with sanitazation
    const sqlQuery = `INSERT INTO ${tableName} (${paramsArr}) VALUES (${valuesArr.map(() => '?').join(', ')});`;
    const data = await db.sequelize.query(sqlQuery, {
      replacements: valuesArr,
      type: QueryTypes.INSERT,
    });

    res.json({ status: 200, err: false, msg: 'Success', data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
