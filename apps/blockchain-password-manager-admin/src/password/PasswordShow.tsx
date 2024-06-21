import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VAULT_TITLE_FIELD } from "../vault/VaultTitle";

export const PasswordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="label" source="label" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
        <ReferenceField label="vault" source="vault.id" reference="Vault">
          <TextField source={VAULT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
