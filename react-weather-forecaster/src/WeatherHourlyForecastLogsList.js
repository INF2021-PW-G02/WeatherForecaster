import { List, Datagrid, NumberField, DateField, ReferenceField, TextField,
    EditButton, Edit, SimpleForm, NumberInput, DateInput, ReferenceInput, SelectInput, TextInput } 
    from "react-admin";



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
            <EditButton />
        </Datagrid>
    </List>
);


export const WeatherHourlyForecastLogsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="start_timestamp" />
            <DateInput source="end_timestamp" />
            <NumberInput source="temperature" />
            <NumberInput source="humidity" />
            <NumberInput source="wind_speed" />
            <TextInput source="wind_direction" />
            <TextInput source="pressure" />
            <TextInput source="visibility" />
            <ReferenceInput source="weatherInstitute_id" reference="weather-institutes"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="weatherStatus_id" reference="weather-statuses"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="city_id" reference="cities"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);