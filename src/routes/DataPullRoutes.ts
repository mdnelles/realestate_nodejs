//import fs from 'fs';
import * as ftp from 'basic-ftp';

const env = require('dotenv').config().parsed;
// FTP server credentials
const ftpConfig = {
  host: env.NODE_FTP_HOST,
  user: env.NODE_FTP_USERNAME,
  password: env.NODE_FTP_PASSWORD,
};

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { eightDigitDate } from '../utilities/general';

export const getNewestAll = async (req: Req, res: Res): Promise<any> => {
  // Remote directory path where files are located
  const remoteDirectory = '/';

  // Local directory path to save downloaded files
  const localDirectory = '/var/www/ftp-idx-app/tmp';

  // List of files to download
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const filesToDownload = [
    `agt${currentDate}.csv`,
    `com${currentDate}.csv`,
    `link${currentDate}.csv`,
    `ofc${currentDate}.csv`,
    `photo${currentDate}.zip`,
    `res${currentDate}.csv`,
  ];

  const client: any = new ftp.Client();
  try {
    await client.access(ftpConfig);
    console.log('FTP connected');

    // Switch to passive mode (optional, depending on your server configuration)
    await client.usePasv(true);
    console.log('Passive mode enabled');

    for (const file of filesToDownload) {
      const remoteFile = `${remoteDirectory}/${file}`;
      const localFile = `${localDirectory}/${file}`;

      // Download the file
      await client.downloadTo(localFile, remoteFile);
      console.log(`Downloaded ${file} successfully`);
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  } finally {
    client.close();
    console.log('FTP connection closed');
    // list the file name from the array in the msg
    res.json({ status: 200, err: false, msg: `Files downloaded successfully ${filesToDownload}` });
  }
};

export const getByDateSingle = async (req: Req, res: Res): Promise<any> => {
  const { fileDate = eightDigitDate(), fileType = 'link' } = req.body;
  // Remote directory path where files are located
  const remoteDirectory = '/';

  // Local directory path to save downloaded files
  const localDirectory = '/var/www/ftp-idx-app/tmp';

  const filesToDownload = [`${fileType}${fileDate}.csv`];

  const client: any = new ftp.Client();
  try {
    await client.access(ftpConfig);
    console.log('FTP connected');

    // Switch to passive mode (optional, depending on your server configuration)
    await client.usePasv(true);
    console.log('Passive mode enabled');

    for (const file of filesToDownload) {
      const remoteFile = `${remoteDirectory}/${file}`;
      const localFile = `${localDirectory}/${file}`;

      // Download the file
      await client.downloadTo(localFile, remoteFile);
      console.log(`Downloaded ${file} successfully`);
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  } finally {
    client.close();
    console.log('FTP connection closed');
  }
};
