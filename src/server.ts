import express from 'express';

import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
/* eslint-disable */
const env = require('dotenv').config().parsed;

import { verifyTokenAdmin } from './routes/Token';

import * as users from './routes/UserRoutes';
import * as auto from './routes/AutoRoutes';

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const jsonParser = bodyParser.json();
const port = env.NODE_PORT || 5050;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use(express.json());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(helmet());

app.post('/auto/loadAgents', auto.loadAgents);

app.post('/user_register', users.register);
app.post('/user_login', users.login);
app.post('/user_edit', verifyTokenAdmin, users.edit);
app.post('/user_remove', verifyTokenAdmin, users.remove);
app.post('/user_list', verifyTokenAdmin, users.list);

if (env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

app.listen(port, function () {
  console.log('Server is running on port: ' + port);
});

export default app;
