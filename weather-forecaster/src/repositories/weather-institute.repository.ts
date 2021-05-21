import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {WeatherInstitute, WeatherInstituteRelations} from '../models';

export class WeatherInstituteRepository extends DefaultCrudRepository<
  WeatherInstitute,
  typeof WeatherInstitute.prototype.id,
  WeatherInstituteRelations
> {
  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource,
  ) {
    super(WeatherInstitute, dataSource);
  }
}
