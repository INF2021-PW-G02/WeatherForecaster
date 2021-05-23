import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {WeatherForecasterDbDataSource} from '../datasources';
import {WeatherInstitute, WeatherInstituteRelations, WeatherDailyForecastLog, WeatherHourlyForecastLog} from '../models';
import {WeatherDailyForecastLogRepository} from './weather-daily-forecast-log.repository';
import {WeatherHourlyForecastLogRepository} from './weather-hourly-forecast-log.repository';

export class WeatherInstituteRepository extends DefaultCrudRepository<
  WeatherInstitute,
  typeof WeatherInstitute.prototype.id,
  WeatherInstituteRelations
> {

  public readonly weatherDailyForecastLogs: HasManyRepositoryFactory<WeatherDailyForecastLog, typeof WeatherInstitute.prototype.id>;

  public readonly weatherHourlyForecastLogs: HasManyRepositoryFactory<WeatherHourlyForecastLog, typeof WeatherInstitute.prototype.id>;

  constructor(
    @inject('datasources.WeatherForecasterDB') dataSource: WeatherForecasterDbDataSource, @repository.getter('WeatherDailyForecastLogRepository') protected weatherDailyForecastLogRepositoryGetter: Getter<WeatherDailyForecastLogRepository>, @repository.getter('WeatherHourlyForecastLogRepository') protected weatherHourlyForecastLogRepositoryGetter: Getter<WeatherHourlyForecastLogRepository>,
  ) {
    super(WeatherInstitute, dataSource);
    this.weatherHourlyForecastLogs = this.createHasManyRepositoryFactoryFor('weatherHourlyForecastLogs', weatherHourlyForecastLogRepositoryGetter,);
    this.registerInclusionResolver('weatherHourlyForecastLogs', this.weatherHourlyForecastLogs.inclusionResolver);
    this.weatherDailyForecastLogs = this.createHasManyRepositoryFactoryFor('weatherDailyForecastLogs', weatherDailyForecastLogRepositoryGetter,);
    this.registerInclusionResolver('weatherDailyForecastLogs', this.weatherDailyForecastLogs.inclusionResolver);
  }
}
