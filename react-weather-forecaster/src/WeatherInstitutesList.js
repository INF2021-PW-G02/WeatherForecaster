import { List, Datagrid, TextField, NumberField, ReferenceField,
        EditButton, Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput} 
    from "react-admin";

export const WeatherInstituteList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <ReferenceField source="city_id" reference="cities"><NumberField source="id" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const WeatherInstituteEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
            <ReferenceInput source="city_id" reference="cities"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);