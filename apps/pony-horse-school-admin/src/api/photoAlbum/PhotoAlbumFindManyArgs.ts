import { PhotoAlbumWhereInput } from "./PhotoAlbumWhereInput";
import { PhotoAlbumOrderByInput } from "./PhotoAlbumOrderByInput";

export type PhotoAlbumFindManyArgs = {
  where?: PhotoAlbumWhereInput;
  orderBy?: Array<PhotoAlbumOrderByInput>;
  skip?: number;
  take?: number;
};
