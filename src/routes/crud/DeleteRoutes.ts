import { QueryTypes } from 'sequelize';
import { db } from '../../database/db';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const deleteMatching = async (req: Req, res: Res) => {
  try {
    const { tableName, searchFields, search, limit = 1 } = req.body;

    // Validate input and sanitize data (placeholder...)

    // Build the dynamic whereClause based on searchFields and search
    const whereClause = [...searchFields].map((field) => `${field} = ?`).join(' OR ');

    // Build the DELETE query with LIMIT
    const sqlQuery = `DELETE FROM ${tableName} WHERE ${whereClause} LIMIT ${limit}`;

    // Prepare and execute the query
    const deletedRows = await db.sequelize.query(sqlQuery, {
      replacements: [...search.split(','), limit], // Include both search and limit values
      type: QueryTypes.DELETE, // Use DELETE type explicitly
    });

    // Handle deletion results
    if (deletedRows[0][0] === 0) {
      res.status(404).send('No rows deleted'); // Send specific response
    } else {
      res.json({ status: 200, err: false, msg: 'Rows deleted successfully', deleted: deletedRows[0][0] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // Handle errors
  }
};

export const truncateTable = async (req: Req, res: Res) => {
  try {
    const { tableName } = req.body;

    // Validate input and sanitize data (placeholder...)

    // Build the TRUNCATE TABLE query
    const sqlQuery = `TRUNCATE TABLE ${tableName}`;

    // Prepare and execute the query
    await db.sequelize.query(sqlQuery, {
      type: QueryTypes.RAW, // Use TRUNCATE type explicitly
    });

    // Handle truncation results
    res.json({ status: 200, err: false, msg: 'Table truncated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // Handle errors
  }
};
