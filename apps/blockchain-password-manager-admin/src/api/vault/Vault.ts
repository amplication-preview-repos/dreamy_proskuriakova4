import { Password } from "../password/Password";
import { User } from "../user/User";

export type Vault = {
  createdAt: Date;
  id: string;
  name: string | null;
  ownedBy: string | null;
  passwords?: Array<Password>;
  updatedAt: Date;
  user?: User | null;
};
