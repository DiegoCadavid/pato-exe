import Window from "@/components/window/Window";
import DesktopIcon from "./DesktopIcon";
import Dialogues from "../dialogues/Dialogues";
import DesktopIconsContainer from "./DesktopIconsContainer";
import DesktopWindowsContainer from "./DesktopWindowsContainer";
import Menu from "../menu/Menu";

interface Props {}

const Desktop = ({}: Props) => {
  return (
    <div id="desktop-root" className="relative flex flex-grow flex-col items-start overflow-hidden p-4 gap-2">
      <DesktopIconsContainer />
      <DesktopWindowsContainer />
      <Menu />

      {/* <Dialogues /> */}
    </div>
  );
};

export default Desktop;
