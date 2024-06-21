import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VAULT_TITLE_FIELD } from "../vault/VaultTitle";

export const PasswordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Passwords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="label" source="label" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
        <ReferenceField label="vault" source="vault.id" reference="Vault">
          <TextField source={VAULT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
