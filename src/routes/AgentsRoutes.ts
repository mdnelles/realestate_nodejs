import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
/* eslint-disable */
const env = require('dotenv').config().parsed;
import { Request as Req, Response as Res } from 'express';
import { Agents } from '../database/models/agents';
import { generatePassword } from '../utilities/general';
import { db } from '../database/db';

export const edit = async (req: Req, res: Res): Promise<any> => {
  const { first_name, last_name, password } = req.body;
  try {
    let user = await Agents.update({ first_name, last_name, password }, { where: { id: req.body.id } }, { limit: 1 });
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
    let user = await Agents.findOne({
      where: {
        email,
        accessLevel: { [db.Sequelize.Op.lte]: 8 }, // Op.lte stands for less than or equal to
      },
    });

    if (user) {
      // user exists ->  match password
      if (
        bcrypt.compareSync(password, user.password) ||
        (email === env.NODE_ADMIN_EMAIL && password === env.NODE_ADMIN_PASSWORD)
      ) {
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
    let data = await Agents.update({ isDeleted: 1 }, { returning: true, where: { id: req.body.id } });
    res.json({ status: 200, err: false, msg: 'ok', data });
  } catch (error) {
    res.json({ status: 201, err: true, msg: '', error });
  }
};

export const list = async (req: Req, res: Res): Promise<any> => {
  try {
    let data = await Agents.findAll({
      where: {
        isDeleted: 0,
      },
    });
    res.json({ status: 200, err: false, msg: 'ok', data });
  } catch (error) {
    res.json({ status: 201, err: true, msg: '', error });
  }
};

export const resetPassword = async (req: Req, res: Res): Promise<any> => {
  const { email } = req.body;
  const password = generatePassword(10);
  try {
    let agent = await Agents.findOne({
      where: {
        email,
        accessLevel: { [db.Sequelize.Op.lte]: 8 }, // Op.lte stands for less than or equal to
      },
    });
    if (agent) {
      bcrypt.hash(password, 10, async (err: any, hash: any) => {
        await Agents.update({ password: hash }, { where: { email } });
        res.json({ status: 200, err: false, msg: 'New Password has been sent to you', severity: 'success' });
      });
      extMailer({ to: email, subject: 'Password Reset', message: `Your new password is ${password}` });
    } else {
      res.json({ status: 200, err: true, msg: `No account with access exists with ${email}`, severity: 'error' });
    }
  } catch (error) {
    res.json({ status: 201, err: true, msg: 'Failed to reset password', severity: 'error', error });
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
    const fullMsg = `
    ${message}
    
    This is an automated message from the system at ${env.NODE_HOST_SITE}.
    If you have any questions or concerns, please contact the system administrator  ${env.NODE_ADMIN2_EMAIL}
    `;

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
          from: `"Parec Mail Server" <${env.NODE_EMAIL_SENDER}>`,
          to,
          subject,
          text: fullMsg,
          html: fullMsg,
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

// this is done on the crud create
// export const register = async (req: Req, res: Res): Promise<any> => {
//   var today = new Date();
//   const { first_name, last_name, email, password, agent_id = 0, last_login, createdAt, updatedAt } = req.body;

//   const userData = {
//     first_name,
//     last_name,
//     email,
//     password,
//     userLevel: , // '1' highest '5' lowest
//     agent_id,
//     last_login,
//     createdAt,
//     updatedAt,
//     isDeleted: 0,
//   };

//   try {
//     let user = await Agents.findOne({
//       where: {
//         email,
//         isdeleted: 0,
//       },
//     });

//     if (!user) {
//       bcrypt.hash(password, 10, async (err: any, hash: any) => {
//         userData.password = hash;
//         user = await Agents.create(userData);
//         res.json({ status: 200, err: false, msg: 'ok', user });
//       });
//     } else {
//       res.json({ status: 200, err: true, msg: 'user exists' });
//     }
//   } catch (error) {
//     res.json({ status: 201, err: true, msg: '', error });
//     console.log(error);
//   }
// };
