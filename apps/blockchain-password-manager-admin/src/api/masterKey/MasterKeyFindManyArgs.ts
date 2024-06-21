import { MasterKeyWhereInput } from "./MasterKeyWhereInput";
import { MasterKeyOrderByInput } from "./MasterKeyOrderByInput";

export type MasterKeyFindManyArgs = {
  where?: MasterKeyWhereInput;
  orderBy?: Array<MasterKeyOrderByInput>;
  skip?: number;
  take?: number;
};
