import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<WeatherStatus>) {
    super(data);
  }
}

export interface WeatherStatusRelations {
  // describe navigational properties here
}

export type WeatherStatusWithRelations = WeatherStatus & WeatherStatusRelations;
