import {Entity, model, property, hasMany} from '@loopback/repository';
import {City} from './city.model';

@model()
export class Country extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  country_name: string;

  @hasMany(() => City, {keyTo: 'country_id'})
  cities: City[];

  constructor(data?: Partial<Country>) {
    super(data);
  }
}

export interface CountryRelations {
  // describe navigational properties here
}

export type CountryWithRelations = Country & CountryRelations;
