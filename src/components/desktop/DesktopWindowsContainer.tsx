"use client";

import { useContext } from "react";
import desktopContext from "@/contexts/desktopContext";

interface Props {}

const DesktopWindowsContainer = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);

  return (
    <>
      {desktopCtx.appsActive.map(
        ({ Window, ...windowsProps }) => {
          return (
            <Window
              key={windowsProps.title}
              {...windowsProps}
            />
          );
        }
      )}
    </>
  );
};

export default DesktopWindowsContainer;
