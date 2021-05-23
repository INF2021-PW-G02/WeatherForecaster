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
import {WeatherHourlyForecastLog} from '../models';
import {WeatherHourlyForecastLogRepository} from '../repositories';

export class WeatherHourlyForecastLogController {
  constructor(
    @repository(WeatherHourlyForecastLogRepository)
    public weatherHourlyForecastLogRepository : WeatherHourlyForecastLogRepository,
  ) {}

  @post('/weather-hourly-forecast-logs')
  @response(200, {
    description: 'WeatherHourlyForecastLog model instance',
    content: {'application/json': {schema: getModelSchemaRef(WeatherHourlyForecastLog)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {
            title: 'NewWeatherHourlyForecastLog',
            
          }),
        },
      },
    })
    weatherHourlyForecastLog: WeatherHourlyForecastLog,
  ): Promise<WeatherHourlyForecastLog> {
    return this.weatherHourlyForecastLogRepository.create(weatherHourlyForecastLog);
  }

  @get('/weather-hourly-forecast-logs/count')
  @response(200, {
    description: 'WeatherHourlyForecastLog model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WeatherHourlyForecastLog) where?: Where<WeatherHourlyForecastLog>,
  ): Promise<Count> {
    return this.weatherHourlyForecastLogRepository.count(where);
  }

  @get('/weather-hourly-forecast-logs')
  @response(200, {
    description: 'Array of WeatherHourlyForecastLog model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WeatherHourlyForecastLog, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WeatherHourlyForecastLog) filter?: Filter<WeatherHourlyForecastLog>,
  ): Promise<WeatherHourlyForecastLog[]> {
    return this.weatherHourlyForecastLogRepository.find(filter);
  }

  @patch('/weather-hourly-forecast-logs')
  @response(200, {
    description: 'WeatherHourlyForecastLog PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {partial: true}),
        },
      },
    })
    weatherHourlyForecastLog: WeatherHourlyForecastLog,
    @param.where(WeatherHourlyForecastLog) where?: Where<WeatherHourlyForecastLog>,
  ): Promise<Count> {
    return this.weatherHourlyForecastLogRepository.updateAll(weatherHourlyForecastLog, where);
  }

  @get('/weather-hourly-forecast-logs/{id}')
  @response(200, {
    description: 'WeatherHourlyForecastLog model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WeatherHourlyForecastLog, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WeatherHourlyForecastLog, {exclude: 'where'}) filter?: FilterExcludingWhere<WeatherHourlyForecastLog>
  ): Promise<WeatherHourlyForecastLog> {
    return this.weatherHourlyForecastLogRepository.findById(id, filter);
  }

  @patch('/weather-hourly-forecast-logs/{id}')
  @response(204, {
    description: 'WeatherHourlyForecastLog PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {partial: true}),
        },
      },
    })
    weatherHourlyForecastLog: WeatherHourlyForecastLog,
  ): Promise<void> {
    await this.weatherHourlyForecastLogRepository.updateById(id, weatherHourlyForecastLog);
  }

  @put('/weather-hourly-forecast-logs/{id}')
  @response(204, {
    description: 'WeatherHourlyForecastLog PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() weatherHourlyForecastLog: WeatherHourlyForecastLog,
  ): Promise<void> {
    await this.weatherHourlyForecastLogRepository.replaceById(id, weatherHourlyForecastLog);
  }

  @del('/weather-hourly-forecast-logs/{id}')
  @response(204, {
    description: 'WeatherHourlyForecastLog DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.weatherHourlyForecastLogRepository.deleteById(id);
  }
}
