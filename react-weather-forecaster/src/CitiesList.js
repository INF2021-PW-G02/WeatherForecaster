import { List, Datagrid, TextField, NumberField, DateField, ReferenceField} from "react-admin";

export const CityList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="city_name" />
            <TextField source="city_longitude" />
            <TextField source="city_latitude" />
            <ReferenceField source="country_id" reference="countries"><NumberField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);