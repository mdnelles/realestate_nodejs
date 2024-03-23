import jwt from 'jsonwebtoken';

const env = require('dotenv').config().parsed;
import type { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { Agents } from '../database/models/agents';

const tokenTest = async (token: string, accessLevel: number, res: Res, next: Next) => {
  try {
    if (!token) {
      return res.status(401).json({ status: 401, err: true, msg: 'Missing token' });
    }
    const decoded: any = jwt.decode(token);
    const email = decoded.email;
    let agent = await Agents.findOne({ where: { email } });
    console.log(agent);
    if (!agent || agent.accessLevel > accessLevel) {
      return res.status(401).json({ status: 401, err: true, msg: 'Invalid token' });
    } else {
      next();
    }
  } catch (error) {
    console.log('bad token: ' + token);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
};

export const verifyTokenAdmin = (req: Req, res: Res, next: Next) => {
  try {
    const token: any = req.body.token || req.headers.token || null;
    const accessLevel = 1;
    tokenTest(token, accessLevel, res, next);
  } catch (error) {
    console.log(error);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
};

export const verifyToken = (req: Req, res: Res, next: Next) => {
  try {
    const token = req.body.token || req.headers.token || null;
    const accessLevel = 8;
    tokenTest(token, accessLevel, res, next);
  } catch (error) {
    console.log(error);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
};
