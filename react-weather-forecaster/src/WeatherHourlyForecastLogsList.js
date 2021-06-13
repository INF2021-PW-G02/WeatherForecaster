import { List, Datagrid, TextField, NumberField, DateField, ReferenceField } from "react-admin";


export const WeatherHourlyForecastLogsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <DateField source="start_timestamp" />
            <DateField source="end_timestamp" />
            <NumberField source="temperature" />
            <NumberField source="humidity" />
            <NumberField source="wind_speed" />
            <NumberField source="wind_direction" />
            <NumberField source="pressure" />
            <TextField source="visibility" />
            <ReferenceField source="weatherInstitute_id" reference="weather-institutes"><NumberField source="id" /></ReferenceField>
            <ReferenceField source="weatherStatus_id" reference="weather-statuses"><NumberField source="id" /></ReferenceField>
            <ReferenceField source="city_id" reference="cities"><NumberField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);