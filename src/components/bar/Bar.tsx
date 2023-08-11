import BarActions from "./BarActions";
import BarApps from "./BarApps";

interface Props {}

const Bar = ({}: Props) => {
  return (
    <div className="relative flex flex-shrink-0 justify-center gap-4 border-t border-t-zinc-600 bg-zinc-800/80 py-2 text-white backdrop-blur-lg">
      {/* Windows logo */}
      <div className="h-8 w-8 rounded-lg bg-blue-400" />

      {/* Search bar */}
      <div className="h-8 w-48 rounded-full border border-zinc-500 bg-zinc-600">
      </div>

      {/* Apps active */}
      <BarApps />

      {/* bar actions */}
      <BarActions />
    </div>
  );
};

export default Bar;
