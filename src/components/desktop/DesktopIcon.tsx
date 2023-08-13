"use client";

import { useContext } from "react";
import desktopContext from "@/contexts/desktopContext";

interface Props {
  title: string;
  icon: string;
}

const DesktopIcon = ({ title, icon }: Props) => {
  const desktopCtx = useContext(desktopContext);

  const handleClick = () => {
    desktopCtx.openApp(title);
  };

  return (
    <button
      onClick={handleClick}
      className="flex aspect-square h-20 w-20 flex-col items-center justify-center  rounded-lg text-center hover:bg-zinc-100/20">
      <img src={icon} className="h-12 w-12" />
      <p className="mt-1 w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm drop-shadow-[0_0_1.2px_rgba(0,0,0,0.8)] leading-none text-white">
        {title}
      </p>
    </button>
  );
};

export default DesktopIcon;
