import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {City, CityRelations} from '../models';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {
  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource,
  ) {
    super(City, dataSource);
  }
}
