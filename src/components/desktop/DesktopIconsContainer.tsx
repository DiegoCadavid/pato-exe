"use client";

import desktopContext from "@/contexts/desktopContext";
import { useContext } from "react";
import DesktopIcon from "./DesktopIcon";

interface Props {}

const DesktopIconsContainer = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);

  return (
    <>
      {desktopCtx.apps.map((app) => {
        return <DesktopIcon  key={app.title} title={app.title} />;
      })}
    </>
  );
};

export default DesktopIconsContainer;
