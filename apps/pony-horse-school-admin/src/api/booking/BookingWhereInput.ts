import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HorseWhereUniqueInput } from "../horse/HorseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dateTime?: DateTimeNullableFilter;
  horse?: HorseWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
