import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HorseWhereInput = {
  age?: IntNullableFilter;
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
