import logo from './logo.svg';
import './App.css';
import {Admin, Resource, ListGuesser, List, EditGuesser} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { CountryList } from './CountriesList';
import { CityList } from './CitiesList';
import { WeatherInstituteList } from './WeatherInstitutesList';
import { WeatherStatusList } from './WeatherStatusesList';
import { WeatherDailyForecastLogsList } from './WeatherDailyForecastLogsList';
import { WeatherHourlyForecastLogsList } from './WeatherHourlyForecastLogsList';
import cityIcon from "@material-ui/icons/LocationCity";
import weatherIcon from "@material-ui/icons/WbSunny";
import globeIcon from "@material-ui/icons/Language";
import instituteIcom from "@material-ui/icons/HomeWork";
import logIcon from "@material-ui/icons/ListAlt";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider = {dataProvider}>
    <Resource name="countries" list={CountryList} icon={globeIcon}/>
    <Resource name="cities" list={CityList} icon={cityIcon}/>
    <Resource name="weather-institutes" list={WeatherInstituteList} icon={instituteIcom}/>
    <Resource name="weather-statuses" list={WeatherStatusList} edit={EditGuesser} icon={weatherIcon}/>
    <Resource name="weather-daily-forecast-logs" list={WeatherDailyForecastLogsList} icon={logIcon}/>
    <Resource name="weather-hourly-forecast-logs" list={WeatherHourlyForecastLogsList} icon={logIcon}/>
  </Admin>
);

export default App;
