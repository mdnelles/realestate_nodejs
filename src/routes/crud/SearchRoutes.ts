import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const like = async (req: Req, res: Res) => {
  try {
    const { tableName, searchFields, search, limit = 10, offset = 0, order = 'ASC', onlyFields = null } = req.body;

    const searchFieldsArr = searchFields.toString().includes(',') ? searchFields.split(',') : [searchFields];
    const onlyFieldsArr = onlyFields ? onlyFields.split(',') : undefined;
    const numericLimit = parseInt(limit, 10);

    // Initialize the SQL WHERE clause string
    let whereClause = '';
    const replacements: string[] = [];

    // Iterate over each field in searchFieldsArr
    searchFieldsArr.forEach((field: string, index: number) => {
      const sanitizedSearch = `%${search.replace(/[%_]/g, '\\$&')}%`;

      // Concatenate the condition with OR for each field
      if (field) {
        whereClause += `  ${field} LIKE ? OR `;
        replacements.push(sanitizedSearch); // Push the sanitized search value
      }
    });

    // remove trailing ' OR ' from the whereClause
    whereClause = whereClause.slice(0, -3);

    const sqlQuery = `
      SELECT ${onlyFieldsArr ? onlyFieldsArr.join(', ') : '*'}
      FROM ${tableName}
      WHERE  ${whereClause}
      ORDER BY ${searchFieldsArr[0]} ${order}
      LIMIT ${numericLimit}
      OFFSET ${offset};`;

    console.log(replacements);

    // Execute the SQL query using Sequelize with replacements
    const data = await db.sequelize.query(sqlQuery, {
      replacements: replacements,
      type: QueryTypes.SELECT,
    });

    res.json({ status: 200, err: false, msg: 'Success', data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const and = async (req: Req, res: Res) => {
  try {
    const { tableName, searchFields, search, limit = 10, offset = 0, order = 'ASC', onlyFields = null } = req.body;

    const searchFieldsArr = searchFields.toString().includes(',') ? searchFields.split(',') : [searchFields];
    const onlyFieldsArr = onlyFields ? onlyFields.split(',') : undefined;
    const numericLimit = parseInt(limit, 10);

    // Initialize the SQL WHERE clause string
    let whereClause = '';
    const replacements: string[] = [];

    // Iterate over each field in searchFieldsArr
    searchFieldsArr.forEach((field: string, index: number) => {
      const sanitizedSearch = `%${search.replace(/[%_]/g, '\\$&')}%`;

      // Concatenate the condition with OR for each field
      if (field) {
        whereClause += `  ${field} = ? OR `;
        replacements.push(sanitizedSearch); // Push the sanitized search value
      }
    });

    // remove trailing ' OR ' from the whereClause
    whereClause = whereClause.slice(0, -3);

    const sqlQuery = `
      SELECT ${onlyFieldsArr ? onlyFieldsArr.join(', ') : '*'}
      FROM ${tableName}
      WHERE  ${whereClause}
      ORDER BY ${searchFieldsArr[0]} ${order}
      LIMIT ${numericLimit}
      OFFSET ${offset};`;

    console.log(replacements);

    // Execute the SQL query using Sequelize with replacements
    const data = await db.sequelize.query(sqlQuery, {
      replacements: replacements,
      type: QueryTypes.SELECT,
    });

    res.json({ status: 200, err: false, msg: 'Success', data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// This function is used to retrieve all records from a table no search criteria
export const all = async (req: Req, res: Res) => {
  try {
    const { tableName, limit = 10, offset = 0, order = 'ASC', onlyFields = null } = req.body;

    const onlyFieldsArr = onlyFields ? onlyFields.split(',') : undefined;
    const numericLimit = parseInt(limit, 10);

    const sqlQuery = `
      SELECT ${onlyFieldsArr ? onlyFieldsArr.join(', ') : '*'}
      FROM ${tableName}
      ORDER BY id ${order}
      LIMIT ${numericLimit}
      OFFSET ${offset};`;

    // Execute the SQL query using Sequelize with replacements
    const data = await db.sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    res.json({ status: 200, err: false, msg: 'Success', data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
