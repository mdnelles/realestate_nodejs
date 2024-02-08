// Import Sequelize module
import { Sequelize, DataTypes } from 'sequelize';

// Initialize Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Links model
const Links = sequelize.define('links', {
  link_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  listing_id: {
    type: DataTypes.INTEGER,
  },
  link_type: {
    type: DataTypes.STRING(255),
  },
  link_title: {
    type: DataTypes.STRING(255),
  },
  link_url: {
    type: DataTypes.STRING(255),
  },
});

// Synchronize the model with the database
async function syncModel() {
  try {
    await sequelize.sync({ force: true });
    console.log('Model synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing model:', error);
  }
}

// Export the model
module.exports = { Links, syncModel };
