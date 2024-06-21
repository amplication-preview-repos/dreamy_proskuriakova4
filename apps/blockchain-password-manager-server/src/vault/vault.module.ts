import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VaultModuleBase } from "./base/vault.module.base";
import { VaultService } from "./vault.service";
import { VaultController } from "./vault.controller";
import { VaultResolver } from "./vault.resolver";

@Module({
  imports: [VaultModuleBase, forwardRef(() => AuthModule)],
  controllers: [VaultController],
  providers: [VaultService, VaultResolver],
  exports: [VaultService],
})
export class VaultModule {}
