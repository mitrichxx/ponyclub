import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhotoAlbumModuleBase } from "./base/photoAlbum.module.base";
import { PhotoAlbumService } from "./photoAlbum.service";
import { PhotoAlbumController } from "./photoAlbum.controller";
import { PhotoAlbumResolver } from "./photoAlbum.resolver";

@Module({
  imports: [PhotoAlbumModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhotoAlbumController],
  providers: [PhotoAlbumService, PhotoAlbumResolver],
  exports: [PhotoAlbumService],
})
export class PhotoAlbumModule {}
