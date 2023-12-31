"use client";

import { useContext, useEffect } from "react";
import desktopContext from "@/contexts/desktopContext";
import isAppFocus from "@/helpers/isAppFocus";
import existApp from "@/helpers/existApp";

interface Props {}

const BarApps = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);

  return (
    <div className="flex h-full items-center gap-2 ">
      {desktopCtx.appsActive
        .sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        })
        .map((app) => {
          return (
            <button
              key={app.title}
              className={`group flex aspect-square h-10 items-center justify-center rounded-lg p-2 animate-up ${
                isAppFocus(app, desktopCtx.appsActive)
                  ? "border border-zinc-600/30 bg-zinc-600/40"
                  : ""
              }`}
              onClick={() => {

                const isFocus = isAppFocus(app, desktopCtx.appsActive);

                if(!app.isMinimized && !isFocus) {
                  return desktopCtx.openApp(app.title);
                }

                if(!app.isMinimized && isFocus) {
                  return desktopCtx.hiddenApp(app.title);
                }

                
                if(app.isMinimized) {
                  return desktopCtx.openApp(app.title);
                }
              }}>
                <img src={app.icon} alt="app icon" className="w-7 h-7 flex-shrink-0 group-active:scale-90 object-contain object-center" />
            </button>
          );
        })}
    </div>
  );
};

export default BarApps;
