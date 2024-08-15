import { Booking } from "../booking/Booking";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
