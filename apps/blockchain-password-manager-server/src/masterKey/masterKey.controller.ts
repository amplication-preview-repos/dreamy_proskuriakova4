import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MasterKeyService } from "./masterKey.service";
import { MasterKeyControllerBase } from "./base/masterKey.controller.base";

@swagger.ApiTags("masterKeys")
@common.Controller("masterKeys")
export class MasterKeyController extends MasterKeyControllerBase {
  constructor(
    protected readonly service: MasterKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
