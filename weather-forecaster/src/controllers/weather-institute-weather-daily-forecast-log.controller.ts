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
  WeatherInstitute,
  WeatherDailyForecastLog,
} from '../models';
import {WeatherInstituteRepository} from '../repositories';

export class WeatherInstituteWeatherDailyForecastLogController {
  constructor(
    @repository(WeatherInstituteRepository) protected weatherInstituteRepository: WeatherInstituteRepository,
  ) { }

  @get('/weather-institutes/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'Array of WeatherInstitute has many WeatherDailyForecastLog',
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
    return this.weatherInstituteRepository.weatherDailyForecastLogs(id).find(filter);
  }

  @post('/weather-institutes/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherInstitute model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherDailyForecastLog)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof WeatherInstitute.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {
            title: 'NewWeatherDailyForecastLogInWeatherInstitute',
            exclude: ['id'],
            optional: ['weatherInstitute_id']
          }),
        },
      },
    }) weatherDailyForecastLog: Omit<WeatherDailyForecastLog, 'id'>,
  ): Promise<WeatherDailyForecastLog> {
    return this.weatherInstituteRepository.weatherDailyForecastLogs(id).create(weatherDailyForecastLog);
  }

  @patch('/weather-institutes/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherInstitute.WeatherDailyForecastLog PATCH success count',
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
    return this.weatherInstituteRepository.weatherDailyForecastLogs(id).patch(weatherDailyForecastLog, where);
  }

  @del('/weather-institutes/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherInstitute.WeatherDailyForecastLog DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherDailyForecastLog)) where?: Where<WeatherDailyForecastLog>,
  ): Promise<Count> {
    return this.weatherInstituteRepository.weatherDailyForecastLogs(id).delete(where);
  }
}
