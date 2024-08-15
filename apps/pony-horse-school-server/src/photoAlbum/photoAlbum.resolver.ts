import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PhotoAlbumResolverBase } from "./base/photoAlbum.resolver.base";
import { PhotoAlbum } from "./base/PhotoAlbum";
import { PhotoAlbumService } from "./photoAlbum.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhotoAlbum)
export class PhotoAlbumResolver extends PhotoAlbumResolverBase {
  constructor(
    protected readonly service: PhotoAlbumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
