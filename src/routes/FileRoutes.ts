import path from 'path';
import * as fs from 'fs';
import csv from 'csv-parser';
import { Agents } from '../database/models/agents';
import { Companies } from '../database/models/companies';
import { Links } from '../database/models/links';
import { Listings } from '../database/models/listings';
import { Offices } from '../database/models/offices';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

// read all files in tmp folder
export const readFolderContents = async (req: Req, res: Res): Promise<any> => {
  try {
    const folderPath = path.join(__dirname, '../tmp/');
    const files = fs.readdirSync(folderPath);
    res.json({ status: 200, err: false, files, msg: 'success' });
  } catch (error) {
    console.log(error);
    res.json({ status: 200, err: true, error });
  }
};

export const removeFile = async (req: Req, res: Res): Promise<any> => {
  try {
    const { fileName } = req.body;
    const folderPath = path.join(__dirname, '../tmp/');
    fs.unlinkSync(folderPath + fileName);
    res.json({ status: 200, err: false, msg: 'Success' });
  } catch (error) {
    console.log(error);
    res.json({ status: 200, err: true, error });
  }
};

export const getAllfilesFromDate = async (req: Req, res: Res): Promise<any> => {
  try {
    const { date } = req.body;
    const folderPath = path.join(__dirname, '../tmp/');
    const files = fs.readdirSync(folderPath);
    const filteredFiles = files.filter((file) => file.includes(date));
    res.json({ status: 200, err: false, files: filteredFiles });
  } catch (error) {
    console.log(error);
    res.json({ status: 200, err: true, error });
  }
};

export const downloadFile = async (req: any, res: any): Promise<any> => {
  try {
    const { fileName } = req.body;
    const folderPath = path.join(__dirname, '../tmp/');
    const filePath = path.join(folderPath, fileName);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ status: 404, error: 'File not found' });
    }

    // Set headers
    res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
    res.setHeader('Content-type', 'application/octet-stream');

    // Pipe the file stream to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, error: 'Internal server error' });
  }
};

// export const associateImagesToDatabase = async (req: any, res: any): Promise<any> => {
//   try {
//     const unzipDestination = env.NODE_PHOTO_PATH;
//     // read all the file names in the directory
//     fs.readdir(unzipDestination, (err, files) => {
//       if (err) {
//         console.error(`Error reading directory ${unzipDestination}: ${err}`);
//         return;
//       }

//       files.forEach((extractedFile) => {
//         // same file name 00004B62.L22.jpg
//         // itterate throughthe files and UPSERT the file name to the database

//     });
