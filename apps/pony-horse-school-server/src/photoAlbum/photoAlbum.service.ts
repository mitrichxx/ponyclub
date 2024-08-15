import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhotoAlbumServiceBase } from "./base/photoAlbum.service.base";

@Injectable()
export class PhotoAlbumService extends PhotoAlbumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
