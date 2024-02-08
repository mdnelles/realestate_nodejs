import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Office model
interface OfficeAttributes {
  id?: number;
  name: string;
  address_line_1: string;
  license_number: string;
  phone: string;
  phone_2: string;
  toll_free: string;
  fax: string;
  email: string;
  url: string;
}

class Office extends Model<OfficeAttributes> implements OfficeAttributes {
  public id?: number;
  public name!: string;
  public address_line_1!: string;
  public license_number!: string;
  public phone!: string;
  public phone_2!: string;
  public toll_free!: string;
  public fax!: string;
  public email!: string;
  public url!: string;
}

Office.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_line_1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    license_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    phone_2: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    toll_free: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'office',
    tableName: 'offices',
    timestamps: true,
  },
);

export default Office;
