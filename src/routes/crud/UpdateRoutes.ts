import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const updateMatching = async (req: Req, res: Res) => {
  try {
    const { tableName, updateFields, updateValues, searchFields, search, limit = 10 } = req.body;

    // Validate input and sanitize data

    // Build the dynamic whereClause based on searchFields and search
    const whereClause = [...searchFields].map((field) => `${field} = ?`).join(' OR ');

    // Build the update query
    const sqlQuery = `UPDATE ${tableName} SET ${updateFields.map((field: any) => `${field} = ?`).join(', ')} WHERE ${whereClause}`;

    // Prepare and execute the query
    const [updatedRows] = await db.sequelize.query(sqlQuery, {
      replacements: [...updateValues, ...search.split(',')], // Include both update and search values
      type: QueryTypes.UPDATE,
    });

    // Handle update results
    if (updatedRows === 0) {
      res.status(404).send('No rows updated');
    } else {
      res.json({ status: 200, err: false, msg: 'Update successful', updated: updatedRows });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateAll = async (req: Req, res: Res) => {
  try {
    const { tableName, updateFields, updateValues } = req.body;

    // Validate input and sanitize data

    // Build the update query
    const sqlQuery = `UPDATE ${tableName} SET ${updateFields.map((field: any) => `${field} = ?`).join(', ')}`;

    // Prepare and execute the query
    const [updatedRows] = await db.sequelize.query(sqlQuery, {
      replacements: updateValues,
      type: QueryTypes.UPDATE,
    });

    // Handle update results
    if (updatedRows === 0) {
      res.status(404).send('No rows updated');
    } else {
      res.json({ status: 200, err: false, msg: 'Update successful', updated: updatedRows });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateById = async (req: Req, res: Res) => {
  try {
    const { tableName, updateFields, updateValues, id } = req.body;

    // return error if no id is provided
    if (!id) {
      res.status(400).send('No id provided');
      return;
    }

    // Build the update query
    const sqlQuery = `UPDATE ${tableName} SET ${updateFields.map((field: any) => `${field} = ?`).join(', ')} WHERE id = ?`;

    // Prepare and execute the query
    const [updatedRows] = await db.sequelize.query(sqlQuery, {
      replacements: [...updateValues, id],
      type: QueryTypes.UPDATE,
    });

    // Handle update results
    if (updatedRows === 0) {
      res.status(404).send('No rows updated');
    } else {
      res.json({ status: 200, err: false, msg: 'Update successful', updated: updatedRows });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
