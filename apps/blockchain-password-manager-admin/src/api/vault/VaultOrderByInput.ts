import { SortOrder } from "../../util/SortOrder";

export type VaultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownedBy?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
