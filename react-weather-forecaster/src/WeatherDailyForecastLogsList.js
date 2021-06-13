import { List, Datagrid, TextField, NumberField, DateField, ReferenceField } from "react-admin";

export const WeatherDailyForecastLogsList = props => 
(
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <DateField source="calendar_date" />
            <NumberField source="min_temperature" />
            <NumberField source="max_temperature" />
            <NumberField source="avg_humidity" />
            <DateField source="sunrise_time" />
            <DateField source="sunset_time" />
            <ReferenceField source="city_id" reference="cities"><NumberField source="id" /></ReferenceField>
            <ReferenceField source="weatherInstitute_id" reference="weather-institutes"><NumberField source="id" /></ReferenceField>
            <ReferenceField source="weatherStatus_id" reference="weather-statuses"><NumberField source="id" /></ReferenceField>
        </Datagrid>
    </List>
)