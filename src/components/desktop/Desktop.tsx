import Window from "@/components/window/Window";
import DesktopIcon from "./DesktopIcon";
import Dialogues from "../dialogues/Dialogues";
import DesktopIconsContainer from "./DesktopIconsContainer";
import DesktopWindowsContainer from "./DesktopWindowsContainer";

interface Props {}

const Desktop = ({}: Props) => {
  return (
    <div className="relative flex flex-grow flex-col items-start overflow-hidden p-4 gap-2">
      <DesktopIconsContainer />
      <DesktopWindowsContainer />

      {/* <Dialogues /> */}
    </div>
  );
};

export default Desktop;
