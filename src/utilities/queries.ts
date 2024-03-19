import { Agents } from '../database/models/agents';
import { Companies } from '../database/models/companies';
import { Links } from '../database/models/links';
import { Listings } from '../database/models/listings';
import { Offices } from '../database/models/offices';

export function getModelForTable(table: string) {
  switch (table.toLowerCase()) {
    case 'agents':
      return Agents;
    case 'companies':
      return Companies;
    case 'links':
      return Links;
    case 'listings':
      return Listings;
    case 'offices':
      return Offices;

    default:
      return null;
  }
}
