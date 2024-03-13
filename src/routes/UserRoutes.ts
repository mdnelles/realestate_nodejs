import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
/* eslint-disable */
const env = require('dotenv').config().parsed;
import { Users } from '../database/models/users';
import { Request as Req, Response as Res } from 'express';

export const register = async (req: Req, res: Res): Promise<any> => {
  var today = new Date();
  const { first_name, last_name, email, password, agent_id = 0, last_login, createdAt, updatedAt } = req.body;

  const userData = {
    first_name,
    last_name,
    email,
    password,
    userLevel: '5', // '1' highest '5' lowest
    agent_id,
    last_login,
    createdAt,
    updatedAt,
    isDeleted: 0,
  };

  try {
    let user = await Users.findOne({
      where: {
        email,
        isdeleted: 0,
      },
    });

    if (!user) {
      bcrypt.hash(password, 10, async (err: any, hash: any) => {
        userData.password = hash;
        user = await Users.create(userData);
        res.json({ status: 200, err: false, msg: 'ok', user });
      });
    } else {
      res.json({ status: 200, err: true, msg: 'user exists' });
    }
  } catch (error) {
    res.json({ status: 201, err: true, msg: '', error });
    console.log(error);
  }
};

export const edit = async (req: Req, res: Res): Promise<any> => {
  const { first_name, last_name, password } = req.body;
  try {
    let user = await Users.update({ first_name, last_name, password }, { where: { id: req.body.id } }, { limit: 1 });
    res.json({ status: 200, err: false, msg: 'user exists', user });
  } catch (error) {
    res.json({ status: 200, err: true, error });
    console.log(error);
  }
};

export const login = async (req: Req, res: Res): Promise<any> => {
  const secret: string = env.NODE_SECRET || 'EEmp967';
  try {
    const { email, password } = req.body;
    let user = await Users.findOne({ where: { email } });

    if (user) {
      // user exists ->  match password
      if (bcrypt.compareSync(password, user.password)) {
        // successful login
        let token = jwt.sign(user.dataValues, secret, {
          expiresIn: 60 * 60 * 24 * 30,
        });
        res.json({ status: 200, err: false, msg: 'user exists', token });
      } else {
        res.json({ status: 201, err: true, msg: 'login failed' });
      }
    } else {
      res.json({ status: 201, err: true, msg: 'user does not exist' });
    }
  } catch (error) {
    res.json({ status: 201, err: true, error });
  }
};

export const del = async (req: Req, res: Res): Promise<any> => {
  try {
    let data = await Users.update({ isDeleted: 1 }, { returning: true, where: { id: req.body.id } });
    res.json({ status: 200, err: false, msg: 'ok', data });
  } catch (error) {
    res.json({ status: 201, err: true, msg: '', error });
  }
};

export const list = async (req: Req, res: Res): Promise<any> => {
  try {
    let data = await Users.findAll({
      where: {
        isDeleted: 0,
      },
    });
    res.json({ status: 200, err: false, msg: 'ok', data });
  } catch (error) {
    res.json({ status: 201, err: true, msg: '', error });
  }
};
