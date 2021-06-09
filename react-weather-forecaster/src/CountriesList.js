import { List, Datagrid, TextField, NumberField, DateField, ReferenceField} from "react-admin";

export const CountryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="country_name" />
        </Datagrid>
    </List>
);