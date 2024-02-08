import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Company model
interface CompanyAttributes {
  id?: number;
  street_number: string;
  street_name: string;
  unit_number: string;
  price_current: number;
  price_current_rent: number;
  subdivision: string;
  region: string;
  district: string;
  map_area: string;
  property_name: string;
  commercial_type: string;
  business_type: string;
  sqft_total: number;
  lot_sqft: number;
  lot_width_front: number;
  lot_width_back: number;
  lot_shape: string;
  closed_area: number;
  open_area: number;
  units_in_building: number;
  number_of_storeys: number;
  postal_code: string;
  water: string;
  year_built: number;
  construction: string;
  possession: string;
  title: string;
  zoning: string;
  remarks: string;
  remarks_es: string;
  interior_features: string;
  exterior_features: string;
  other_services: string;
  listing_office_id: number;
  colisting_office_id: number;
  listing_agent_id: number;
  colisting_agent_id: number;
  business_name: string;
  date_listed: Date;
  status: string;
  unique_id: string;
  date_expired: Date;
  directions: string;
  directions_es: string;
  web_title: string;
  web_title_es: string;
  flooring: string;
  roof: string;
  cooling: string;
  remodelled: string;
  access: string;
  parking_spaces: number;
  parking_level: string;
  parking_types: string;
  monthly_assessment: number;
  assessment_includes: string;
  offices_x_floors: string;
  number_of_buildings: number;
  listing_photo_count: number;
  building_name: string;
  latitude: number;
  longitude: number;
  units_per_floor: number;
  style: string;
  crea_display_address: string;
  agent_information: string;
}

class Company extends Model<CompanyAttributes> implements CompanyAttributes {
  public id?: number;
  public street_number!: string;
  public street_name!: string;
  public unit_number!: string;
  public price_current!: number;
  public price_current_rent!: number;
  public subdivision!: string;
  public region!: string;
  public district!: string;
  public map_area!: string;
  public property_name!: string;
  public commercial_type!: string;
  public business_type!: string;
  public sqft_total!: number;
  public lot_sqft!: number;
  public lot_width_front!: number;
  public lot_width_back!: number;
  public lot_shape!: string;
  public closed_area!: number;
  public open_area!: number;
  public units_in_building!: number;
  public number_of_storeys!: number;
  public postal_code!: string;
  public water!: string;
  public year_built!: number;
  public construction!: string;
  public possession!: string;
  public title!: string;
  public zoning!: string;
  public remarks!: string;
  public remarks_es!: string;
  public interior_features!: string;
  public exterior_features!: string;
  public other_services!: string;
  public listing_office_id!: number;
  public colisting_office_id!: number;
  public listing_agent_id!: number;
  public colisting_agent_id!: number;
  public business_name!: string;
  public date_listed!: Date;
  public status!: string;
  public unique_id!: string;
  public date_expired!: Date;
  public directions!: string;
  public directions_es!: string;
  public web_title!: string;
  public web_title_es!: string;
  public flooring!: string;
  public roof!: string;
  public cooling!: string;
  public remodelled!: string;
  public access!: string;
  public parking_spaces!: number;
  public parking_level!: string;
  public parking_types!: string;
  public monthly_assessment!: number;
  public assessment_includes!: string;
  public offices_x_floors!: string;
  public number_of_buildings!: number;
  public listing_photo_count!: number;
  public building_name!: string;
  public latitude!: number;
  public longitude!: number;
  public units_per_floor!: number;
  public style!: string;
  public crea_display_address!: string;
  public agent_information!: string;
}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street_number: {
      type: DataTypes.STRING(255),
    },
    street_name: {
      type: DataTypes.STRING(255),
    },
    unit_number: {
      type: DataTypes.STRING(255),
    },
    price_current: {
      type: DataTypes.DECIMAL(10, 2),
    },
    price_current_rent: {
      type: DataTypes.DECIMAL(10, 2),
    },
    subdivision: {
      type: DataTypes.STRING(255),
    },
    region: {
      type: DataTypes.STRING(255),
    },
    district: {
      type: DataTypes.STRING(255),
    },
    map_area: {
      type: DataTypes.STRING(255),
    },
    property_name: {
      type: DataTypes.STRING(255),
    },
    commercial_type: {
      type: DataTypes.STRING(255),
    },
    business_type: {
      type: DataTypes.STRING(255),
    },
    sqft_total: {
      type: DataTypes.INTEGER,
    },
    lot_sqft: {
      type: DataTypes.INTEGER,
    },
    lot_width_front: {
      type: DataTypes.INTEGER,
    },
    lot_width_back: {
      type: DataTypes.INTEGER,
    },
    lot_shape: {
      type: DataTypes.STRING(255),
    },
    closed_area: {
      type: DataTypes.INTEGER,
    },
    open_area: {
      type: DataTypes.INTEGER,
    },
    units_in_building: {
      type: DataTypes.INTEGER,
    },
    number_of_storeys: {
      type: DataTypes.INTEGER,
    },
    postal_code: {
      type: DataTypes.STRING(20),
    },
    water: {
      type: DataTypes.STRING(255),
    },
    year_built: {
      type: DataTypes.INTEGER,
    },
    construction: {
      type: DataTypes.STRING(255),
    },
    possession: {
      type: DataTypes.STRING(255),
    },
    title: {
      type: DataTypes.STRING(255),
    },
    zoning: {
      type: DataTypes.STRING(255),
    },
    remarks: {
      type: DataTypes.TEXT,
    },
    remarks_es: {
      type: DataTypes.TEXT,
    },
    interior_features: {
      type: DataTypes.TEXT,
    },
    exterior_features: {
      type: DataTypes.TEXT,
    },
    other_services: {
      type: DataTypes.TEXT,
    },
    listing_office_id: {
      type: DataTypes.INTEGER,
    },
    colisting_office_id: {
      type: DataTypes.INTEGER,
    },
    listing_agent_id: {
      type: DataTypes.INTEGER,
    },
    colisting_agent_id: {
      type: DataTypes.INTEGER,
    },
    business_name: {
      type: DataTypes.STRING(255),
    },
    date_listed: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING(255),
    },
    unique_id: {
      type: DataTypes.STRING(255),
    },
    date_expired: {
      type: DataTypes.DATE,
    },
    directions: {
      type: DataTypes.TEXT,
    },
    directions_es: {
      type: DataTypes.TEXT,
    },
    web_title: {
      type: DataTypes.STRING(255),
    },
    web_title_es: {
      type: DataTypes.STRING(255),
    },
    flooring: {
      type: DataTypes.STRING(255),
    },
    roof: {
      type: DataTypes.STRING(255),
    },
    cooling: {
      type: DataTypes.STRING(255),
    },
    remodelled: {
      type: DataTypes.STRING(255),
    },
    access: {
      type: DataTypes.STRING(255),
    },
    parking_spaces: {
      type: DataTypes.INTEGER,
    },
    parking_level: {
      type: DataTypes.STRING(255),
    },
    parking_types: {
      type: DataTypes.TEXT,
    },
    monthly_assessment: {
      type: DataTypes.DECIMAL(10, 2),
    },
    assessment_includes: {
      type: DataTypes.TEXT,
    },
    offices_x_floors: {
      type: DataTypes.STRING(255),
    },
    number_of_buildings: {
      type: DataTypes.INTEGER,
    },
    listing_photo_count: {
      type: DataTypes.INTEGER,
    },
    building_name: {
      type: DataTypes.STRING(255),
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    units_per_floor: {
      type: DataTypes.INTEGER,
    },
    style: {
      type: DataTypes.STRING(255),
    },
    crea_display_address: {
      type: DataTypes.TEXT,
    },
    agent_information: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'company',
    tableName: 'companies',
    timestamps: true,
  },
);

export default Company;
