import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MasterKeyUpdateInput = {
  createdBy?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: string | null;
};
