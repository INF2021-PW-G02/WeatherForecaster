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
  WeatherStatus,
  WeatherDailyForecastLog,
} from '../models';
import {WeatherStatusRepository} from '../repositories';

export class WeatherStatusWeatherDailyForecastLogController {
  constructor(
    @repository(WeatherStatusRepository) protected weatherStatusRepository: WeatherStatusRepository,
  ) { }

  @get('/weather-statuses/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'Array of WeatherStatus has many WeatherDailyForecastLog',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WeatherDailyForecastLog)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<WeatherDailyForecastLog>,
  ): Promise<WeatherDailyForecastLog[]> {
    return this.weatherStatusRepository.weatherDailyForecastLogs(id).find(filter);
  }

  @post('/weather-statuses/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherStatus model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherDailyForecastLog)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof WeatherStatus.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {
            title: 'NewWeatherDailyForecastLogInWeatherStatus',
            exclude: ['id'],
            optional: ['weatherStatus_id']
          }),
        },
      },
    }) weatherDailyForecastLog: Omit<WeatherDailyForecastLog, 'id'>,
  ): Promise<WeatherDailyForecastLog> {
    return this.weatherStatusRepository.weatherDailyForecastLogs(id).create(weatherDailyForecastLog);
  }

  @patch('/weather-statuses/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherStatus.WeatherDailyForecastLog PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {partial: true}),
        },
      },
    })
    weatherDailyForecastLog: Partial<WeatherDailyForecastLog>,
    @param.query.object('where', getWhereSchemaFor(WeatherDailyForecastLog)) where?: Where<WeatherDailyForecastLog>,
  ): Promise<Count> {
    return this.weatherStatusRepository.weatherDailyForecastLogs(id).patch(weatherDailyForecastLog, where);
  }

  @del('/weather-statuses/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherStatus.WeatherDailyForecastLog DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherDailyForecastLog)) where?: Where<WeatherDailyForecastLog>,
  ): Promise<Count> {
    return this.weatherStatusRepository.weatherDailyForecastLogs(id).delete(where);
  }
}
