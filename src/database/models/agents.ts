import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Agents model
interface AgentAttributes {
  id?: number;
  first_name: string;
  last_name: string;
  license_number: string;
  phone: string;
  phone2: string;
  cell: string;
  cell2: string;
  email: string;
  url: string;
  office_id: number;
}

class Agent extends Model<AgentAttributes> implements AgentAttributes {
  public id?: number;
  public first_name!: string;
  public last_name!: string;
  public license_number!: string;
  public phone!: string;
  public phone2!: string;
  public cell!: string;
  public cell2!: string;
  public email!: string;
  public url!: string;
  public office_id!: number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Agent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(255),
    },
    last_name: {
      type: DataTypes.STRING(255),
    },
    license_number: {
      type: DataTypes.STRING(255),
    },
    phone: {
      type: DataTypes.STRING(20),
    },
    phone2: {
      type: DataTypes.STRING(20),
    },
    cell: {
      type: DataTypes.STRING(20),
    },
    cell2: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(255),
    },
    url: {
      type: DataTypes.STRING(255),
    },
    office_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'agent',
    tableName: 'agents',
    timestamps: true,
  },
);

export default Agent;
