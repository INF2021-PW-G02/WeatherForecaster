import { List, Datagrid, NumberField, DateField, ReferenceField,
        EditButton, Edit, SimpleForm, NumberInput, DateInput, ReferenceInput, SelectInput } 
        from "react-admin";

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
            <EditButton />
        </Datagrid>
    </List>
);

export const WeatherDailyForecastLogsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <DateInput source="calendar_date" />
            <NumberInput source="min_temperature" />
            <NumberInput source="max_temperature" />
            <NumberInput source="avg_humidity" />
            <DateInput source="sunrise_time" />
            <NumberInput source="sunset_time" />
            <ReferenceInput source="city_id" reference="cities"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="weatherInstitute_id" reference="weather-institutes"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="weatherStatus_id" reference="weather-statuses"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);