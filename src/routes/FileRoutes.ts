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