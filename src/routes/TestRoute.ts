import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

export const test = async (req: Req, res: Res): Promise<any> => {
  try {
    res.json({ status: 200, err: false, msg: 'ok 1' });
  } catch (error) {
    res.json({ status: 201, err: true, msg: 'fail1', error });
  }
};

export const test2 = async (req: Req, res: Res): Promise<any> => {
  try {
    res.json({ status: 200, err: false, msg: 'ok 2' });
  } catch (error) {
    res.json({ status: 201, err: true, msg: 'fail1', error });
  }
};
