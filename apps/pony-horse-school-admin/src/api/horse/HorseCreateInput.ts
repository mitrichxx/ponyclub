import { BookingCreateNestedManyWithoutHorsesInput } from "./BookingCreateNestedManyWithoutHorsesInput";

export type HorseCreateInput = {
  age?: number | null;
  bookings?: BookingCreateNestedManyWithoutHorsesInput;
  name?: string | null;
  typeField?: string | null;
};
