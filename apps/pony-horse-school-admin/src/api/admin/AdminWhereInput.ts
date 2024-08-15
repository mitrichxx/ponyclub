import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AdminWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isSuperAdmin?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
