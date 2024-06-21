import { VaultWhereUniqueInput } from "../vault/VaultWhereUniqueInput";

export type PasswordUpdateInput = {
  label?: string | null;
  value?: string | null;
  vault?: VaultWhereUniqueInput | null;
};
