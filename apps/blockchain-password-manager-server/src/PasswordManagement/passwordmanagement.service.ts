import { Injectable } from "@nestjs/common";
import { DecryptPasswordInputDto } from "../passwordManagement/DecryptPasswordInputDto";
import { EncryptPasswordInputDto } from "../passwordManagement/EncryptPasswordInputDto";
import { RetrievePasswordFromVaultInputDto } from "../passwordManagement/RetrievePasswordFromVaultInputDto";
import { SavePasswordToVaultInputDto } from "../passwordManagement/SavePasswordToVaultInputDto";

@Injectable()
export class PasswordManagementService {
  constructor() {}
  async DecryptPassword(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DecryptPasswordAction(args: DecryptPasswordInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async EncryptPassword(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EncryptPasswordAction(args: EncryptPasswordInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrievePasswordFromVault(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrievePasswordFromVaultAction(args: RetrievePasswordFromVaultInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async SavePasswordToVault(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SavePasswordToVaultAction(args: SavePasswordToVaultInputDto): Promise<SavePasswordToVaultInputDto> {
    throw new Error("Not implemented");
  }
}
