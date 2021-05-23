import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {City, CityRelations, WeatherInstitute} from '../models';
import {WeatherInstituteRepository} from './weather-institute.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly weatherInstitutes: HasManyRepositoryFactory<WeatherInstitute, typeof City.prototype.id>;

  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource, @repository.getter('WeatherInstituteRepository') protected weatherInstituteRepositoryGetter: Getter<WeatherInstituteRepository>,
  ) {
    super(City, dataSource);
    this.weatherInstitutes = this.createHasManyRepositoryFactoryFor('weatherInstitutes', weatherInstituteRepositoryGetter,);
    this.registerInclusionResolver('weatherInstitutes', this.weatherInstitutes.inclusionResolver);
  }
}
