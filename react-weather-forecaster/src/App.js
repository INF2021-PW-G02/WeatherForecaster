import logo from './logo.svg';
import './App.css';
import {Admin, Resource, ListGuesser, List, EditGuesser} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { CountryList } from './CountriesList';
import { CityList } from './CitiesList';
import { WeatherInstituteList } from './WeatherInstitutesList';
import { WeatherStatusList } from './WeatherStatusesList';
import cityIcon from "@material-ui/icons/LocationCity";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider = {dataProvider}>
    <Resource name="countries" list={CountryList}/>
    <Resource name="cities" list={CityList} icon={cityIcon}/>
    <Resource name="weather-institutes" list={WeatherInstituteList}/>
    <Resource name="weather-statuses" list={WeatherStatusList} edit={EditGuesser}/>
  </Admin>
);

export default App;
