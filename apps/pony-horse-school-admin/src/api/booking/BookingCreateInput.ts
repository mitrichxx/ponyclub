import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HorseWhereUniqueInput } from "../horse/HorseWhereUniqueInput";

export type BookingCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dateTime?: Date | null;
  horse?: HorseWhereUniqueInput | null;
  status?: "Option1" | null;
};
