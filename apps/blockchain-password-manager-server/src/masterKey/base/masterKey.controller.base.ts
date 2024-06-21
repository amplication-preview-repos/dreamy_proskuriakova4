/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MasterKeyService } from "../masterKey.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MasterKeyCreateInput } from "./MasterKeyCreateInput";
import { MasterKey } from "./MasterKey";
import { MasterKeyFindManyArgs } from "./MasterKeyFindManyArgs";
import { MasterKeyWhereUniqueInput } from "./MasterKeyWhereUniqueInput";
import { MasterKeyUpdateInput } from "./MasterKeyUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MasterKeyControllerBase {
  constructor(
    protected readonly service: MasterKeyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MasterKey })
  @nestAccessControl.UseRoles({
    resource: "MasterKey",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMasterKey(
    @common.Body() data: MasterKeyCreateInput
  ): Promise<MasterKey> {
    return await this.service.createMasterKey({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MasterKey] })
  @ApiNestedQuery(MasterKeyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MasterKey",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async masterKeys(@common.Req() request: Request): Promise<MasterKey[]> {
    const args = plainToClass(MasterKeyFindManyArgs, request.query);
    return this.service.masterKeys({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MasterKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MasterKey",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async masterKey(
    @common.Param() params: MasterKeyWhereUniqueInput
  ): Promise<MasterKey | null> {
    const result = await this.service.masterKey({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MasterKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MasterKey",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMasterKey(
    @common.Param() params: MasterKeyWhereUniqueInput,
    @common.Body() data: MasterKeyUpdateInput
  ): Promise<MasterKey | null> {
    try {
      return await this.service.updateMasterKey({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          createdBy: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MasterKey })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MasterKey",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMasterKey(
    @common.Param() params: MasterKeyWhereUniqueInput
  ): Promise<MasterKey | null> {
    try {
      return await this.service.deleteMasterKey({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
