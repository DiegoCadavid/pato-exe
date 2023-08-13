import { Vector } from "@/types";

const checkWinDirMove = (
  delta: number,
  offset: number,
  size: number,
  parentSize: number,
  dir: "x" | "y"
): boolean => {

  const limitStart = dir === "x" ? (size/2) * -1 : 0;

  return (
    (delta > 0 && offset >  limitStart ) || (delta < 0 && parentSize - (offset + size / 2) > 0)
  );
};

const checkWinMove = (
  delta: Vector<number>,
  win: HTMLDivElement
): Vector<boolean> => {
  return {
    x: checkWinDirMove(delta.x, win.offsetLeft, win.clientWidth,  (win.parentElement?.clientWidth || document.body.clientWidth), "x"),
    y: checkWinDirMove(delta.y, win.offsetTop, win.clientHeight, (win.parentElement?.clientHeight || document.body.clientHeight), "y")
  };
};


export default checkWinMove;