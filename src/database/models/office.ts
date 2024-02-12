import { Sequelize, DataTypes, Model } from 'sequelize';
import { db } from '../db';

export interface OfficeAttributes {
  id?: number;
  name: string;
  address_line_1: string;
  license_number: string;
  phone: string;
  phone_2: string | null;
  toll_free: string | null;
  fax: string | null;
  email: string;
  url: string | null;
}

export class Office extends Model<OfficeAttributes> implements OfficeAttributes {
  public id?: number;
  public name!: string;
  public address_line_1!: string;
  public license_number!: string;
  public phone!: string;
  public phone_2!: string | null;
  public toll_free!: string | null;
  public fax!: string | null;
  public email!: string;
  public url!: string | null;
}

Office.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_line_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    license_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    toll_free: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db.sequelize,
    modelName: 'office',
    tableName: 'offices',
    timestamps: true,
  },
);
