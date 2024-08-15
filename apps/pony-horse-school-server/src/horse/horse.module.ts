import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HorseModuleBase } from "./base/horse.module.base";
import { HorseService } from "./horse.service";
import { HorseController } from "./horse.controller";
import { HorseResolver } from "./horse.resolver";

@Module({
  imports: [HorseModuleBase, forwardRef(() => AuthModule)],
  controllers: [HorseController],
  providers: [HorseService, HorseResolver],
  exports: [HorseService],
})
export class HorseModule {}
