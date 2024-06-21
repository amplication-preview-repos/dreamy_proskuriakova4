import { MasterKeyWhereUniqueInput } from "./MasterKeyWhereUniqueInput";
import { MasterKeyUpdateInput } from "./MasterKeyUpdateInput";

export type UpdateMasterKeyArgs = {
  where: MasterKeyWhereUniqueInput;
  data: MasterKeyUpdateInput;
};
