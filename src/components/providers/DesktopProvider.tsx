"use client";
import { useState } from "react";

import desktopContext from "@/contexts/desktopContext";

import { AppActive, type App } from "@/types";

import Whatsapp from "../applications/whatsapp/Whatsapp";
import Notes from "../applications/notes/Notes";
import Vscode from "../applications/vscode/Vscode";
import Terminal from "../applications/terminal/Terminal";

interface Props {
  children: React.ReactNode;
}

const apps = [];

const DesktopProvider = ({ children }: Props) => {
  const [apps, setApps] = useState<App[]>([
    {
      title: "Whatsapp",
      Window: Whatsapp,
    },
    {
      title: "Notes",
      Window: Notes,
    },
    {
      title: "vs code",
      Window: Vscode,
    },
    {
      title: "Terminal",
      Window: Terminal,
      showIcon: false,
    },
  ]);

  const [appsActive, setAppsActive] = useState<AppActive[]>([]);

  /*
  TODO  | Cuando se da click a una aplicacion que ya esta abierta se le debe hacer focus
  
   */

  const openApp = (title: string) => {
    if (!apps.map((a) => a.title).includes(title)) return;
    if (appsActive.map((a) => a.title).includes(title)) return;

    setAppsActive((_appsActive) => {
      const app: AppActive = {
        ...apps.filter((a) => a.title === title)[0],
        isMinimized: false,
        isFullscreen: false,
        index: _appsActive.length + 1,
      };

      const data: AppActive[] = [..._appsActive, app];

      console.log(data);
      return data;
    });
  };

  return (
    <desktopContext.Provider
      value={{
        apps,
        appsActive,
        openApp,
      }}>
      {children}
    </desktopContext.Provider>
  );
};

export default DesktopProvider;
