"use client";

import { useContext } from "react";
import desktopContext from "@/contexts/desktopContext";

interface Props {}

const BarApps = ({}: Props) => {
  const desktopCtx = useContext(desktopContext);
  console.log(desktopCtx)
  
  return (
    <div className="flex gap-4">
      {desktopCtx.appsActive.map((app) => {
        return <div key={app.title} className="w-8 h-8 bg-red-200 rounded-lg"></div> 
      })}
    </div>
  )
}

export default BarApps