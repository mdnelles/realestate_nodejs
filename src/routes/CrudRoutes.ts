import { Agents } from '../database/models/agents';
import { Companies } from '../database/models/companies';
import { Links } from '../database/models/links';
import { Listings } from '../database/models/listings';
import { Offices } from '../database/models/offices';
import { Users } from '../database/models/users';
import { db } from '../database/db';

import { Op, Model, QueryTypes } from 'sequelize';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { getModelForTable } from '../utilities/queries';
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
export const search = async (req: Req, res: Res, next: Next) => {
  try {
    const { tableName, searchFields, search, limit = 10, offset = 0, order = 'ASC', onlyFields = null } = req.body;

    const searchFieldsArr = searchFields.toString().includes(',') ? searchFields.split(',') : [searchFields];
    const onlyFieldsArr = onlyFields ? onlyFields.split(',') : undefined;
    const numericLimit = parseInt(limit, 10);

    // Build the where condition for the search
    const where: { [key: string]: any } = {};
    searchFieldsArr.forEach((field: string) => {
      const sanitizedSearch = `%${search.replace(/[%_]/g, '\\$&')}%`;
      where[field] = {
        [Op.like]: sanitizedSearch,
      };
    });

    // Find the appropriate model based on tableName
    // make the first one uppercast and the rest lower case
    const MyModel = modelsMap[tableName.toLowerCase()];
    if (!Model) {
      throw new Error(`Invalid Table Name: ${tableName}`);
    }

    // Perform the search using the appropriate model
    console.log('model', MyModel);
    const query = await MyModel.findAll({
      where,
      limit: numericLimit,
      offset,
      order: [[searchFieldsArr[0], order]], // Assuming the first search field is used for sorting
      attributes: onlyFieldsArr ? onlyFieldsArr : undefined, // Convert onlyFields to array if provided
    });
    console.log('before res.json');
    res.json({ status: 200, err: false, msg: 'Success', data: query });
    console.log('after res.json');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
