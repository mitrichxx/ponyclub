import { SortOrder } from "../../util/SortOrder";

export type PhotoAlbumOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  photos?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
