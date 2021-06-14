import {
    List, Datagrid, TextField, NumberField, ReferenceField,
    Edit, EditButton, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput,
    Filter
}
    from "react-admin";

const PostTitle = ({ record }) =>
    <span>City of {record ? `${record.city_name}` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="city_name" alwaysOn />
</Filter>

export const CityList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="city_name" />
            <TextField source="city_longitude" />
            <TextField source="city_latitude" />
            <ReferenceField source="country_id" reference="countries"><NumberField source="id" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const CityEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="city_name" />
            <TextInput source="city_longitude" />
            <TextInput source="city_latitude" />
            <ReferenceInput source="country_id" reference="countries"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);