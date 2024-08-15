import { Booking } from "../booking/Booking";

export type Horse = {
  age: number | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
};
