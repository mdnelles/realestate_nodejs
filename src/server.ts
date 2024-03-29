import express from 'express';

import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
/* eslint-disable */
const env = require('dotenv').config().parsed;

import { verifyToken, verifyTokenAdmin } from './routes/Token';

import * as agents from './routes/AgentsRoutes';
import * as csv from './routes/CsvRoutes';
import * as search from './routes/crud/SearchRoutes';
import * as create from './routes/crud/CreateRoutes';
import * as update from './routes/crud/UpdateRoutes';
import * as del from './routes/crud/DeleteRoutes';
import * as data from './routes/DataPullRoutes';
import * as files from './routes/FileRoutes';

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

app.post('/csv/loadAgents', verifyTokenAdmin, csv.loadAgents); // load agents
app.post('/csv/loadCompanies', verifyTokenAdmin, csv.loadCom); // load companies
app.post('/csv/loadLinks', verifyTokenAdmin, csv.loadLinks); // load links
app.post('/csv/loadListings', verifyTokenAdmin, csv.loadListings); // load listings
app.post('/csv/loadOffices', verifyTokenAdmin, csv.loadOffices); // load offices

// app.post('/agents_register', agents.register); // register a new agent
app.post('/agents_edit', verifyTokenAdmin, agents.edit); // edit a agent
app.post('/agents_delete', verifyTokenAdmin, agents.del); // delete a agent
app.post('/agents_list', verifyToken, agents.list); // get all agents
app.post('/agents_login', agents.login); // login
app.post('/reset_password', agents.resetPassword); // reset password

app.post('/files/readFolderContents', verifyTokenAdmin, files.readFolderContents); // read all files in tmp folder
app.post('/files/removeFile', verifyTokenAdmin, files.removeFile); // remove a file
app.post('/files/getAllfilesFromDate', verifyTokenAdmin, files.getAllfilesFromDate); // get all files from a date
app.post('/files/downloadFile', verifyTokenAdmin, files.downloadFile); // download a file
app.post('/files/updateImages', verifyTokenAdmin, files.addImagesToDatabase); // upload a file
app.post('/files/removeAllFiles', verifyTokenAdmin, files.removeAllFiles); // remove all files

app.post('/crud/search/like', verifyToken, search.like); // get records matching a condition
app.post('/crud/search/and', verifyToken, search.and); // get records matching all conditions
app.post('/crud/search/all', verifyToken, search.all); // get all records from a table
app.post('/crud/create', verifyToken, create.create); // create a new record
app.post('/crud/update/matching', verifyToken, update.updateMatching); // update records matching a condition
app.post('/crud/update/all', verifyToken, update.updateAll); // update all records matching a condition
app.post('/crud/updatebyid', verifyToken, update.updateById); // update a record by id
app.post('/crud/delete/matching', verifyToken, del.deleteMatching); // delete records matching a condition
app.post('/crud/delete/truncate', verifyToken, del.truncateTable); // clear all records from a table

app.post('/data/getAll', verifyToken, data.getAll); // get all newest files from FTP server
app.post('/data/getByDateSingle', verifyToken, data.getByDateSingle); // get all files from FTP server by date
app.post('/data/getByDateAll', verifyToken, data.getByDateAll); // get all files from FTP server by date

app.post('/mail', verifyToken, agents.mail); // get all files from FTP server by date

if (env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

app.listen(port, function () {
  console.log('Server is running on port: ' + port);
});

export default app;
