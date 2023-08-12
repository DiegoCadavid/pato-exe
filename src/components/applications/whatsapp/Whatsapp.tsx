import Window from "@/components/window/Window";
import { WindowProps } from "@/types";

interface Props extends WindowProps {} 

const Whatsapp = ({
  title,
  index,
  lastPos
}: Props) => {
  return (
    <Window title={title}  index={index} lastPos={lastPos}>
      <div className="flex h-full text-zinc-300">
        {/* Left side */}
        <div className="fex-shrink-0 w-[250px] bg-slate-800 border-r border-slate-700 ">
          {/* profile header */}
          <div className="flex items-center justify-between gap-2 bg-slate-700  p-2">
            <div className="flex items-center gap-2">
              <img
                src="https://github.com/ikurotime.png"
                alt="profile image"
                className="h-8 w-8 rounded-full"
              />
              <p className="font-medium text-white">Kuro</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-zinc-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>

          <div role="button" className="flex gap-2 p-2 hover:bg-slate-200/5">
            <img
              src="https://th.bing.com/th/id/OIP.nEptUZ12oEQtB7k5jkPSrQHaHa?pid=ImgDet&w=818&h=818&rs=1"
              alt="profile image"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex-grow">
              <div className="flex items-baseline justify-between">
                <p>name</p>
                <p className="text-sm opacity-60">6:25 a. m.</p>
              </div>
              <p className="text-sm opacity-60">Heey!! mira esto</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-grow flex-col bg-slate-900">
          {/* Header */}
          <div className="flex items-center gap-2 bg-slate-800 py-2 px-4">
            <img
              src="https://th.bing.com/th/id/OIP.nEptUZ12oEQtB7k5jkPSrQHaHa?pid=ImgDet&w=818&h=818&rs=1"
              alt="profile image"
              className="h-8 w-8 rounded-full"
            />
            <p>Name</p>
          </div>

          {/* Content */}
          <div className="flex flex-grow flex-col items-start gap-2 p-4">
            <div className="rounded-lg bg-slate-800 p-3">
              <p>
                Hola!!{" "}
                <span className="text-xs text-slate-500">6:31 a. m.</span>
              </p>
            </div>
            <div className="max-w-md rounded-lg bg-slate-800 p-3">
              <p>
                Estaba viendo algunas cosas por internet y descubri algunas
                cosas super geniales! miralo 🤓☝️{" "}
                <span className="text-xs text-slate-500">6:31 a. m.</span>
              </p>
            </div>

            <div className="max-w-md rounded-lg bg-slate-800 p-2">
              <div className="flex items-center gap-2 rounded-lg bg-slate-900 py-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10 text-slate-400">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>

                <div>
                  <p>Pato.exe</p>
                  <p className="text-xs text-slate-500">exe - 12kb</p>
                </div>

                <button className="ml-4  flex h-6 w-6 items-center justify-center rounded-full border border-slate-500 text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4">
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p>
                <span className="text-[12px] text-slate-500">6:31 a. m.</span>
              </p>
            </div>
          </div>


          {/* Options */}
          <div className="flex justify-center items-center pb-2 gap-2">
            <button className="px-4 py-2 rounded-full  bg-slate-700">Pato 👍</button>
            <button className="px-4 py-2 rounded-full  bg-slate-700">Hola! Ya lo miro</button>
            <button className="px-4 py-2 rounded-full  bg-slate-700">Que es eso? 👀</button>
          </div>

          {/* Input */}
          <div>
            <div className="flex items-center gap-4 bg-slate-800 py-2 px-4 text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <input
                type="text"
                placeholder="Escribe un mensaje..."
                disabled
                className="flex-grow rounded-lg bg-slate-700 py-2 px-2 text-sm outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Whatsapp;
