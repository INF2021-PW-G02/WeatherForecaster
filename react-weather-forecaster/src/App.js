import logo from './logo.svg';
import './App.css';
import {Admin, Resource, ListGuesser, List} from "react-admin";
import lb4Provider from "react-admin-lb4";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider = {dataProvider}>
    <Resource name="countries" list={ListGuesser}/>
    <Resource name="cities" list={ListGuesser}/>
    <Resource name="weather-institutes" list={ListGuesser}/>
    <Resource name="weather-statuses" list={ListGuesser}/>
  </Admin>
);

export default App;
