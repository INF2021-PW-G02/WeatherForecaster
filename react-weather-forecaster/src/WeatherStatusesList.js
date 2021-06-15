import { List, Edit, SimpleForm, Datagrid, NumberField, EditButton, TextField, TextInput, Filter } from "react-admin";


const PostTitle = ({ record }) =>
    <span>City of {record ? `${record.weather_type}` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="weather_type" alwaysOn />
</Filter>


export const WeatherStatusList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="weather_status" />
            <TextField source="weather_type" />
            <EditButton />
        </Datagrid>
    </List>
);

export const WeatherStatusEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="weather_status" />
            <TextInput source="weather_type" />
        </SimpleForm>
    </Edit>);