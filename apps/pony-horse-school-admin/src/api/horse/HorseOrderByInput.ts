import { SortOrder } from "../../util/SortOrder";

export type HorseOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
