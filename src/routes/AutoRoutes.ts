import path from 'path';
import * as fs from 'fs';
import Agent from '../database/models/agents';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

// pull data from ../../tmp/agt.csv parse it line by line and insert it into the agents table
export const loadAgents = async (req: Req, res: Res): Promise<any> => {
  const csvFilePath = path.join(__dirname, '../../tmp/agt.csv');
  try {
    const stream = fs.createReadStream(csvFilePath);
    const csv = require('csv-parser');
    const results: any = [];
    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', async () => {
        for (const result of results) {
          try {
            const agent = await Agent.create({
              first_name: result.first_name,
              last_name: result.last_name,
              license_number: result.license_number,
              phone: result.phone,
              phone2: result.phone2,
              cell: result.cell,
              cell2: result.cell2,
              email: result.email,
              url: result.url,
              office_id: result.office_id,
            });
            console.log(`Agent ${agent.id} created`);
          } catch (error: any) {
            console.error(`Error: ${error.message}`);
          }
        }
        res.json({ status: 200, err: false, msg: 'user created' });
      });
  } catch (error) {
    console.log(error);
    res.json({ status: 200, err: true, error });
  }
};
