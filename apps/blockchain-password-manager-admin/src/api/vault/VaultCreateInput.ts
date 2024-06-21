import { PasswordCreateNestedManyWithoutVaultsInput } from "./PasswordCreateNestedManyWithoutVaultsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VaultCreateInput = {
  name?: string | null;
  ownedBy?: string | null;
  passwords?: PasswordCreateNestedManyWithoutVaultsInput;
  user?: UserWhereUniqueInput | null;
};
