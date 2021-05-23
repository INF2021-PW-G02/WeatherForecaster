import {Entity, model, property, hasMany} from '@loopback/repository';
import {WeatherDailyForecastLog} from './weather-daily-forecast-log.model';
import {WeatherHourlyForecastLog} from './weather-hourly-forecast-log.model';

@model()
export class WeatherInstitute extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
  })
  city_id?: number;

  @hasMany(() => WeatherDailyForecastLog, {keyTo: 'weatherInstitute_id'})
  weatherDailyForecastLogs: WeatherDailyForecastLog[];

  @hasMany(() => WeatherHourlyForecastLog, {keyTo: 'weatherInstitute_id'})
  weatherHourlyForecastLogs: WeatherHourlyForecastLog[];

  constructor(data?: Partial<WeatherInstitute>) {
    super(data);
  }
}

export interface WeatherInstituteRelations {
  // describe navigational properties here
}

export type WeatherInstituteWithRelations = WeatherInstitute & WeatherInstituteRelations;
