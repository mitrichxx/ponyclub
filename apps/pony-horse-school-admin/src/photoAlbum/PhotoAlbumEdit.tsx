import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PhotoAlbumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
