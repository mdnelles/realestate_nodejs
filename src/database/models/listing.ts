import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Listings model
interface ListingAttributes {
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
  property_type: string;
  year_built: number;
  bedrooms: number;
  bathrooms: number;
  half_bathrooms: number;
  number_of_rooms: number;
  lot_sqft: number;
  sqft_total: number;
  closed_area: number;
  open_area: number;
  lot_width_front: number;
  lot_width_back: number;
  style: string;
  remodelled: string;
  possession: string;
  zoning: string;
  remarks: string;
  remarks_es: string;
  listing_office_id: number;
  colisting_office_id: number;
  listing_agent_id: number;
  colisting_agent_id: number;
  listing_agent_phone: string;
  unique_id: string;
  rooms: string;
  date_listed: Date;
  postal_code: string;
  status: string;
  tax_year: number;
  title: string;
  monthly_assessment: number;
  assessment_includes: string;
  date_expired: Date;
  lot_features: string;
  interior_features: string;
  exterior_features: string;
  other_services: string;
  lot_shape: string;
  modification_date: Date;
  directions: string;
  directions_es: string;
  web_title: string;
  web_title_es: string;
  access: string;
  roof: string;
  cooling: string;
  flooring: string;
  water: string;
  construction: string;
  parking_spaces: number;
  parking_level: string;
  parking_types: string;
  internal_features: string;
  shared_amenities: string;
  listing_photo_count: number;
  building_name: string;
  longitude: number;
  latitude: number;
  units_per_floor: number;
  crea_display_address: string;
  property_name: string;
  floors_in_building: number;
  number_of_buildings: number;
  model_suite_number: string;
}

class Listing extends Model<ListingAttributes> implements ListingAttributes {
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
  public property_type!: string;
  public year_built!: number;
  public bedrooms!: number;
  public bathrooms!: number;
  public half_bathrooms!: number;
  public number_of_rooms!: number;
  public lot_sqft!: number;
  public sqft_total!: number;
  public closed_area!: number;
  public open_area!: number;
  public lot_width_front!: number;
  public lot_width_back!: number;
  public style!: string;
  public remodelled!: string;
  public possession!: string;
  public zoning!: string;
  public remarks!: string;
  public remarks_es!: string;
  public listing_office_id!: number;
  public colisting_office_id!: number;
  public listing_agent_id!: number;
  public colisting_agent_id!: number;
  public listing_agent_phone!: string;
  public unique_id!: string;
  public rooms!: string;
  public date_listed!: Date;
  public postal_code!: string;
  public status!: string;
  public tax_year!: number;
  public title!: string;
  public monthly_assessment!: number;
  public assessment_includes!: string;
  public date_expired!: Date;
  public lot_features!: string;
  public interior_features!: string;
  public exterior_features!: string;
  public other_services!: string;
  public lot_shape!: string;
  public modification_date!: Date;
  public directions!: string;
  public directions_es!: string;
  public web_title!: string;
  public web_title_es!: string;
  public access!: string;
  public roof!: string;
  public cooling!: string;
  public flooring!: string;
  public water!: string;
  public construction!: string;
  public parking_spaces!: number;
  public parking_level!: string;
  public parking_types!: string;
  public internal_features!: string;
  public shared_amenities!: string;
  public listing_photo_count!: number;
  public building_name!: string;
  public longitude!: number;
  public latitude!: number;
  public units_per_floor!: number;
  public crea_display_address!: string;
  public property_name!: string;
  public floors_in_building!: number;
  public number_of_buildings!: number;
  public model_suite_number!: string;
}

Listing.init(
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
    property_type: {
      type: DataTypes.STRING(255),
    },
    year_built: {
      type: DataTypes.INTEGER,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
    },
    half_bathrooms: {
      type: DataTypes.INTEGER,
    },
    number_of_rooms: {
      type: DataTypes.INTEGER,
    },
    lot_sqft: {
      type: DataTypes.INTEGER,
    },
    sqft_total: {
      type: DataTypes.INTEGER,
    },
    closed_area: {
      type: DataTypes.INTEGER,
    },
    open_area: {
      type: DataTypes.INTEGER,
    },
    lot_width_front: {
      type: DataTypes.INTEGER,
    },
    lot_width_back: {
      type: DataTypes.INTEGER,
    },
    style: {
      type: DataTypes.STRING(255),
    },
    remodelled: {
      type: DataTypes.STRING(255),
    },
    possession: {
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
    listing_agent_phone: {
      type: DataTypes.STRING(20),
    },
    unique_id: {
      type: DataTypes.STRING(255),
    },
    rooms: {
      type: DataTypes.STRING(255),
    },
    date_listed: {
      type: DataTypes.DATE,
    },
    postal_code: {
      type: DataTypes.STRING(20),
    },
    status: {
      type: DataTypes.STRING(255),
    },
    tax_year: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(255),
    },
    monthly_assessment: {
      type: DataTypes.DECIMAL(10, 2),
    },
    assessment_includes: {
      type: DataTypes.TEXT,
    },
    date_expired: {
      type: DataTypes.DATE,
    },
    lot_features: {
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
    lot_shape: {
      type: DataTypes.STRING(255),
    },
    modification_date: {
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
    access: {
      type: DataTypes.STRING(255),
    },
    roof: {
      type: DataTypes.STRING(255),
    },
    cooling: {
      type: DataTypes.STRING(255),
    },
    flooring: {
      type: DataTypes.STRING(255),
    },
    water: {
      type: DataTypes.STRING(255),
    },
    construction: {
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
    internal_features: {
      type: DataTypes.TEXT,
    },
    shared_amenities: {
      type: DataTypes.TEXT,
    },
    listing_photo_count: {
      type: DataTypes.INTEGER,
    },
    building_name: {
      type: DataTypes.STRING(255),
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    units_per_floor: {
      type: DataTypes.INTEGER,
    },
    crea_display_address: {
      type: DataTypes.TEXT,
    },
    property_name: {
      type: DataTypes.STRING(255),
    },
    floors_in_building: {
      type: DataTypes.INTEGER,
    },
    number_of_buildings: {
      type: DataTypes.INTEGER,
    },
    model_suite_number: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize,
    modelName: 'listing',
    tableName: 'listings',
    timestamps: true,
  },
);

export default Listing;
