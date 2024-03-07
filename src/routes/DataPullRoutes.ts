//import fs from 'fs';
import * as ftp from 'basic-ftp';
import * as fs from 'fs';
import * as path from 'path';
import * as unzipper from 'unzipper';

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
  process.chdir(__dirname); // change to the directory of this file
  const localDirectory = '../tmp'; // env.NODE_FTP_LOCAL_DIR;

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

    for (const file of filesToDownload) {
      const remoteFile = `${remoteDirectory}/${file}`;
      const localFile = `${localDirectory}/${file}`;

      // Download the file
      await client.downloadTo(localFile, remoteFile);
      console.log(`Downloaded ${file} successfully`);

      // Check if the downloaded file is photo.zip
      if (file.startsWith('photo')) {
        // Unzip the contents of photo.zip into the specified folder
        const unzipDestination = env.NODE_PHOTO_PATH; // Specify the destination folder
        fs.createReadStream(localFile)
          .pipe(unzipper.Extract({ path: unzipDestination }))
          .on('error', (err: any) => {
            console.error(`Error unzipping ${file}: ${err}`);
          })
          .on('finish', () => {
            console.log(`Unzipped ${file} successfully to ${unzipDestination}`);
            fs.readdir(unzipDestination, (err, files) => {
              if (err) {
                console.error(`Error reading directory ${unzipDestination}: ${err}`);
                return;
              }
              // put .jpg extension to all files
              files.forEach((extractedFile) => {
                // only if extracted file does not already have .jpg extension
                if (extractedFile.endsWith('.jpg')) return;
                const oldPath = path.join(unzipDestination, extractedFile);
                const newPath = path.join(unzipDestination, `${extractedFile}.jpg`);
                fs.rename(oldPath, newPath, (err) => {
                  if (err) {
                    console.error(`Error renaming file ${oldPath}: ${err}`);
                  } else {
                    console.log(`File ${oldPath} renamed to ${newPath}`);
                  }
                });
              });
            });
          });
      } else {
        if (fs.existsSync(localFile)) {
          // Create replica copy of the file without currentDate
          const fileNameWithoutDate = file.replace(currentDate, '');
          const replicaLocalFile = `${localDirectory}/${fileNameWithoutDate}`;
          fs.copyFileSync(localFile, replicaLocalFile); // Copy file
          console.log(`Replica copy created for ${file}`);
        }
      }
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  } finally {
    client.close();
    console.log('FTP connection closed');
    // list the file name from the array in the msg
    res.json({ status: 200, err: false, msg: `Files downloaded successfully ${filesToDownload}`, localDirectory });
  }
};

export const getByDateSingle = async (req: Req, res: Res): Promise<any> => {
  const { fileDate = eightDigitDate(), fileType = 'link' } = req.body;
  // Remote directory path where files are located
  const remoteDirectory = '/';

  process.chdir(__dirname); // change to the directory of this file
  const localDirectory = '../tmp';

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

export const getByDateAll = async (req: Req, res: Res): Promise<any> => {
  const { fileDate = eightDigitDate() } = req.body;
  // Remote directory path where files are located
  const remoteDirectory = '/';

  process.chdir(__dirname); // change to the directory of this file
  const localDirectory = '../tmp';

  const filesToDownload = [
    `agt${fileDate}.csv`,
    `com${fileDate}.csv`,
    `link${fileDate}.csv`,
    `ofc${fileDate}.csv`,
    `photo${fileDate}.zip`,
    `res${fileDate}.csv`,
  ];

  const client: any = new ftp.Client();
  try {
    await client.access(ftpConfig);
    console.log('FTP connected');

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
