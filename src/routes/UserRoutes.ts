import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
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

export const mail = async (req: any, res: any): Promise<any> => {
  const { subject = 'mailfor', message = 'default message' } = req.body;
  try {
    const params = {
      to: env.NODE_ADMIN_EMAIL,
      subject,
      message,
    };
    await extMailer(params);

    res.json({ status: 201, err: false, msg: 'ok mail sent' });
  } catch (error) {
    console.log(error);
    res.json({ status: 201, err: true, msg: 'Error', error });
  }
};

type msgType = {
  to: string;
  subject: string;
  message: string;
};
export default function extMailer(params: msgType) {
  return new Promise((resolve) => {
    const { to = env.NODE_ADMIN_EMAIL, subject = 'subject', message = 'msg' } = params;
    try {
      console.log('user:' + env.NODE_MAIL_EMAIL);
      console.log('pass:' + env.NODE_EMAIL_PASS);
      const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.com' || env.NODE_MAIL_HOST,
        port: 587, // or 465 for SSL
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
          user: env.NODE_MAIL_EMAIL,
          pass: env.NODE_EMAIL_PASS,
        },
        logger: true,
      });
      (async () => {
        const info = await transporter.sendMail({
          from: env.NODE_EMAIL_SENDER,
          to,
          subject,
          text: message,
          html: message,
          headers: { 'x-myheader': 'test header' },
        });
        console.log('Message sent: %s', info.response);
        resolve(true);
      })();
    } catch (error) {
      resolve(false);
    }
  });

  //setTimeout(shutDown, 5000); // 10 seconds
}
