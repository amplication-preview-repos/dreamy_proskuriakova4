import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VaultService } from "./vault.service";
import { VaultControllerBase } from "./base/vault.controller.base";

@swagger.ApiTags("vaults")
@common.Controller("vaults")
export class VaultController extends VaultControllerBase {
  constructor(
    protected readonly service: VaultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
