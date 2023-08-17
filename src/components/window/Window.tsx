"use client";

import { useRef, useContext , type MouseEventHandler } from "react";
import {
  WIN_OFFSET_POS as OFFSET_POS,
  WIN_INITIAL_POS as INITIAL_POS,
} from "@/utils/constants";

import desktopContext from "@/contexts/desktopContext";
import checkWinMove from "@/helpers/checkWinMove";
import { type WindowProps } from "@/types";

const Window = ({
  size = 1000,
  index = 0,
  title,
  children,
  lastPos,
  isMinimized,
  isFullscreen,
}: WindowProps) => {

  /*
    q: ¿Porque no uso useState's para el funcionamiento del drag?
    r: Primero no queria re-renderizar el componente cada que 
    movia el mouse  ya que esto consume mucho rendimiento (imaginate calcular
    el virtual-dom por cada que mueves el  mouse 💀), ademas hago muchos
    calculos sincronicos cada que se mueve el mouse y el hook useState 
    cuando se actualiza el estado funciona de manera asincronica a diferencia 
    de useRef (https://stackoverflow.com/a/72343589/16523647).
  */

  const windowRef = useRef<null | HTMLDivElement>(null);
  const initialRef = useRef<{ x: number; y: number }>({
    x: INITIAL_POS + index * OFFSET_POS,
    y: INITIAL_POS + index * OFFSET_POS,
  });


  const desktopCtx = useContext(desktopContext);


  // EVENTS
  const handleMouseDown: MouseEventHandler = (e) => {
    if (isFullscreen) return;

    initialRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    const windowsElm = windowRef.current;
    windowsElm?.classList.add("draggable");
    desktopCtx.openApp(
      title,
      windowsElm?.offsetTop && windowsElm.offsetLeft
        ? {
            x: windowsElm?.offsetLeft,
            y: windowsElm.offsetTop,
          }
        : undefined
    );
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
      className={`absolute flex  aspect-video flex-col overflow-hidden  border-zinc-700 bg-zinc-800  ease-out transition-window duration-300  ${
        isMinimized ? "opacity-0 pointer-events-none" : ""
      }  ${!isFullscreen ? "rounded-2xl border" : ""}`}
      style={{
        top: !isFullscreen
          ? lastPos?.y
            ? lastPos.y
            : INITIAL_POS + index * OFFSET_POS
          : 0,
        left: !isFullscreen
          ? lastPos?.x
            ? lastPos.x
            : INITIAL_POS + index * OFFSET_POS
          : 0,
        width: !isFullscreen ? size : "100%",
        height: !isFullscreen ? "auto" : "100%",
        zIndex: index,
      }}
      ref={windowRef}>
      <div className="flex flex-shrink-0 bg-zinc-900 text-white">
        {/* Drag trigger */}
        <div className="flex-grow py-2 px-4" onMouseDown={handleMouseDown}>
          <h2 className="pointer-events-none select-none text-sm text-zinc-300">
            {title}
          </h2>
        </div>

        {/* Action zone */}
        <div className="flex items-center">
          <button
            onClick={() => {
              desktopCtx.hiddenApp(title);
            }}
            className="py-2 px-2  text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>

          <button
            onClick={() => {
              const windowsElm = windowRef.current;

              desktopCtx.toggleFullscreen(
                title,
                windowsElm?.offsetTop && windowsElm.offsetLeft
                  ? {
                      x: windowsElm?.offsetLeft,
                      y: windowsElm.offsetTop,
                    }
                  : undefined
              );
            }}
            className="py-2 px-2  text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              desktopCtx.closeApp(title);
            }}
            className="py-2 px-2  text-zinc-500 hover:bg-red-500 hover:text-zinc-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        onClick={() => {
          const windowsElm = windowRef.current;

          desktopCtx.openApp(
            title,
            windowsElm?.offsetTop && windowsElm.offsetLeft
              ? {
                  x: windowsElm?.offsetLeft,
                  y: windowsElm.offsetTop,
                }
              : undefined
          );
        }}
        className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Window;
