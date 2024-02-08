import jwt from 'jsonwebtoken';

const env = require('dotenv').config().parsed;
import type { Request as Req, Response as Res, NextFunction as Next} from 'express';

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

const tokenTestAdmin = async (token: string, res: Res, next: Next) => {
  try {
    const decoded: any = jwt.decode(token);
    if (decoded && decoded.email !== env.NODE_ADMIN) next();
    else res.status(201).json({ status: 201, err: true, msg: 'bad admin token' });
  } catch (error) {
    console.log('bad token: ' + token);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
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

export const verifyTokenAdmin = (req: Req, res: Res, next: Next) => {
  try {
    const token: any = req.body.token || req.headers.token || null;
    tokenTestAdmin(token, res, next);
  } catch (error) {
    console.log(error);
    res.status(201).json({ status: 201, err: true, msg: 'bad token', error });
  }
};
