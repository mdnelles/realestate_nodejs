import path from 'path';
import * as fs from 'fs';
import csv from 'csv-parser';
import { Agents } from '../database/models/agents';
import { Companies } from '../database/models/companies';
import { Links } from '../database/models/links';
import { Listings } from '../database/models/listings';
import { Offices } from '../database/models/offices';

import type { Request as Req, Response as Res, NextFunction as Next } from 'express';

// pull data from ../../tmp/agt.csv parse it line by line and insert it into the agents table
export const loadAgents = async (req: Req, res: Res): Promise<any> => {
  const csvFilePath = path.join(__dirname, '../tmp/agt.csv');
  try {
    const stream = fs.createReadStream(csvFilePath);
    const results: any = [];

    // truncate the table
    // await Agents.destroy({ where: {} });

    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', async () => {
        console.log('results');
        for (const result of results) {
          console.log(result.first_name);
          try {
            const agent = await Agents.upsert({
              id: result.id,
              first_name: result.first_name,
              last_name: result.last_name,
              license_number: result.license_number,
              phone: result.phone,
              phone2: result.phone2,
              cell: result.cell,
              cell2: result.cell2,
              email: result.email,
              url: result.url,
              office_id: result.office_id,
              isAuto: 1,
            });
            console.log(`Agent ${agent.id} created`);
          } catch (error: any) {
            console.error(`Error: ${error.message}`);
          }
        }
        res.json({ status: 200, err: false, msg: 'agent list updated' });
      });
  } catch (error) {
    console.log(error);
    res.json({ status: 200, err: true, error });
  }
};

export const loadCom = async (req: Req, res: Res): Promise<any> => {
  try {
    const csvFilePath = path.join(__dirname, '../tmp/com.csv');
    const stream = fs.createReadStream(csvFilePath);
    const results: any = [];

    // truncate the table
    //await Companies.destroy({ where: {} });

    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', async () => {
        console.log('results');
        for (const result of results) {
          console.log(result.first_name);

          // populate the company table
          const company = await Companies.upsert({
            street_number: result.street_number,
            street_name: result.street_name,
            unit_number: result.unit_number,
            price_current: result.price_current,
            price_current_rent: result.price_current_rent,
            subdivision: result.subdivision,
            region: result.region,
            district: result.district,
            map_area: result.map_area,
            property_name: result.property_name,
            commercial_type: result.commercial_type,
            business_type: result.business_type,
            sqft_total: result.sqft_total,
            lot_sqft: result.lot_sqft,
            lot_width_front: result.lot_width_front,
            lot_width_back: result.lot_width_back,
            lot_shape: result.lot_shape,
            closed_area: result.closed_area,
            open_area: result.open_area,
            units_in_building: result.units_in_building,
            number_of_storeys: result.number_of_storeys,
            postal_code: result.postal_code,
            water: result.water,
            year_built: result.year_built,
            construction: result.construction,
            possession: result.possession,
            title: result.title,
            zoning: result.zoning,
            remarks: result.remarks,
            remarks_es: result.remarks_es,
            interior_features: result.interior_features,
            exterior_features: result.exterior_features,
            other_services: result.other_services,
            listing_office_id: result.listing_office_id,
            colisting_office_id: result.colisting_office_id,
            listing_agent_id: result.listing_agent_id,
            colisting_agent_id: result.colisting_agent_id,
            business_name: result.business_name,
            date_listed: result.date_listed,
            status: result.status,
            unique_id: result.unique_id,
            date_expired: result.date_expired,
            directions: result.directions,
            directions_es: result.directions_es,
            web_title: result.web_title,
            web_title_es: result.web_title_es,
            flooring: result.flooring,
            roof: result.roof,
            cooling: result.cooling,
            remodelled: result.remodelled,
            access: result.access,
            parking_spaces: result.parking_spaces,
            parking_level: result.parking_level,
            parking_types: result.parking_types,
            monthly_assessment: result.monthly_assessment,
            assessment_includes: result.assessment_includes,
            offices_x_floors: result.offices_x_floors,
            number_of_buildings: result.number_of_buildings,
            listing_photo_count: result.listing_photo_count,
            building_name: result.building_name,
            latitude: result.latitude,
            longitude: result.longitude,
            units_per_floor: result.units_per_floor,
            style: result.style,
            crea_display_address: result.crea_display_address,
            agent_information: result.agent_information,
          });
          console.log(`Company ${company.id} created`);
        }
        res.json({ status: 200, err: false, msg: 'agent list updated' });
      });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};

export const loadLinks = async (req: Req, res: Res): Promise<any> => {
  try {
    const csvFilePath = path.join(__dirname, '../tmp/link.csv');
    const stream = fs.createReadStream(csvFilePath);
    const results: any = [];

    // truncate the table
    //await Links.destroy({ where: {} });

    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', async () => {
        console.log('results');
        for (const result of results) {
          console.log(result.first_name);

          // populate the company table
          const link = await Links.upsert({
            link_id: result.link_id,
            listing_id: result.listing_id,
            link_type: result.link_type,
            link_title: result.link_title,
            link_url: result.link_url,
          });
          console.log(`Link ${link.id} created`);
        }
        res.json({ status: 200, err: false, msg: 'link list updated' });
      });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};

export const loadListings = async (req: Req, res: Res): Promise<any> => {
  try {
    const csvFilePath = path.join(__dirname, '../tmp/res.csv');
    const stream = fs.createReadStream(csvFilePath);
    const results: any = [];

    // truncate the table
    // await Listings.destroy({ where: {} });

    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', async () => {
        console.log('results');
        for (const result of results) {
          console.log(result.first_name);

          // populate the company table
          const listing = await Listings.upsert({
            id: result.id,
            street_number: result.street_number,
            street_name: result.street_name,
            unit_number: result.unit_number,
            price_current: result.price_current,
            price_current_rent: result.price_current_rent,
            subdivision: result.subdivision,
            region: result.region,
            district: result.district,
            map_area: result.map_area,
            property_type: result.property_type,
            year_built: result.year_built,
            bedrooms: result.bedrooms,
            bathrooms: result.bathrooms,
            half_bathrooms: result.half_bathrooms,
            number_of_rooms: result.number_of_rooms,
            lot_sqft: result.lot_sqft,
            sqft_total: result.sqft_total,
            closed_area: result.closed_area,
            open_area: result.open_area,
            lot_width_front: result.lot_width_front,
            lot_width_back: result.lot_width_back,
            style: result.style,
            remodelled: result.remodelled,
            possession: result.possession,
            zoning: result.zoning,
            remarks: result.remarks,
            remarks_es: result.remarks_es,
            listing_office_id: result.listing_office_id,
            colisting_office_id: result.colisting_office_id,
            listing_agent_id: result.listing_agent_id,
            colisting_agent_id: result.colisting_agent_id,
            listing_agent_phone: result.listing_agent_phone,
            unique_id: result.unique_id,
            rooms: result.rooms,
            date_listed: result.date_listed,
            postal_code: result.postal_code,
            status: result.status,
            tax_year: result.tax_year,
            title: result.title,
            monthly_assessment: result.monthly_assessment,
            assessment_includes: result.assessment_includes,
            date_expired: result.date_expired,
            lot_features: result.lot_features,
            interior_features: result.interior_features,
            exterior_features: result.exterior_features,
            other_services: result.other_services,
            lot_shape: result.lot_shape,
            modification_date: result.modification_date,
            directions: result.directions,
            directions_es: result.directions_es,
            web_title: result.web_title,
            web_title_es: result.web_title_es,
            access: result.access,
            roof: result.roof,
            cooling: result.cooling,
            flooring: result.flooring,
            water: result.water,
            construction: result.construction,
            parking_spaces: result.parking_spaces,
            parking_level: result.parking_level,
            parking_types: result.parking_types,
            internal_features: result.internal_features,
            shared_amenities: result.shared_amenities,
            listing_photo_count: result.listing_photo_count,
            building_name: result.building_name,
            longitude: result.longitude,
            latitude: result.latitude,
            units_per_floor: result.units_per_floor,
            crea_display_address: result.crea_display_address,
            property_name: result.property_name,
            floors_in_building: result.floors_in_building,
            number_of_buildings: result.number_of_buildings,
            model_suite_number: result.model_suite_number,
          });
        }
        res.json({ status: 200, err: false, msg: 'listing list updated' });
      });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};

export const loadOffices = async (req: Req, res: Res): Promise<any> => {
  try {
    const csvFilePath = path.join(__dirname, '../tmp/ofc.csv');
    const stream = fs.createReadStream(csvFilePath);
    const results: any = [];

    // truncate the table
    // await Offices.destroy({ where: {} });

    stream
      .pipe(csv())
      .on('data', (data: any) => results.push(data))
      .on('end', async () => {
        console.log('results');
        for (const result of results) {
          console.log(result.first_name);

          // populate the company table
          const office = await Offices.upsert({
            name: result.name,
            address_line_1: result.address_line_1,
            license_number: result.license_number,
            phone: result.phone,
            phone_2: result.phone_2,
            toll_free: result.toll_free,
            fax: result.fax,
            email: result.email,
            url: result.url,
          });
          console.log(`Office ${office.id} created`);
        }
        res.json({ status: 200, err: false, msg: 'office list updated' });
      });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};
