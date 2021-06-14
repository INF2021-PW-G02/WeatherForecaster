import { List, Datagrid, TextField, NumberField, 
        EditButton, Edit, SimpleForm, TextInput, NumberInput} 
        from "react-admin";

export const CountryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="country_name" />
        <EditButton />
        </Datagrid>
    </List>
);
export const CountryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="country_name" />
        </SimpleForm>
    </Edit>
);