import { List, Datagrid, TextField, NumberField, DateField, ReferenceField, EditButton} from "react-admin";

export const WeatherStatusList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="weather_status" />
            <EditButton/>
        </Datagrid>
    </List>
);