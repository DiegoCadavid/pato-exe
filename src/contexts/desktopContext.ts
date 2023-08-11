import { createContext } from "react";
import { type App, type AppActive } from "@/types";

export interface DesktopContext {
  apps: App[];
  appsActive: AppActive[];

  openApp: (title: string) => void; 

}

const desktopContext = createContext<DesktopContext>({
  apps: [],
  appsActive: [],
  openApp: () => {}
});

export default desktopContext;
