import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhotoAlbumService } from "./photoAlbum.service";
import { PhotoAlbumControllerBase } from "./base/photoAlbum.controller.base";

@swagger.ApiTags("photoAlbums")
@common.Controller("photoAlbums")
export class PhotoAlbumController extends PhotoAlbumControllerBase {
  constructor(
    protected readonly service: PhotoAlbumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
