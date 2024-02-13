import Sequelize from 'sequelize';
import { db } from '../db';

export const Company: any = db.sequelize.define(
  'companies',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street_number: {
      type: Sequelize.STRING(255),
    },
    street_name: {
      type: Sequelize.STRING(255),
    },
    unit_number: {
      type: Sequelize.STRING(255),
    },
    price_current: {
      type: Sequelize.STRING,
    },
    price_current_rent: {
      type: Sequelize.STRING,
    },
    subdivision: {
      type: Sequelize.STRING(255),
    },
    region: {
      type: Sequelize.STRING(255),
    },
    district: {
      type: Sequelize.STRING(255),
    },
    map_area: {
      type: Sequelize.STRING(255),
    },
    property_name: {
      type: Sequelize.STRING(255),
    },
    commercial_type: {
      type: Sequelize.STRING(255),
    },
    business_type: {
      type: Sequelize.STRING(255),
    },
    sqft_total: {
      type: Sequelize.STRING,
    },
    lot_sqft: {
      type: Sequelize.STRING,
    },
    lot_width_front: {
      type: Sequelize.STRING,
    },
    lot_width_back: {
      type: Sequelize.STRING,
    },
    lot_shape: {
      type: Sequelize.STRING(255),
    },
    closed_area: {
      type: Sequelize.STRING,
    },
    open_area: {
      type: Sequelize.STRING,
    },
    units_in_building: {
      type: Sequelize.STRING,
    },
    number_of_storeys: {
      type: Sequelize.STRING,
    },
    postal_code: {
      type: Sequelize.STRING(20),
    },
    water: {
      type: Sequelize.STRING(255),
    },
    year_built: {
      type: Sequelize.STRING,
    },
    construction: {
      type: Sequelize.STRING(255),
    },
    possession: {
      type: Sequelize.STRING(255),
    },
    title: {
      type: Sequelize.STRING(255),
    },
    zoning: {
      type: Sequelize.STRING(255),
    },
    remarks: {
      type: Sequelize.TEXT,
    },
    remarks_es: {
      type: Sequelize.TEXT,
    },
    interior_features: {
      type: Sequelize.TEXT,
    },
    exterior_features: {
      type: Sequelize.TEXT,
    },
    other_services: {
      type: Sequelize.TEXT,
    },
    listing_office_id: {
      type: Sequelize.STRING,
    },
    colisting_office_id: {
      type: Sequelize.STRING,
    },
    listing_agent_id: {
      type: Sequelize.STRING,
    },
    colisting_agent_id: {
      type: Sequelize.STRING,
    },
    business_name: {
      type: Sequelize.STRING(255),
    },
    date_listed: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING(255),
    },
    unique_id: {
      type: Sequelize.STRING(255),
    },
    date_expired: {
      type: Sequelize.DATE,
    },
    directions: {
      type: Sequelize.TEXT,
    },
    directions_es: {
      type: Sequelize.TEXT,
    },
    web_title: {
      type: Sequelize.STRING(255),
    },
    web_title_es: {
      type: Sequelize.STRING(255),
    },
    flooring: {
      type: Sequelize.STRING(255),
    },
    roof: {
      type: Sequelize.STRING(255),
    },
    cooling: {
      type: Sequelize.STRING(255),
    },
    remodelled: {
      type: Sequelize.STRING(255),
    },
    access: {
      type: Sequelize.STRING(255),
    },
    parking_spaces: {
      type: Sequelize.STRING,
    },
    parking_level: {
      type: Sequelize.STRING(255),
    },
    parking_types: {
      type: Sequelize.TEXT,
    },
    monthly_assessment: {
      type: Sequelize.STRING,
    },
    assessment_includes: {
      type: Sequelize.TEXT,
    },
    offices_x_floors: {
      type: Sequelize.STRING(255),
    },
    number_of_buildings: {
      type: Sequelize.STRING,
    },
    listing_photo_count: {
      type: Sequelize.STRING,
    },
    building_name: {
      type: Sequelize.STRING(255),
    },
    latitude: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.STRING,
    },
    units_per_floor: {
      type: Sequelize.STRING,
    },
    style: {
      type: Sequelize.STRING(255),
    },
    crea_display_address: {
      type: Sequelize.TEXT,
    },
    agent_information: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
  },
);
