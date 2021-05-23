import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  City,
  WeatherInstitute,
} from '../models';
import {CityRepository} from '../repositories';

export class CityWeatherInstituteController {
  constructor(
    @repository(CityRepository) protected cityRepository: CityRepository,
  ) { }

  @get('/cities/{id}/weather-institutes', {
    responses: {
      '200': {
        description: 'Array of City has many WeatherInstitute',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WeatherInstitute)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<WeatherInstitute>,
  ): Promise<WeatherInstitute[]> {
    return this.cityRepository.weatherInstitutes(id).find(filter);
  }

  @post('/cities/{id}/weather-institutes', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherInstitute)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof City.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherInstitute, {
            title: 'NewWeatherInstituteInCity',
            exclude: ['id'],
            optional: ['city_id']
          }),
        },
      },
    }) weatherInstitute: Omit<WeatherInstitute, 'id'>,
  ): Promise<WeatherInstitute> {
    return this.cityRepository.weatherInstitutes(id).create(weatherInstitute);
  }

  @patch('/cities/{id}/weather-institutes', {
    responses: {
      '200': {
        description: 'City.WeatherInstitute PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherInstitute, {partial: true}),
        },
      },
    })
    weatherInstitute: Partial<WeatherInstitute>,
    @param.query.object('where', getWhereSchemaFor(WeatherInstitute)) where?: Where<WeatherInstitute>,
  ): Promise<Count> {
    return this.cityRepository.weatherInstitutes(id).patch(weatherInstitute, where);
  }

  @del('/cities/{id}/weather-institutes', {
    responses: {
      '200': {
        description: 'City.WeatherInstitute DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherInstitute)) where?: Where<WeatherInstitute>,
  ): Promise<Count> {
    return this.cityRepository.weatherInstitutes(id).delete(where);
  }
}
