import jwt from 'jsonwebtoken';

const env = require('dotenv').config().parsed;
import type { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { Agents } from '../database/models/agents';

const tokenTest = (token: string, res: Res, next: Next) => {
  jwt.verify(token, env.NODE_SECRET, (error: any) => {
    if (error) {
      console.log('bad token: ' + token);
      res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
    } else {
      next(); // Next middleware
    }
  });
};

export const verifyToken = (req: Req, res: Res, next: Next) => {
  try {
    const token = req.body.token || req.headers.token || null;
    tokenTest(token, res, next);
  } catch (error) {
    console.log(error);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
};

const tokenTestAdmin = async (token: string, res: Res, next: Next) => {
  try {
    if (!token) {
      return res.status(401).json({ status: 401, err: true, msg: 'Missing token' });
    }
    const decoded: any = jwt.decode(token);
    const email = decoded.email;
    let agent = await Agents.findOne({ where: { email } });
    if (!agent || agent.accessLevel > 1) {
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
    tokenTestAdmin(token, res, next);
  } catch (error) {
    console.log(error);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
};
