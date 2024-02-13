import Sequelize from 'sequelize';
import { db } from '../db';

export const Listing: any = db.sequelize.define(
  'listings',
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
    property_type: {
      type: Sequelize.STRING(255),
    },
    year_built: {
      type: Sequelize.STRING,
    },
    bedrooms: {
      type: Sequelize.STRING,
    },
    bathrooms: {
      type: Sequelize.STRING,
    },
    half_bathrooms: {
      type: Sequelize.STRING,
    },
    number_of_rooms: {
      type: Sequelize.STRING,
    },
    lot_sqft: {
      type: Sequelize.STRING,
    },
    sqft_total: {
      type: Sequelize.STRING,
    },
    closed_area: {
      type: Sequelize.STRING,
    },
    open_area: {
      type: Sequelize.STRING,
    },
    lot_width_front: {
      type: Sequelize.STRING,
    },
    lot_width_back: {
      type: Sequelize.STRING,
    },
    style: {
      type: Sequelize.STRING(255),
    },
    remodelled: {
      type: Sequelize.STRING(255),
    },
    possession: {
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
    listing_agent_phone: {
      type: Sequelize.STRING(20),
    },
    unique_id: {
      type: Sequelize.STRING(255),
    },
    rooms: {
      type: Sequelize.STRING(255),
    },
    date_listed: {
      type: Sequelize.DATE,
    },
    postal_code: {
      type: Sequelize.STRING(20),
    },
    status: {
      type: Sequelize.STRING(255),
    },
    tax_year: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING(255),
    },
    monthly_assessment: {
      type: Sequelize.STRING,
    },
    assessment_includes: {
      type: Sequelize.TEXT,
    },
    date_expired: {
      type: Sequelize.DATE,
    },
    lot_features: {
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
    lot_shape: {
      type: Sequelize.STRING(255),
    },
    modification_date: {
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
    access: {
      type: Sequelize.STRING(255),
    },
    roof: {
      type: Sequelize.STRING(255),
    },
    cooling: {
      type: Sequelize.STRING(255),
    },
    flooring: {
      type: Sequelize.STRING(255),
    },
    water: {
      type: Sequelize.STRING(255),
    },
    construction: {
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
    internal_features: {
      type: Sequelize.TEXT,
    },
    shared_amenities: {
      type: Sequelize.TEXT,
    },
    listing_photo_count: {
      type: Sequelize.STRING,
    },
    building_name: {
      type: Sequelize.STRING(255),
    },
    longitude: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
    },
    units_per_floor: {
      type: Sequelize.STRING,
    },
    crea_display_address: {
      type: Sequelize.TEXT,
    },
    property_name: {
      type: Sequelize.STRING(255),
    },
    floors_in_building: {
      type: Sequelize.STRING,
    },
    number_of_buildings: {
      type: Sequelize.STRING,
    },
    model_suite_number: {
      type: Sequelize.STRING(255),
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    isDeleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  },
);
