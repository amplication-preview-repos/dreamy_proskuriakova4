import { Password as TPassword } from "../api/password/Password";

export const PASSWORD_TITLE_FIELD = "label";

export const PasswordTitle = (record: TPassword): string => {
  return record.label?.toString() || String(record.id);
};
