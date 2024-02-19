import express from 'express';

import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
/* eslint-disable */
const env = require('dotenv').config().parsed;

import { verifyTokenAdmin } from './routes/Token';

import * as users from './routes/UserRoutes';
import * as csv from './routes/CsvRoutes';
import * as search from './routes/crud/SearchRoutes';
import * as create from './routes/crud/CreateRoutes';
import * as update from './routes/crud/UpdateRoutes';
import * as del from './routes/crud/DeleteRoutes';
import * as test from './routes/TestRoute';

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

app.post('/csv/loadAgents', csv.loadAgents);
app.post('/csv/loadCompanies', csv.loadCom);
app.post('/csv/loadLinks', csv.loadLinks);
app.post('/csv/loadListings', csv.loadListings);
app.post('/csv/loadOffices', csv.loadOffices);

app.post('/users_register', users.register);
app.post('/users_edit', verifyTokenAdmin, users.register);
app.post('/users_delete', verifyTokenAdmin, users.del);
app.post('/users_list', verifyTokenAdmin, users.list);
app.post('/users_login', users.login);

app.post('/crud/search/like', search.like);
app.post('/crud/search/and', search.and);
app.post('/crud/search/all', search.all);

app.post('/crud/create', create.create);

app.post('/crud/update/matching', verifyTokenAdmin, update.updateMatching);
app.post('/crud/update/all', verifyTokenAdmin, update.updateAll);

app.post('/crud/delete/matching', verifyTokenAdmin, del.deleteMatching);
app.post('/crud/delete/truncate', verifyTokenAdmin, del.truncateTable);

app.get('/test', test.test);

if (env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

app.listen(port, function () {
  console.log('Server is running on port: ' + port);
});

export default app;
