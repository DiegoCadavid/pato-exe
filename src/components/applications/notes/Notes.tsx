import Window from "@/components/window/Window";
import { WindowProps } from "@/types";

interface Props extends WindowProps {}

const Notes = ({title, index, lastPos}: Props) => {
  return (
    <Window title={title} size={600} index={index} lastPos={lastPos}>
      <div className="bg-zinc-900 h-full text-zinc-300 flex flex-col">
        <div className="flex border-b border-zinc-700 bg-zinc-900 pl-8 items-center gap-2">
          <div className="translate-y-0.5 rounded-t-lg border border-zinc-700 border-b-zinc-800  bg-zinc-800 py-2 text-sm px-4 ">
            Nota #1
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-zinc-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div>
        <div className="flex gap-4 border-b border-zinc-700 bg-zinc-800 py-3 px-4 text-zinc-400">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
        </div>

        <div className="h-full flex-grow">
          <textarea placeholder="Escribe una nota" className="w-full h-full outline-none bg-transparent p-4 text-zinc-300 placeholder:text-zinc-600"></textarea>
        </div>
      </div>
    </Window>
  );
};

export default Notes;
