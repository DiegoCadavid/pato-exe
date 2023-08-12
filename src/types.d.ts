import React from "react";

export interface Vector<T> {
  x: T;
  y: T;
}



export interface WindowProps {
  size?: number;
  index?: number;
  title: string;
  children?: React.ReactNode;
  lastPos?: Vector<number>
  isMinimized?: boolean;
  isFullscreen?: boolean;
}


export interface App {
  Window: ({}: WindowProps ) => JSX.Element;
  title: string;
  icon?: string;
  initialSize?: number;
  showIcon?: boolean;
}

export interface AppActive extends App {
  isMinimized: boolean;
  isFullscreen:boolean;
  index: number;
  lastPos?: Vector<number>
}
