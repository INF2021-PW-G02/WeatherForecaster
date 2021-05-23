import {Entity, model, property} from '@loopback/repository';

@model()
export class WeatherHourlyForecastLog extends Entity {
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
  start_timestamp: string;

  @property({
    type: 'date',
    required: true,
  })
  end_timestamp: string;

  @property({
    type: 'number',
    required: true,
  })
  temperature: number;

  @property({
    type: 'number',
    required: true,
  })
  humidity: number;

  @property({
    type: 'number',
    required: true,
  })
  wind_speed: number;

  @property({
    type: 'string',
    required: true,
  })
  wind_direction: string;

  @property({
    type: 'number',
  })
  pressure?: number;

  @property({
    type: 'number',
  })
  visibility?: number;

  @property({
    type: 'number',
  })
  weatherInstitute_id?: number;

  constructor(data?: Partial<WeatherHourlyForecastLog>) {
    super(data);
  }
}

export interface WeatherHourlyForecastLogRelations {
  // describe navigational properties here
}

export type WeatherHourlyForecastLogWithRelations = WeatherHourlyForecastLog & WeatherHourlyForecastLogRelations;
