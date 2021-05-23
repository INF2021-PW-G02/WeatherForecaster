import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {WeatherStatus} from '../models';
import {WeatherStatusRepository} from '../repositories';

export class WeatherStatusController {
  constructor(
    @repository(WeatherStatusRepository)
    public weatherStatusRepository : WeatherStatusRepository,
  ) {}

  @post('/weather-statuses')
  @response(200, {
    description: 'WeatherStatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(WeatherStatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherStatus, {
            title: 'NewWeatherStatus',
            
          }),
        },
      },
    })
    weatherStatus: WeatherStatus,
  ): Promise<WeatherStatus> {
    return this.weatherStatusRepository.create(weatherStatus);
  }

  @get('/weather-statuses/count')
  @response(200, {
    description: 'WeatherStatus model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WeatherStatus) where?: Where<WeatherStatus>,
  ): Promise<Count> {
    return this.weatherStatusRepository.count(where);
  }

  @get('/weather-statuses')
  @response(200, {
    description: 'Array of WeatherStatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WeatherStatus, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WeatherStatus) filter?: Filter<WeatherStatus>,
  ): Promise<WeatherStatus[]> {
    return this.weatherStatusRepository.find(filter);
  }

  @patch('/weather-statuses')
  @response(200, {
    description: 'WeatherStatus PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherStatus, {partial: true}),
        },
      },
    })
    weatherStatus: WeatherStatus,
    @param.where(WeatherStatus) where?: Where<WeatherStatus>,
  ): Promise<Count> {
    return this.weatherStatusRepository.updateAll(weatherStatus, where);
  }

  @get('/weather-statuses/{id}')
  @response(200, {
    description: 'WeatherStatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WeatherStatus, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WeatherStatus, {exclude: 'where'}) filter?: FilterExcludingWhere<WeatherStatus>
  ): Promise<WeatherStatus> {
    return this.weatherStatusRepository.findById(id, filter);
  }

  @patch('/weather-statuses/{id}')
  @response(204, {
    description: 'WeatherStatus PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherStatus, {partial: true}),
        },
      },
    })
    weatherStatus: WeatherStatus,
  ): Promise<void> {
    await this.weatherStatusRepository.updateById(id, weatherStatus);
  }

  @put('/weather-statuses/{id}')
  @response(204, {
    description: 'WeatherStatus PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() weatherStatus: WeatherStatus,
  ): Promise<void> {
    await this.weatherStatusRepository.replaceById(id, weatherStatus);
  }

  @del('/weather-statuses/{id}')
  @response(204, {
    description: 'WeatherStatus DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.weatherStatusRepository.deleteById(id);
  }
}
