import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const create = async (req: Req, res: Res) => {
  console.log(req.body);
  try {
    const { tableName, addFields, addValues } = req.body;

    // Check if addFields or addValues are undefined, and assign empty arrays if they are
    const addValuesArr = addValues ? (addValues.toString().includes(',') ? addValues.split(',') : [addValues]) : [];
    const addFieldsArr = addFields ? (addFields.toString().includes(',') ? addFields.split(',') : [addFields]) : [];

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
