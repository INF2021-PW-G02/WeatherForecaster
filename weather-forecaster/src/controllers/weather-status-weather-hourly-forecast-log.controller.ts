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
  WeatherHourlyForecastLog,
} from '../models';
import {WeatherStatusRepository} from '../repositories';

export class WeatherStatusWeatherHourlyForecastLogController {
  constructor(
    @repository(WeatherStatusRepository) protected weatherStatusRepository: WeatherStatusRepository,
  ) { }

  @get('/weather-statuses/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'Array of WeatherStatus has many WeatherHourlyForecastLog',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WeatherHourlyForecastLog)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<WeatherHourlyForecastLog>,
  ): Promise<WeatherHourlyForecastLog[]> {
    return this.weatherStatusRepository.weatherHourlyForecastLogs(id).find(filter);
  }

  @post('/weather-statuses/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherStatus model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherHourlyForecastLog)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof WeatherStatus.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {
            title: 'NewWeatherHourlyForecastLogInWeatherStatus',
            exclude: ['id'],
            optional: ['weatherStatus_id']
          }),
        },
      },
    }) weatherHourlyForecastLog: Omit<WeatherHourlyForecastLog, 'id'>,
  ): Promise<WeatherHourlyForecastLog> {
    return this.weatherStatusRepository.weatherHourlyForecastLogs(id).create(weatherHourlyForecastLog);
  }

  @patch('/weather-statuses/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherStatus.WeatherHourlyForecastLog PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {partial: true}),
        },
      },
    })
    weatherHourlyForecastLog: Partial<WeatherHourlyForecastLog>,
    @param.query.object('where', getWhereSchemaFor(WeatherHourlyForecastLog)) where?: Where<WeatherHourlyForecastLog>,
  ): Promise<Count> {
    return this.weatherStatusRepository.weatherHourlyForecastLogs(id).patch(weatherHourlyForecastLog, where);
  }

  @del('/weather-statuses/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherStatus.WeatherHourlyForecastLog DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherHourlyForecastLog)) where?: Where<WeatherHourlyForecastLog>,
  ): Promise<Count> {
    return this.weatherStatusRepository.weatherHourlyForecastLogs(id).delete(where);
  }
}
