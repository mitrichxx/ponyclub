import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HorseService } from "./horse.service";
import { HorseControllerBase } from "./base/horse.controller.base";

@swagger.ApiTags("horses")
@common.Controller("horses")
export class HorseController extends HorseControllerBase {
  constructor(
    protected readonly service: HorseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
