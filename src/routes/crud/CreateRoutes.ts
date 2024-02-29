import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const create = async (req: Req, res: Res) => {
  console.log(req.body);
  try {
    const { tableName, params, values } = req.body;

    // Check if params or values are undefined, and assign empty arrays if they are
    const valuesArr = values ? (values.toString().includes(',') ? values.split(',') : [values]) : [];
    const paramsArr = params ? (params.toString().includes(',') ? params.split(',') : [params]) : [];

    // build the query with sanitization
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
