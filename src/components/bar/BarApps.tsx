"use client";

import { useContext, useEffect } from "react";
import desktopContext from "@/contexts/desktopContext";

interface Props {}

const BarApps = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);

  return (
    <div className="flex gap-4 items-center">
      {desktopCtx.appsActive
        .sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        })
        .map((app) => {
          return (
            <button
              key={app.title}
              className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500"
              onClick={() => {
                desktopCtx.openApp(app.title);
              }}>
              {app.title[0].toUpperCase()}

              {Math.max(...desktopCtx.appsActive.map(a => a.index)) === app.index && (
                <div className="absolute -bottom-2 h-1 w-2 rounded-full bg-zinc-100/70" />
              )}
            </button>
          );
        })}
    </div>
  );
};

export default BarApps;
