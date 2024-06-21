import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PasswordModuleBase } from "./base/password.module.base";
import { PasswordService } from "./password.service";
import { PasswordController } from "./password.controller";
import { PasswordResolver } from "./password.resolver";

@Module({
  imports: [PasswordModuleBase, forwardRef(() => AuthModule)],
  controllers: [PasswordController],
  providers: [PasswordService, PasswordResolver],
  exports: [PasswordService],
})
export class PasswordModule {}
