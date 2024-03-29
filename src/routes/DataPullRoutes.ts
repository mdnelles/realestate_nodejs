//import fs from 'fs';
import * as ftp from 'basic-ftp';
import * as fs from 'fs';
import * as path from 'path';
import * as JSZip from 'jszip';

const env = require('dotenv').config().parsed;
// FTP server credentials
const ftpConfig = {
  host: env.NODE_FTP_HOST,
  user: env.NODE_FTP_USERNAME,
  password: env.NODE_FTP_PASSWORD,
};

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { eightDigitDate } from '../utilities/general';
import { Images } from '../database/models/images';
import { loadAgents, loadCom, loadLinks, loadListings, loadOffices } from './CsvRoutes';

export const getAll = async (req: Req, res: Res): Promise<any> => {
  // current dateprovided YYYYMMDD - if not provided, use today's date
  const { fileDate = new Date().toISOString().slice(0, 10).replace(/-/g, ''), csvToo = true } = req.body;
  // Remote directory path where files are located
  const remoteDirectory = '/';
  const unzipDestination = env.NODE_PHOTO_PATH; // Specify the destination folder

  // Local directory path to save downloaded files
  process.chdir(__dirname); // change to the directory of this file
  const localDirectory = '../tmp'; // env.NODE_FTP_LOCAL_DIR;

  // List of files to download

  const filesToDownload = csvToo
    ? [
        `agt${fileDate}.csv`,
        `com${fileDate}.csv`,
        `link${fileDate}.csv`,
        `ofc${fileDate}.csv`,
        `photo${fileDate}.zip`,
        `res${fileDate}.csv`,
      ]
    : [`photo${fileDate}.zip`];

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

        fs.promises
          .readFile(localFile)
          .then((data) => {
            return JSZip.loadAsync(data);
          })
          .then((zip) => {
            const promises: any[] = [];
            zip.forEach((relativePath, zipEntry) => {
              const fileName = path.basename(zipEntry.name);
              const filePath = path.join(unzipDestination, fileName);

              // Extract file
              promises.push(
                zipEntry.async('nodebuffer').then((content) => {
                  return fs.promises.writeFile(filePath, content);
                }),
              );
            });
            return Promise.all(promises);
          })
          .then(() => {
            console.log(`Unzipped ${file} successfully to ${unzipDestination}`);
          })
          .catch((err) => {
            console.error(`Error unzipping ${file}: ${err}`);
          });
      } else {
        if (fs.existsSync(localFile)) {
          // Create replica copy of the file without fileDate
          const fileNameWithoutDate = file.replace(fileDate, '');
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
    // read all the file names in the directory and add ".jpg" to the end of the file name if it is not already there
    setTimeout(() => {
      const files = fs.readdirSync(unzipDestination);
      files.forEach((file) => {
        if (!file.includes('.jpg')) {
          fs.renameSync(`${unzipDestination}/${file}`, `${unzipDestination}/${file}.jpg`);
          // add image record to the database
          Images.upsert({ imageName: `${file}.jpg` });
        }
      });
    }, 500);
    // list the file name from the array in the msg
    await loadAgents(req, res);
    await loadCom(req, res);
    await loadLinks(req, res);
    await loadListings(req, res);
    await loadOffices(req, res);

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
