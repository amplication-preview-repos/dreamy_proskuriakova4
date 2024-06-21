import { VaultWhereInput } from "./VaultWhereInput";
import { VaultOrderByInput } from "./VaultOrderByInput";

export type VaultFindManyArgs = {
  where?: VaultWhereInput;
  orderBy?: Array<VaultOrderByInput>;
  skip?: number;
  take?: number;
};
