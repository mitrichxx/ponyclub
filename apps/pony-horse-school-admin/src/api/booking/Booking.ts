import { Customer } from "../customer/Customer";
import { Horse } from "../horse/Horse";

export type Booking = {
  createdAt: Date;
  customer?: Customer | null;
  dateTime: Date | null;
  horse?: Horse | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
