import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VaultServiceBase } from "./base/vault.service.base";

@Injectable()
export class VaultService extends VaultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
