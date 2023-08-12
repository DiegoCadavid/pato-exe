"use client";

import { useContext } from "react";
import desktopContext from "@/contexts/desktopContext";

interface Props {}

const DesktopWindowsContainer = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);

  return (
    <>
      {desktopCtx.appsActive.map(({ Window, title, initialSize, index, lastPos}) =>{
        return <Window key={title} title={title} size={initialSize} index={index} lastPos={lastPos} />
      }) }
    </>
  )
}

export default DesktopWindowsContainer