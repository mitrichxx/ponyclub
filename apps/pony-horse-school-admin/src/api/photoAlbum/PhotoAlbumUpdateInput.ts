import { InputJsonValue } from "../../types";

export type PhotoAlbumUpdateInput = {
  description?: string | null;
  photos?: InputJsonValue;
  title?: string | null;
};
