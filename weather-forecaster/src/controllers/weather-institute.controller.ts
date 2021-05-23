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
import {WeatherInstitute} from '../models';
import {WeatherInstituteRepository} from '../repositories';

export class WeatherInstituteController {
  constructor(
    @repository(WeatherInstituteRepository)
    public weatherInstituteRepository : WeatherInstituteRepository,
  ) {}

  @post('/weather-institutes')
  @response(200, {
    description: 'WeatherInstitute model instance',
    content: {'application/json': {schema: getModelSchemaRef(WeatherInstitute)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherInstitute, {
            title: 'NewWeatherInstitute',
            
          }),
        },
      },
    })
    weatherInstitute: WeatherInstitute,
  ): Promise<WeatherInstitute> {
    return this.weatherInstituteRepository.create(weatherInstitute);
  }

  @get('/weather-institutes/count')
  @response(200, {
    description: 'WeatherInstitute model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WeatherInstitute) where?: Where<WeatherInstitute>,
  ): Promise<Count> {
    return this.weatherInstituteRepository.count(where);
  }

  @get('/weather-institutes')
  @response(200, {
    description: 'Array of WeatherInstitute model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WeatherInstitute, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WeatherInstitute) filter?: Filter<WeatherInstitute>,
  ): Promise<WeatherInstitute[]> {
    return this.weatherInstituteRepository.find(filter);
  }

  @patch('/weather-institutes')
  @response(200, {
    description: 'WeatherInstitute PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherInstitute, {partial: true}),
        },
      },
    })
    weatherInstitute: WeatherInstitute,
    @param.where(WeatherInstitute) where?: Where<WeatherInstitute>,
  ): Promise<Count> {
    return this.weatherInstituteRepository.updateAll(weatherInstitute, where);
  }

  @get('/weather-institutes/{id}')
  @response(200, {
    description: 'WeatherInstitute model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WeatherInstitute, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WeatherInstitute, {exclude: 'where'}) filter?: FilterExcludingWhere<WeatherInstitute>
  ): Promise<WeatherInstitute> {
    return this.weatherInstituteRepository.findById(id, filter);
  }

  @patch('/weather-institutes/{id}')
  @response(204, {
    description: 'WeatherInstitute PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherInstitute, {partial: true}),
        },
      },
    })
    weatherInstitute: WeatherInstitute,
  ): Promise<void> {
    await this.weatherInstituteRepository.updateById(id, weatherInstitute);
  }

  @put('/weather-institutes/{id}')
  @response(204, {
    description: 'WeatherInstitute PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() weatherInstitute: WeatherInstitute,
  ): Promise<void> {
    await this.weatherInstituteRepository.replaceById(id, weatherInstitute);
  }

  @del('/weather-institutes/{id}')
  @response(204, {
    description: 'WeatherInstitute DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.weatherInstituteRepository.deleteById(id);
  }
}
