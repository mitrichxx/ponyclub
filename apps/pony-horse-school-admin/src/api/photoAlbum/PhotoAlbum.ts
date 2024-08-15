import { JsonValue } from "type-fest";

export type PhotoAlbum = {
  createdAt: Date;
  description: string | null;
  id: string;
  photos: JsonValue;
  title: string | null;
  updatedAt: Date;
};
