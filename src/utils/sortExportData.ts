import { wyDeepClone } from "wangyong-utils";
import dayjs from "dayjs";

export type SortType = "asc" | "desc";

export default function sortExportData(data: any, SortType: SortType) {
  const dataCopy = wyDeepClone(data);
  if (SortType === "asc") {
    return dataCopy.sort((a, b) => dayjs(a.time).unix() - dayjs(b.time).unix());
  }
  return dataCopy.sort((a, b) => dayjs(b.time).unix() - dayjs(a.time).unix());
}
