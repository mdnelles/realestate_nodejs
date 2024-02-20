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
import * as data from './routes/DataPullRoutes';

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

app.post('/csv/loadAgents', csv.loadAgents); // load agents
app.post('/csv/loadCompanies', csv.loadCom); // load companies
app.post('/csv/loadLinks', csv.loadLinks); // load links
app.post('/csv/loadListings', csv.loadListings); // load listings
app.post('/csv/loadOffices', csv.loadOffices); // load offices

app.post('/users_register', users.register); // register a new user
app.post('/users_edit', verifyTokenAdmin, users.register); // edit a user
app.post('/users_delete', verifyTokenAdmin, users.del); // delete a user
app.post('/users_list', verifyTokenAdmin, users.list); // get all users
app.post('/users_login', users.login); // login

app.post('/crud/search/like', search.like); // get records matching a condition
app.post('/crud/search/and', search.and); // get records matching all conditions
app.post('/crud/search/all', search.all); // get all records from a table

app.post('/crud/create', create.create); // create a new record

app.post('/crud/update/matching', verifyTokenAdmin, update.updateMatching); // update records matching a condition
app.post('/crud/update/all', verifyTokenAdmin, update.updateAll); // update all records matching a condition

app.post('/crud/delete/matching', verifyTokenAdmin, del.deleteMatching); // delete records matching a condition
app.post('/crud/delete/truncate', verifyTokenAdmin, del.truncateTable); // clear all records from a table

app.get('/data/getNewestAll', data.getNewestAll); // get all newest files from FTP server

app.get('/test', test.test);
app.get('/test2', test.test2);

if (env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

app.listen(port, function () {
  console.log('Server is running on port: ' + port);
});

export default app;
