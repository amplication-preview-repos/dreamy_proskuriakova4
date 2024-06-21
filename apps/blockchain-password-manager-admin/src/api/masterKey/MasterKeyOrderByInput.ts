import { SortOrder } from "../../util/SortOrder";

export type MasterKeyOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
