import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {WeatherHourlyForecastLog, WeatherHourlyForecastLogRelations} from '../models';

export class WeatherHourlyForecastLogRepository extends DefaultCrudRepository<
  WeatherHourlyForecastLog,
  typeof WeatherHourlyForecastLog.prototype.id,
  WeatherHourlyForecastLogRelations
> {
  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource,
  ) {
    super(WeatherHourlyForecastLog, dataSource);
  }
}
