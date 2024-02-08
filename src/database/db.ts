// import env vars into variable env
import * as dbc from './dbconfig';
const { MongoClient, ServerApiVersion } = require('mongodb');
export const uri = `mongodb+srv://${dbc.user}:${dbc.pass}@${dbc.link}?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const db = client.db('LakesWorld');

// Connect to the MongoDB server when the application starts
client
  .connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err: any) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Close the connection when the Node.js process is terminated
process.on('SIGINT', () => {
  client
    .close()
    .then(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    })
    .catch((err: any) => {
      console.error('Error closing MongoDB connection:', err);
      process.exit(1);
    });
});
