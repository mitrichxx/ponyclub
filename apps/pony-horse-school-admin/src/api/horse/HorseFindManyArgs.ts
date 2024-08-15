import { HorseWhereInput } from "./HorseWhereInput";
import { HorseOrderByInput } from "./HorseOrderByInput";

export type HorseFindManyArgs = {
  where?: HorseWhereInput;
  orderBy?: Array<HorseOrderByInput>;
  skip?: number;
  take?: number;
};
