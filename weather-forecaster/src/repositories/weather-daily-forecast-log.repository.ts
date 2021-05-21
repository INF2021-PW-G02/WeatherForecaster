import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {WeatherDailyForecastLog, WeatherDailyForecastLogRelations} from '../models';

export class WeatherDailyForecastLogRepository extends DefaultCrudRepository<
  WeatherDailyForecastLog,
  typeof WeatherDailyForecastLog.prototype.id,
  WeatherDailyForecastLogRelations
> {
  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource,
  ) {
    super(WeatherDailyForecastLog, dataSource);
  }
}
