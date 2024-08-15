import { InputJsonValue } from "../../types";

export type PhotoAlbumCreateInput = {
  description?: string | null;
  photos?: InputJsonValue;
  title?: string | null;
};
