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
app.post('/auto/loadCompanies', auto.loadCom);
app.post('/auto/loadLinks', auto.loadLinks);
app.post('/auto/loadListings', auto.loadListings);

app.post('/users_register', users.register);
app.post('/users_edit', verifyTokenAdmin, users.register);
app.post('/users_delete', verifyTokenAdmin, users.del);
app.post('/users_list', verifyTokenAdmin, users.list);
app.post('/users_login', users.login);

if (env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

app.listen(port, function () {
  console.log('Server is running on port: ' + port);
});

export default app;
