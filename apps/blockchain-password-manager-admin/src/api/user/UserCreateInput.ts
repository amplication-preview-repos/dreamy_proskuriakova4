import { MasterKeyCreateNestedManyWithoutUsersInput } from "./MasterKeyCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VaultCreateNestedManyWithoutUsersInput } from "./VaultCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  masterKeys?: MasterKeyCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
  vaults?: VaultCreateNestedManyWithoutUsersInput;
};
