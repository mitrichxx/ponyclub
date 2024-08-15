import { BookingUpdateManyWithoutHorsesInput } from "./BookingUpdateManyWithoutHorsesInput";

export type HorseUpdateInput = {
  age?: number | null;
  bookings?: BookingUpdateManyWithoutHorsesInput;
  name?: string | null;
  typeField?: string | null;
};
