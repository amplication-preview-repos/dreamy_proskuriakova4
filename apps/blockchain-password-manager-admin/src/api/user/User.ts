import { MasterKey } from "../masterKey/MasterKey";
import { JsonValue } from "type-fest";
import { Vault } from "../vault/Vault";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  masterKeys?: Array<MasterKey>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  vaults?: Array<Vault>;
};
