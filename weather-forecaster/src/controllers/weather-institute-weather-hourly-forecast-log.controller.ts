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
  WeatherHourlyForecastLog,
} from '../models';
import {WeatherInstituteRepository} from '../repositories';

export class WeatherInstituteWeatherHourlyForecastLogController {
  constructor(
    @repository(WeatherInstituteRepository) protected weatherInstituteRepository: WeatherInstituteRepository,
  ) { }

  @get('/weather-institutes/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'Array of WeatherInstitute has many WeatherHourlyForecastLog',
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
    return this.weatherInstituteRepository.weatherHourlyForecastLogs(id).find(filter);
  }

  @post('/weather-institutes/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherInstitute model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherHourlyForecastLog)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof WeatherInstitute.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {
            title: 'NewWeatherHourlyForecastLogInWeatherInstitute',
            exclude: ['id'],
            optional: ['weatherInstitute_id']
          }),
        },
      },
    }) weatherHourlyForecastLog: Omit<WeatherHourlyForecastLog, 'id'>,
  ): Promise<WeatherHourlyForecastLog> {
    return this.weatherInstituteRepository.weatherHourlyForecastLogs(id).create(weatherHourlyForecastLog);
  }

  @patch('/weather-institutes/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherInstitute.WeatherHourlyForecastLog PATCH success count',
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
    return this.weatherInstituteRepository.weatherHourlyForecastLogs(id).patch(weatherHourlyForecastLog, where);
  }

  @del('/weather-institutes/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'WeatherInstitute.WeatherHourlyForecastLog DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherHourlyForecastLog)) where?: Where<WeatherHourlyForecastLog>,
  ): Promise<Count> {
    return this.weatherInstituteRepository.weatherHourlyForecastLogs(id).delete(where);
  }
}
