import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MasterKeyWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  value?: StringNullableFilter;
};
