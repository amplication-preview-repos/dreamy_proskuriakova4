import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MasterKeyCreateInput = {
  createdBy?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: string | null;
};
