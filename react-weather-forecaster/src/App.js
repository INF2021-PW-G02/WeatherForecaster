import './App.css';
import {Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import dashboard from './dashboard';
import { CountryEdit, CountryList } from './CountriesList';
import { CityEdit, CityList } from './CitiesList';
import { WeatherInstituteEdit, WeatherInstituteList } from './WeatherInstitutesList';
import { WeatherStatusEdit, WeatherStatusList } from './WeatherStatusesList';
import { WeatherDailyForecastLogsEdit, WeatherDailyForecastLogsList } from './WeatherDailyForecastLogsList';
import { WeatherHourlyForecastLogsEdit, WeatherHourlyForecastLogsList } from './WeatherHourlyForecastLogsList';
import cityIcon from "@material-ui/icons/LocationCity";
import weatherIcon from "@material-ui/icons/WbSunny";
import globeIcon from "@material-ui/icons/Language";
import instituteIcom from "@material-ui/icons/HomeWork";
import logIcon from "@material-ui/icons/ListAlt";
import { theme } from './theme';

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin theme={theme} dashboard={dashboard} dataProvider = {dataProvider}>
    <Resource name="countries" list={CountryList} edit={CountryEdit} icon={globeIcon}/>
    <Resource name="cities" list={CityList} edit={CityEdit} icon={cityIcon}/>
    <Resource name="weather-institutes" list={WeatherInstituteList} edit={WeatherInstituteEdit} icon={instituteIcom}/>
    <Resource name="weather-statuses" list={WeatherStatusList} edit={WeatherStatusEdit} icon={weatherIcon}/>
    <Resource name="weather-daily-forecast-logs" list={WeatherDailyForecastLogsList} edit={WeatherDailyForecastLogsEdit} icon={logIcon}/>
    <Resource name="weather-hourly-forecast-logs" list={WeatherHourlyForecastLogsList} edit={WeatherHourlyForecastLogsEdit} icon={logIcon}/>
  </Admin>
);

export default App;
