import { PasswordUpdateManyWithoutVaultsInput } from "./PasswordUpdateManyWithoutVaultsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VaultUpdateInput = {
  name?: string | null;
  ownedBy?: string | null;
  passwords?: PasswordUpdateManyWithoutVaultsInput;
  user?: UserWhereUniqueInput | null;
};
