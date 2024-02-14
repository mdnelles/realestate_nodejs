import { Agents } from '../../database/models/agents';
import { Companies } from '../../database/models/companies';
import { Links } from '../../database/models/links';
import { Listings } from '../../database/models/listings';
import { Offices } from '../../database/models/offices';
import { Users } from '../../database/models/users';
import { db } from '../../database/db';

import { Op, Model, QueryTypes, where } from 'sequelize';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { getModelForTable } from '../../utilities/queries';
import { on } from 'events';

const modelsMap: { [key: string]: any } = {
  agents: Agents,
  companies: Companies,
  links: Links,
  listings: Listings,
  offices: Offices,
  users: Users,
};

export const raw = async (req: Req, res: Res, next: Next) => {
  const users = await db.sequelize.query('SELECT * FROM `listings` LIMIT 20', { type: QueryTypes.SELECT });
  res.json({ status: 200, err: false, msg: 'Success', data: users });
};

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
