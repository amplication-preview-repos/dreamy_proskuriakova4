import { Module } from "@nestjs/common";
import { PasswordManagementService } from "./passwordmanagement.service";
import { PasswordManagementController } from "./passwordmanagement.controller";
import { PasswordManagementResolver } from "./passwordmanagement.resolver";

@Module({
  controllers: [PasswordManagementController],
  providers: [PasswordManagementService, PasswordManagementResolver],
  exports: [PasswordManagementService],
})
export class PasswordManagementModule {}
