import path from 'path';
import * as fs from 'fs';
import Agent from '../../database/models/agents';

// pull data from ../../tmp/agt.csv parse it line by line and insert it into the agents table
export const pullAgtData = async () => {
  const csvFilePath = path.join(__dirname, '../../tmp/agt.csv');
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
    });
};
