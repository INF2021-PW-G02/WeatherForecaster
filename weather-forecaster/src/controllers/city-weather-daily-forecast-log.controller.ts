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
  WeatherDailyForecastLog,
} from '../models';
import {CityRepository} from '../repositories';

export class CityWeatherDailyForecastLogController {
  constructor(
    @repository(CityRepository) protected cityRepository: CityRepository,
  ) { }

  @get('/cities/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'Array of City has many WeatherDailyForecastLog',
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
    return this.cityRepository.weatherDailyForecastLogs(id).find(filter);
  }

  @post('/cities/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: getModelSchemaRef(WeatherDailyForecastLog)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof City.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WeatherDailyForecastLog, {
            title: 'NewWeatherDailyForecastLogInCity',
            exclude: ['id'],
            optional: ['city_id']
          }),
        },
      },
    }) weatherDailyForecastLog: Omit<WeatherDailyForecastLog, 'id'>,
  ): Promise<WeatherDailyForecastLog> {
    return this.cityRepository.weatherDailyForecastLogs(id).create(weatherDailyForecastLog);
  }

  @patch('/cities/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'City.WeatherDailyForecastLog PATCH success count',
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
    return this.cityRepository.weatherDailyForecastLogs(id).patch(weatherDailyForecastLog, where);
  }

  @del('/cities/{id}/weather-daily-forecast-logs', {
    responses: {
      '200': {
        description: 'City.WeatherDailyForecastLog DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(WeatherDailyForecastLog)) where?: Where<WeatherDailyForecastLog>,
  ): Promise<Count> {
    return this.cityRepository.weatherDailyForecastLogs(id).delete(where);
  }
}
