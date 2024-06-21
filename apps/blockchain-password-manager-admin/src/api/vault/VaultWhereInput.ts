import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PasswordListRelationFilter } from "../password/PasswordListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VaultWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  ownedBy?: StringNullableFilter;
  passwords?: PasswordListRelationFilter;
  user?: UserWhereUniqueInput;
};
