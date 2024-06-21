import { VaultWhereUniqueInput } from "../vault/VaultWhereUniqueInput";

export type PasswordCreateInput = {
  label?: string | null;
  value?: string | null;
  vault?: VaultWhereUniqueInput | null;
};
