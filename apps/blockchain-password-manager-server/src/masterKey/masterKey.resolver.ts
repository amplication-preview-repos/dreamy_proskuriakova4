import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MasterKeyResolverBase } from "./base/masterKey.resolver.base";
import { MasterKey } from "./base/MasterKey";
import { MasterKeyService } from "./masterKey.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MasterKey)
export class MasterKeyResolver extends MasterKeyResolverBase {
  constructor(
    protected readonly service: MasterKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
