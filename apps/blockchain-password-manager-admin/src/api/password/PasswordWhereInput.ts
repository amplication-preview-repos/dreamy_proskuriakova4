import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VaultWhereUniqueInput } from "../vault/VaultWhereUniqueInput";

export type PasswordWhereInput = {
  id?: StringFilter;
  label?: StringNullableFilter;
  value?: StringNullableFilter;
  vault?: VaultWhereUniqueInput;
};
