import { Vector } from "@/types";

const checkWinDirMove = (
  delta: number,
  offset: number,
  size: number,
  parentSize: number
): boolean => {
  return (
    (delta > 0 && offset > 0) || (delta < 0 && parentSize - (offset + size) > 0)
  );
};

const checkWinMove = (
  delta: Vector<number>,
  win: HTMLDivElement
): Vector<boolean> => { 
  return {
    x: checkWinDirMove(delta.x, win.offsetLeft, win.clientWidth,  (win.parentElement?.clientWidth || document.body.clientWidth)),
    y: checkWinDirMove(delta.y, win.offsetTop, win.clientHeight, (win.parentElement?.clientHeight || document.body.clientHeight))
  };
};


export default checkWinMove;