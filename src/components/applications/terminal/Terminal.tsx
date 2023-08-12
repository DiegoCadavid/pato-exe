import Window from "@/components/window/Window";
import { WindowProps } from "@/types";

interface Props extends WindowProps {}

const Terminal = (props: Props) => {
  return (
    <Window {...props}>
      <div className="p-4 h-full bg-zinc-950 text-zinc-200">
        <p>Microsoft Windows [Version 10.4.58405.09] </p>
        <p>(c) Microsoft Corporation. Todos los derechos reservador </p>
        <br />
        <p>C:\users\diego&gt;</p>

      </div>
    </Window>
  )
}

export default Terminal