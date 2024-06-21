import { MasterKeyUpdateManyWithoutUsersInput } from "./MasterKeyUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VaultUpdateManyWithoutUsersInput } from "./VaultUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  masterKeys?: MasterKeyUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  vaults?: VaultUpdateManyWithoutUsersInput;
};
