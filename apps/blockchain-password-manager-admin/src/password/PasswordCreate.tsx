import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VaultTitle } from "../vault/VaultTitle";

export const PasswordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="label" source="label" />
        <TextInput label="value" source="value" />
        <ReferenceInput source="vault.id" reference="Vault" label="vault">
          <SelectInput optionText={VaultTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
