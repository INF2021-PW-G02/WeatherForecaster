import {
    List, Datagrid, TextField, NumberField, ReferenceField,
    EditButton, Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput
    , Filter
}
    from "react-admin";

const PostTitle = ({ record }) =>
    <span>City of {record ? `${record.name}` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
</Filter>

export const WeatherInstituteList = props => (
    <List filters={<PostFilter />} {...props}>
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
    <Edit title={<PostTitle />}{...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
            <ReferenceInput source="city_id" reference="cities"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);