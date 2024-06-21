import { Vault as TVault } from "../api/vault/Vault";

export const VAULT_TITLE_FIELD = "name";

export const VaultTitle = (record: TVault): string => {
  return record.name?.toString() || String(record.id);
};
