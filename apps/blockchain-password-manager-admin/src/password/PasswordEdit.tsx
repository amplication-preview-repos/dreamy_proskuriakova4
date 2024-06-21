import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VaultTitle } from "../vault/VaultTitle";

export const PasswordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="label" source="label" />
        <TextInput label="value" source="value" />
        <ReferenceInput source="vault.id" reference="Vault" label="vault">
          <SelectInput optionText={VaultTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
