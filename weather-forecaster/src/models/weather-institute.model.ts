import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<WeatherInstitute>) {
    super(data);
  }
}

export interface WeatherInstituteRelations {
  // describe navigational properties here
}

export type WeatherInstituteWithRelations = WeatherInstitute & WeatherInstituteRelations;
