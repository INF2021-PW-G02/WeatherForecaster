import {Entity, model, property} from '@loopback/repository';

@model()
export class WeatherDailyForecastLog extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
    required: true,
  })
  calendar_date: string;

  @property({
    type: 'number',
    required: true,
  })
  min_temperature: number;

  @property({
    type: 'number',
    required: true,
  })
  max_temperature: number;

  @property({
    type: 'number',
    required: true,
  })
  avg_humidity: number;

  @property({
    type: 'date',
  })
  sunrise_time?: string;

  @property({
    type: 'number',
  })
  sunset_time?: number;

  @property({
    type: 'number',
  })
  city_id?: number;

  @property({
    type: 'number',
  })
  weatherInstitute_id?: number;

  @property({
    type: 'number',
  })
  weatherStatus_id?: number;

  constructor(data?: Partial<WeatherDailyForecastLog>) {
    super(data);
  }
}

export interface WeatherDailyForecastLogRelations {
  // describe navigational properties here
}

export type WeatherDailyForecastLogWithRelations = WeatherDailyForecastLog & WeatherDailyForecastLogRelations;
