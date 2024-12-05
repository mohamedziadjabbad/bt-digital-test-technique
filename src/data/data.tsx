import data from "./data.json";

export type Data = typeof data;

export const useData = (): Data => data;
