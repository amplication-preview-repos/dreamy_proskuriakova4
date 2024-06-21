import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterKeyServiceBase } from "./base/masterKey.service.base";

@Injectable()
export class MasterKeyService extends MasterKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
