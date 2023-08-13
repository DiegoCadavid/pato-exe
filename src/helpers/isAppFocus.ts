import { AppActive } from "@/types";
import getMaxIndex from "./getMaxIndex";

const isAppFocus = (app: AppActive, appsActive: AppActive[]) => {
  return getMaxIndex(appsActive) === app.index && !app.isMinimized;
};

export default isAppFocus;
