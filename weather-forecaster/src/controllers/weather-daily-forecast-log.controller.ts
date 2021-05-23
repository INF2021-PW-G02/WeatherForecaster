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
import {WeatherDailyForecastLog} from '../models';
import {WeatherDailyForecastLogRepository} from '../repositories';

export class WeatherDailyForecastLogController {
  constructor(
    @repository(WeatherDailyForecastLogRepository)
    public weatherDailyForecastLogRepository : WeatherDailyForecastLogRepository,
  ) {}

  @post('/weather-daily-forecast-logs')
  @response(200, {
    description: 'WeatherDailyForecastLog model instance',
    content: {'application/json': {schema: getModelSchemaRef(WeatherDailyForecastLog)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {
            title: 'NewWeatherDailyForecastLog',
            
          }),
        },
      },
    })
    weatherDailyForecastLog: WeatherDailyForecastLog,
  ): Promise<WeatherDailyForecastLog> {
    return this.weatherDailyForecastLogRepository.create(weatherDailyForecastLog);
  }

  @get('/weather-daily-forecast-logs/count')
  @response(200, {
    description: 'WeatherDailyForecastLog model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WeatherDailyForecastLog) where?: Where<WeatherDailyForecastLog>,
  ): Promise<Count> {
    return this.weatherDailyForecastLogRepository.count(where);
  }

  @get('/weather-daily-forecast-logs')
  @response(200, {
    description: 'Array of WeatherDailyForecastLog model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WeatherDailyForecastLog, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WeatherDailyForecastLog) filter?: Filter<WeatherDailyForecastLog>,
  ): Promise<WeatherDailyForecastLog[]> {
    return this.weatherDailyForecastLogRepository.find(filter);
  }

  @patch('/weather-daily-forecast-logs')
  @response(200, {
    description: 'WeatherDailyForecastLog PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {partial: true}),
        },
      },
    })
    weatherDailyForecastLog: WeatherDailyForecastLog,
    @param.where(WeatherDailyForecastLog) where?: Where<WeatherDailyForecastLog>,
  ): Promise<Count> {
    return this.weatherDailyForecastLogRepository.updateAll(weatherDailyForecastLog, where);
  }

  @get('/weather-daily-forecast-logs/{id}')
  @response(200, {
    description: 'WeatherDailyForecastLog model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WeatherDailyForecastLog, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WeatherDailyForecastLog, {exclude: 'where'}) filter?: FilterExcludingWhere<WeatherDailyForecastLog>
  ): Promise<WeatherDailyForecastLog> {
    return this.weatherDailyForecastLogRepository.findById(id, filter);
  }

  @patch('/weather-daily-forecast-logs/{id}')
  @response(204, {
    description: 'WeatherDailyForecastLog PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {partial: true}),
        },
      },
    })
    weatherDailyForecastLog: WeatherDailyForecastLog,
  ): Promise<void> {
    await this.weatherDailyForecastLogRepository.updateById(id, weatherDailyForecastLog);
  }

  @put('/weather-daily-forecast-logs/{id}')
  @response(204, {
    description: 'WeatherDailyForecastLog PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() weatherDailyForecastLog: WeatherDailyForecastLog,
  ): Promise<void> {
    await this.weatherDailyForecastLogRepository.replaceById(id, weatherDailyForecastLog);
  }

  @del('/weather-daily-forecast-logs/{id}')
  @response(204, {
    description: 'WeatherDailyForecastLog DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.weatherDailyForecastLogRepository.deleteById(id);
  }
}
