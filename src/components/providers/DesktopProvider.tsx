"use client";
import { useState } from "react";
import desktopContext from "@/contexts/desktopContext";

import { type AppActive, type App, type Vector } from "@/types";
import {
  WIN_INITIAL_POS,
  WIN_OFFSET_POS,
  WIN_PLUS_INDEX,
  WIN_BASE_INDEX,
} from "@/utils/constants";

import Whatsapp from "../applications/whatsapp/Whatsapp";
import Notes from "../applications/notes/Notes";
import Vscode from "../applications/vscode/Vscode";
import Terminal from "../applications/terminal/Terminal";
import existApp from "@/helpers/existApp";
import getMaxIndex from "@/helpers/getMaxIndex";

interface Props {
  children: React.ReactNode;
}

const DesktopProvider = ({ children }: Props) => {
  const [apps, setApps] = useState<App[]>([
    {
      title: "Whatsapp",
      Window: Whatsapp,
      icon: "/images/icons/whatsapp.png",
    },
    {
      title: "Notes",
      Window: Notes,
      icon: "/images/icons/notes.png",
    },
    {
      title: "vs code",
      Window: Vscode,
      icon: "/images/icons/vscode.png",
    },
    {
      title: "Terminal",
      Window: Terminal,
      icon: "/images/icons/cmd.png",
      showIcon: false,
    },
  ]);

  const [appsActive, setAppsActive] = useState<AppActive[]>([]);

  const openApp = (title: string, lastPos?: Vector<number>) => {
    if (!existApp(title, apps)) return;

    const maxIndex = getMaxIndex(appsActive);

    // FOCUS APP
    if (existApp(title, appsActive)) {
      const { index, isMinimized, ...appData }: AppActive = appsActive.find(
        (a) => a.title == title
      ) as AppActive;

      setAppsActive((_appsActive) => {
        return [
          ..._appsActive.filter((a) => a.title !== title),
          {
            ...appData,
            isMinimized: false,
            index: maxIndex === index ? index : maxIndex + WIN_PLUS_INDEX,
            lastPos: lastPos ? lastPos : appData.lastPos,
          },
        ];
      });

      return;
    }

    // OPEN APP
    setAppsActive((_appsActive) => {
      const newIndex = maxIndex + WIN_PLUS_INDEX;
      const app: AppActive = {
        ...(apps.find((a) => a.title === title) as App),
        isMinimized: false,
        isFullscreen: false,
        index: newIndex,
        lastPos: {
          x: WIN_INITIAL_POS + newIndex * WIN_OFFSET_POS,
          y: WIN_INITIAL_POS + newIndex * WIN_OFFSET_POS,
        },
      };

      const data: AppActive[] = [..._appsActive, app];

      return data;
    });
  };

  const closeApp = (title: string) => {
    if (!existApp(title, appsActive)) return;
    setAppsActive(appsActive.filter((a) => a.title !== title));
  };

  const hiddenApp = (title: string) => {
    if (!existApp(title, appsActive)) return;

    const { isMinimized, ...data } = appsActive.find(
      (a) => a.title === title
    ) as AppActive;

    setAppsActive([
      ...appsActive.filter((a) => a.title !== title),
      { isMinimized: true, ...data },
    ]);
  };

  const toggleFullscreen = (title: string, lastPos?: Vector<number>) => {
    if (!existApp(title, appsActive)) return;

    const maxIndex = getMaxIndex(appsActive);

    const {
      index,
      isFullscreen: _isFullscreen,
      ...appData
    }: AppActive = appsActive.find((a) => a.title == title) as AppActive;

    setAppsActive((_appsActive) => {
      return [
        ..._appsActive.filter((a) => a.title !== title),
        {
          ...appData,
          isFullscreen: !_isFullscreen,
          index: maxIndex == index ? index : maxIndex + WIN_PLUS_INDEX,
          lastPos: lastPos ? lastPos : appData.lastPos,
        },
      ];
    });
  };

  return (
    <desktopContext.Provider
      value={{
        apps,
        appsActive,
        toggleFullscreen,
        hiddenApp,
        openApp,
        closeApp,
      }}>
      {children}
    </desktopContext.Provider>
  );
};

export default DesktopProvider;
