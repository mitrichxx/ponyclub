import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isSuperAdmin" source="isSuperAdmin" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
