import { AppActive } from "@/types";

const isAppFocus = (app: AppActive, appsActive: AppActive[]) => {
  return Math.max(...appsActive.map((a) => a.index)) === app.index && !app.isMinimized;
};

export default isAppFocus;
