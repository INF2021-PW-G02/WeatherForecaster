import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {WeatherStatus, WeatherStatusRelations} from '../models';

export class WeatherStatusRepository extends DefaultCrudRepository<
  WeatherStatus,
  typeof WeatherStatus.prototype.id,
  WeatherStatusRelations
> {
  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource,
  ) {
    super(WeatherStatus, dataSource);
  }
}
