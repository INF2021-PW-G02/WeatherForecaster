import {Entity, model, property, hasMany} from '@loopback/repository';
import {WeatherDailyForecastLog} from './weather-daily-forecast-log.model';
import {WeatherHourlyForecastLog} from './weather-hourly-forecast-log.model';

@model()
export class WeatherStatus extends Entity {
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
  weather_status: string;

  @property({
    type: 'string',
    required: true,
  })
  weather_type: string;

  @hasMany(() => WeatherDailyForecastLog, {keyTo: 'weatherStatus_id'})
  weatherDailyForecastLogs: WeatherDailyForecastLog[];

  @hasMany(() => WeatherHourlyForecastLog, {keyTo: 'weatherStatus_id'})
  weatherHourlyForecastLogs: WeatherHourlyForecastLog[];

  constructor(data?: Partial<WeatherStatus>) {
    super(data);
  }
}

export interface WeatherStatusRelations {
  // describe navigational properties here
}

export type WeatherStatusWithRelations = WeatherStatus & WeatherStatusRelations;
