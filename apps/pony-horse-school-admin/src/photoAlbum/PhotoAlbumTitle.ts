import { PhotoAlbum as TPhotoAlbum } from "../api/photoAlbum/PhotoAlbum";

export const PHOTOALBUM_TITLE_FIELD = "title";

export const PhotoAlbumTitle = (record: TPhotoAlbum): string => {
  return record.title?.toString() || String(record.id);
};
