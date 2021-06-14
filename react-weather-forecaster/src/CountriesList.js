import {
    List, Datagrid, TextField, NumberField,
    EditButton, Edit, SimpleForm, TextInput, NumberInput,
    Filter
}
    from "react-admin";

const PostTitle = ({ record }) =>
    <span>Country of {record ? `${record.country_name}` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="country_name" alwaysOn />
</Filter>

export const CountryList = props => (
    <List filter={PostFilter} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="country_name" />
            <EditButton />
        </Datagrid>
    </List>
);
export const CountryEdit = props => (
    <Edit title={PostTitle} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="country_name" />
        </SimpleForm>
    </Edit>
);