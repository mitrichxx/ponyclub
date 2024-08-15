import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isSuperAdmin?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
