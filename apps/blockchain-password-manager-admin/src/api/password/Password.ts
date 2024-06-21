import { Vault } from "../vault/Vault";

export type Password = {
  createdAt: Date;
  id: string;
  label: string | null;
  updatedAt: Date;
  value: string | null;
  vault?: Vault | null;
};
