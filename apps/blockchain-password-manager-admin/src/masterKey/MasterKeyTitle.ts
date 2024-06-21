import { MasterKey as TMasterKey } from "../api/masterKey/MasterKey";

export const MASTERKEY_TITLE_FIELD = "createdBy";

export const MasterKeyTitle = (record: TMasterKey): string => {
  return record.createdBy?.toString() || String(record.id);
};
