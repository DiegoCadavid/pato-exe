import BarActions from "./BarActions";
import BarApps from "./BarApps";
import BarSearch from "./BarSearch";

interface Props {}

const Bar = ({}: Props) => {
  return (
    <div className="relative flex flex-shrink-0 justify-center gap-3 border-t border-t-zinc-600 bg-zinc-800/80 h-12 text-white backdrop-blur-lg items-center overflow-hidden">
      {/* Windows logo */}
      <img src="/images/icons/win.png" alt="win icon" className="w-5 h-5 active:scale-90" />

      {/* Search bar */}
      <BarSearch />

      {/* Apps active */}
      <BarApps />

      {/* bar actions */}
      <BarActions />
    </div>
  );
};

export default Bar;
