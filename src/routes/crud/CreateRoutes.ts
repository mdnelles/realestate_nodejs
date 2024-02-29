import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const create = async (req: Req, res: Res) => {
  console.log(req.body);
  try {
    const { tableName, addFields, addValues } = req.body;

    // Check if addValues is undefined, and assign an empty array if it is
    const addValuesArr = addValues || [];

    // Check if addFields is undefined, and assign an empty array if it is
    const addFieldsArr = addFields || [];

    console.log(addValuesArr);
    console.log(addFieldsArr);

    // build the query with sanitization
    const sqlQuery = `INSERT INTO ${tableName.toLowerCase()} (${addFieldsArr}) VALUES (${addValuesArr.map(() => '?').join(', ')});`;
    const data = await db.sequelize.query(sqlQuery, {
      replacements: addValuesArr,
      type: QueryTypes.INSERT,
    });

    res.json({ status: 200, err: false, msg: 'Success', data });
  } catch (error) {
    console.error(error);
    res.json({ status: 200, err: true, msg: error });
  }
};
