"use client";

import { useContext } from "react";
import desktopContext from "@/contexts/desktopContext";

interface Props {}

const DesktopWindowsContainer = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);

  return (
    <>
      {desktopCtx.appsActive.map(({ Window, title, initialSize }) =>{
        return <Window title={title} size={initialSize}  />
      }) }
    </>
  )
}

export default DesktopWindowsContainer