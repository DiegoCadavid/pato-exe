import {  AppActive } from "@/types";

const getMaxIndex = (apps: AppActive[]) => {
  return apps.length > 0 ? Math.max(...apps.map((a) => a.index)) || 0 : 0;
  
  
};

export default getMaxIndex;
