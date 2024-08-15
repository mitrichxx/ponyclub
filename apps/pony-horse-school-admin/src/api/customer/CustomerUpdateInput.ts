import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  bookings?: BookingUpdateManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
};
