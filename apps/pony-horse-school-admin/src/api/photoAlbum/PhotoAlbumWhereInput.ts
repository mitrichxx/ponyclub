import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PhotoAlbumWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  photos?: JsonFilter;
  title?: StringNullableFilter;
};
