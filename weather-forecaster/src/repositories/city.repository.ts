import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {City, CityRelations, WeatherInstitute, WeatherDailyForecastLog} from '../models';
import {WeatherInstituteRepository} from './weather-institute.repository';
import {WeatherDailyForecastLogRepository} from './weather-daily-forecast-log.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly weatherInstitutes: HasManyRepositoryFactory<WeatherInstitute, typeof City.prototype.id>;

  public readonly weatherDailyForecastLogs: HasManyRepositoryFactory<WeatherDailyForecastLog, typeof City.prototype.id>;

  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource, @repository.getter('WeatherInstituteRepository') protected weatherInstituteRepositoryGetter: Getter<WeatherInstituteRepository>, @repository.getter('WeatherDailyForecastLogRepository') protected weatherDailyForecastLogRepositoryGetter: Getter<WeatherDailyForecastLogRepository>,
  ) {
    super(City, dataSource);
    this.weatherDailyForecastLogs = this.createHasManyRepositoryFactoryFor('weatherDailyForecastLogs', weatherDailyForecastLogRepositoryGetter,);
    this.registerInclusionResolver('weatherDailyForecastLogs', this.weatherDailyForecastLogs.inclusionResolver);
    this.weatherInstitutes = this.createHasManyRepositoryFactoryFor('weatherInstitutes', weatherInstituteRepositoryGetter,);
    this.registerInclusionResolver('weatherInstitutes', this.weatherInstitutes.inclusionResolver);
  }
}
