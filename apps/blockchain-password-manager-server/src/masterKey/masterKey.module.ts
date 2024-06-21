import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MasterKeyModuleBase } from "./base/masterKey.module.base";
import { MasterKeyService } from "./masterKey.service";
import { MasterKeyController } from "./masterKey.controller";
import { MasterKeyResolver } from "./masterKey.resolver";

@Module({
  imports: [MasterKeyModuleBase, forwardRef(() => AuthModule)],
  controllers: [MasterKeyController],
  providers: [MasterKeyService, MasterKeyResolver],
  exports: [MasterKeyService],
})
export class MasterKeyModule {}
