import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PasswordManagementService } from "./passwordmanagement.service";
import { SavePasswordToVaultInputDto } from "../passwordManagement/SavePasswordToVaultInputDto";

@swagger.ApiTags("passwordManagements")
@common.Controller("passwordManagements")
export class PasswordManagementController {
  constructor(protected readonly service: PasswordManagementService) {}

  @common.Get("/:id/decrypt-password")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DecryptPassword(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.DecryptPassword(body);
      }

  @common.Post("/decrypt-password")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DecryptPasswordAction(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.DecryptPasswordAction(body);
      }

  @common.Get("/:id/encrypt-password")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EncryptPassword(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.EncryptPassword(body);
      }

  @common.Post("/encrypt-password")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EncryptPasswordAction(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.EncryptPasswordAction(body);
      }

  @common.Get("/:id/retrieve-password-from-vault")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrievePasswordFromVault(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.RetrievePasswordFromVault(body);
      }

  @common.Post("/retrieve-password")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrievePasswordFromVaultAction(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.RetrievePasswordFromVaultAction(body);
      }

  @common.Get("/:id/save-password-to-vault")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SavePasswordToVault(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<string> {
        return this.service.SavePasswordToVault(body);
      }

  @common.Post("/save-password")
  @swagger.ApiOkResponse({
    type: SavePasswordToVaultInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SavePasswordToVaultAction(
    @common.Body()
    body: SavePasswordToVaultInputDto
  ): Promise<SavePasswordToVaultInputDto> {
        return this.service.SavePasswordToVaultAction(body);
      }
}
