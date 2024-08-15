import { Horse as THorse } from "../api/horse/Horse";

export const HORSE_TITLE_FIELD = "name";

export const HorseTitle = (record: THorse): string => {
  return record.name?.toString() || String(record.id);
};
