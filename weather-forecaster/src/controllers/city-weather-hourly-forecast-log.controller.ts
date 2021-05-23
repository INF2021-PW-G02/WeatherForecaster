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
  WeatherHourlyForecastLog,
} from '../models';
import {CityRepository} from '../repositories';

export class CityWeatherHourlyForecastLogController {
  constructor(
    @repository(CityRepository) protected cityRepository: CityRepository,
  ) { }

  @get('/cities/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'Array of City has many WeatherHourlyForecastLog',
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
    return this.cityRepository.weatherHourlyForecastLogs(id).find(filter);
  }

  @post('/cities/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherHourlyForecastLog)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof City.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherHourlyForecastLog, {
            title: 'NewWeatherHourlyForecastLogInCity',
            exclude: ['id'],
            optional: ['city_id']
          }),
        },
      },
    }) weatherHourlyForecastLog: Omit<WeatherHourlyForecastLog, 'id'>,
  ): Promise<WeatherHourlyForecastLog> {
    return this.cityRepository.weatherHourlyForecastLogs(id).create(weatherHourlyForecastLog);
  }

  @patch('/cities/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'City.WeatherHourlyForecastLog PATCH success count',
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
    return this.cityRepository.weatherHourlyForecastLogs(id).patch(weatherHourlyForecastLog, where);
  }

  @del('/cities/{id}/weather-hourly-forecast-logs', {
    responses: {
      '200': {
        description: 'City.WeatherHourlyForecastLog DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherHourlyForecastLog)) where?: Where<WeatherHourlyForecastLog>,
  ): Promise<Count> {
    return this.cityRepository.weatherHourlyForecastLogs(id).delete(where);
  }
}
