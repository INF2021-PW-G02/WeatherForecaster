import {Entity, model, property, hasMany} from '@loopback/repository';
import {WeatherInstitute} from './weather-institute.model';
import {WeatherDailyForecastLog} from './weather-daily-forecast-log.model';

@model()
export class City extends Entity {
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
  city_name: string;

  @property({
    type: 'string',
    required: true,
  })
  city_longitude: string;

  @property({
    type: 'string',
    required: true,
  })
  city_latitude: string;

  @property({
    type: 'number',
  })
  country_id?: number;

  @hasMany(() => WeatherInstitute, {keyTo: 'city_id'})
  weatherInstitutes: WeatherInstitute[];

  @hasMany(() => WeatherDailyForecastLog, {keyTo: 'city_id'})
  weatherDailyForecastLogs: WeatherDailyForecastLog[];

  constructor(data?: Partial<City>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = City & CityRelations;
