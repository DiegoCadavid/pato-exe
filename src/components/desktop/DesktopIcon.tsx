"use client";

import desktopContext from "@/contexts/desktopContext";
import { useContext } from "react";

interface Props {
  title: string;
}

const DesktopIcon = ({ title }: Props) => {
  const desktopCtx = useContext(desktopContext);

  const handleClick = () => {
    desktopCtx.openApp(title);
  }

  return (
    <button onClick={handleClick} className="flex aspect-square h-20 w-20 flex-col items-center justify-center  rounded-lg text-center hover:bg-zinc-100/20">
      <div className="h-12 w-12 rounded-lg bg-zinc-100"></div>
      <p className="mt-1 text-sm leading-none text-white whitespace-nowrap w-full  overflow-hidden text-ellipsis">{title}</p>
    </button>
  );
};

export default DesktopIcon;
