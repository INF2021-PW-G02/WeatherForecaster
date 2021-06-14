import { List,Edit,SimpleForm, Datagrid, NumberField, EditButton, ImageField, ImageInput, TextInput } from "react-admin";

export const WeatherStatusList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ImageField source="weather_status" />
            <EditButton />
        </Datagrid>
    </List>
);

export const WeatherStatusEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ImageInput source="weather_status" />
        </SimpleForm>
    </Edit>);