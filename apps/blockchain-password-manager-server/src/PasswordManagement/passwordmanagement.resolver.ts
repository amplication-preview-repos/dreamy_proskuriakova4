import * as graphql from "@nestjs/graphql";
import { DecryptPasswordInputDto } from "../passwordManagement/DecryptPasswordInputDto";
import { EncryptPasswordInputDto } from "../passwordManagement/EncryptPasswordInputDto";
import { RetrievePasswordFromVaultInputDto } from "../passwordManagement/RetrievePasswordFromVaultInputDto";
import { SavePasswordToVaultInputDto } from "../passwordManagement/SavePasswordToVaultInputDto";
import { PasswordManagementService } from "./passwordmanagement.service";

export class PasswordManagementResolver {
  constructor(protected readonly service: PasswordManagementService) {}

  @graphql.Query(() => String)
  async DecryptPassword(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DecryptPassword(args);
  }

  @graphql.Query(() => String)
  async DecryptPasswordAction(
    @graphql.Args()
    args: DecryptPasswordInputDto
  ): Promise<string> {
    return this.service.DecryptPasswordAction(args);
  }

  @graphql.Query(() => String)
  async EncryptPassword(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.EncryptPassword(args);
  }

  @graphql.Mutation(() => String)
  async EncryptPasswordAction(
    @graphql.Args()
    args: EncryptPasswordInputDto
  ): Promise<string> {
    return this.service.EncryptPasswordAction(args);
  }

  @graphql.Query(() => String)
  async RetrievePasswordFromVault(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RetrievePasswordFromVault(args);
  }

  @graphql.Query(() => String)
  async RetrievePasswordFromVaultAction(
    @graphql.Args()
    args: RetrievePasswordFromVaultInputDto
  ): Promise<string> {
    return this.service.RetrievePasswordFromVaultAction(args);
  }

  @graphql.Query(() => String)
  async SavePasswordToVault(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SavePasswordToVault(args);
  }

  @graphql.Mutation(() => SavePasswordToVaultInputDto)
  async SavePasswordToVaultAction(
    @graphql.Args()
    args: SavePasswordToVaultInputDto
  ): Promise<SavePasswordToVaultInputDto> {
    return this.service.SavePasswordToVaultAction(args);
  }
}
