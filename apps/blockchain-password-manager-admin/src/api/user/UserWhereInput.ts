import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MasterKeyListRelationFilter } from "../masterKey/MasterKeyListRelationFilter";
import { VaultListRelationFilter } from "../vault/VaultListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  masterKeys?: MasterKeyListRelationFilter;
  username?: StringFilter;
  vaults?: VaultListRelationFilter;
};
