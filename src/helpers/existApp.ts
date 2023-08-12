import { type App } from "@/types";

const existApp = <T extends App>(title: string, apps: T[]) => {
  return apps.map((a) => a.title).includes(title);
};

export default existApp;
