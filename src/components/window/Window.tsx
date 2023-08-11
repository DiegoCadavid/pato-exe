"use client";
import { useRef, type MouseEventHandler } from "react";
import {
  WIN_OFFSET_POS as OFFSET_POS,
  WIN_INITIAL_POS as INITIAL_POS,
} from "@/utils/constants";

import checkWinMove from "@/helpers/checkWinMove";
import { type WindowProps } from "@/types";


const Window = ({ size = 1000, index = 0, title, children }: WindowProps) => {
  /*
    q: ¿Porque no uso useState's para el funcionamiento del drag?
    r: Primero no queria re-renderizar el componente cada que 
    movia el mouse o se realizaba otro evento ya que esto consume mucho
    rendimiento (imaginate calcular el virtual-dom por cada que mueves el 
    mouse 💀), ademas hago muchos calculos sincronicos cada que se mueve 
    el mouse y el hook useState cuando se actualiza el estado funciona de
    manera asincronica a diferencia de useRef (https://stackoverflow.com/a/72343589/16523647).
  */

  const windowRef = useRef<null | HTMLDivElement>(null);
  const initialRef = useRef<{ x: number; y: number }>({
    x: INITIAL_POS + index * OFFSET_POS,
    y: INITIAL_POS + index * OFFSET_POS,
  });

  const handleMouseDown: MouseEventHandler = (e) => {
    initialRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    windowRef.current?.classList.add("draggable");
  };

  const handleMouseMove = (e: MouseEvent) => {
    const initial = initialRef.current;
    const windowsElm = windowRef.current;

    if (windowsElm === null) return;

    const delta = {
      x: initial.x - e.clientX,
      y: initial.y - e.clientY,
    };

    const isWinMove = checkWinMove(delta, windowsElm);

    if (isWinMove.x) {
      windowsElm.style.left = `${windowsElm.offsetLeft - delta.x}px`;
      initialRef.current.x = e.clientX;
    }

    if (isWinMove.y) {
      windowsElm.style.top = `${windowsElm.offsetTop - delta.y}px`;
      initialRef.current.y = e.clientY;
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
    windowRef.current?.classList.remove("draggable");
  };

  return (
    <div
      className="absolute flex aspect-video flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 resize"
      style={{
        top: INITIAL_POS + index * OFFSET_POS,
        left: INITIAL_POS + index * OFFSET_POS,
        width: size,
      }}
      ref={windowRef}>
      <div className="flex flex-shrink-0 bg-zinc-900 text-white">
        {/* Drag trigger */}
        <div className="flex-grow py-2 px-4" onMouseDown={handleMouseDown}>
          <h2 className="select-none text-sm pointer-events-none text-zinc-300">{title}</h2>
        </div>

        {/* Action zone */}
        <div className="flex items-center gap-2 p-2">
          <span className="inline-block h-3 w-3 rounded-full bg-green-400"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-red-400"></span>
        </div>
      </div>

      <div className="flex-grow ">{children}</div>
    </div>
  );
};

export default Window;
