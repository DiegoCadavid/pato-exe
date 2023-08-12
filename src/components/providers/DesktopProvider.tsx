"use client";
import { useState } from "react";
import desktopContext from "@/contexts/desktopContext";

import { type AppActive, type App, type Vector } from "@/types";
import { WIN_INITIAL_POS, WIN_OFFSET_POS } from "@/utils/constants";

import Whatsapp from "../applications/whatsapp/Whatsapp";
import Notes from "../applications/notes/Notes";
import Vscode from "../applications/vscode/Vscode";
import Terminal from "../applications/terminal/Terminal";
import existApp from "@/helpers/existApp";

interface Props {
  children: React.ReactNode;
}

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

  const openApp = (title: string, lastPos?: Vector<number>) => {
    if (!existApp(title, apps)) return;

    const maxIndex =
      appsActive.length > 0
        ? Math.max(...appsActive.map((a) => a.index)) || 0
        : 0;

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
            index: maxIndex + 1,
            lastPos: lastPos ? lastPos : appData.lastPos,
          },
        ];
      });

      return;
    }

    // OPEN APP
    setAppsActive((_appsActive) => {
      const newIndex = maxIndex + 1;
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

    const { isMinimized, index, ...data } = appsActive.find(
      (a) => a.title === title
    ) as AppActive;

    setAppsActive([
      ...appsActive.filter((a) => a.title !== title),
      { isMinimized: true, index: 0, ...data },
    ]);
  };

  const toggleFullscreen = (title: string, lastPos?: Vector<number>) => {
    if (!existApp(title, appsActive)) return;

    const maxIndex =
      appsActive.length > 0
        ? Math.max(...appsActive.map((a) => a.index)) || 0
        : 0;

    const { index,  isFullscreen: _isFullscreen ,...appData }: AppActive = appsActive.find(
      (a) => a.title == title
    ) as AppActive;

    setAppsActive((_appsActive) => {
      return [
        ..._appsActive.filter((a) => a.title !== title),
        {
          ...appData,
          isFullscreen: !_isFullscreen,
          index: maxIndex + 1,
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
