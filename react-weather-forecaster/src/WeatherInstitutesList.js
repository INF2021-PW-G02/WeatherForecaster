import { List, Datagrid, TextField, NumberField, DateField, ReferenceField} from "react-admin";

export const WeatherInstituteList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <ReferenceField source="city_id" reference="cities"><NumberField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);