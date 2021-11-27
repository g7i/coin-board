import {RangeType, TabsType} from "../types/TabsType";

const HomeTabs: TabsType[] = [];

const Ranges: RangeType[] = [
  { label: "1d", days: "1" },
  { label: "3d", days: "3" },
  { label: "1w", days: "7" },
  { label: "1m", days: "30" },
  { label: "6m", days: "180" },
  { label: "1y", days: "365" },
  { label: "max", days: "max" },
];

const CHART_WIDTH = 1000;

export { HomeTabs, Ranges, CHART_WIDTH };
