import { User } from "../user/User";

export type MasterKey = {
  createdAt: Date;
  createdBy: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  value: string | null;
};
