import { createContext } from "react";
import { Vector, type App, type AppActive } from "@/types";

export interface DesktopContext {
  apps: App[];
  appsActive: AppActive[];

  openApp: (title: string, lastPos?: Vector<number>) => void; 
  hiddenApp: (title: string) => void;
  closeApp: (title: string) => void;
  toggleFullscreen: (title: string, lastPos?: Vector<number>) => void;
}

const desktopContext = createContext<DesktopContext>({
  apps: [],
  appsActive: [],
  openApp: () => {},
  hiddenApp: () => {},
  closeApp: () => {},
  toggleFullscreen: () => {}
});

export default desktopContext;
