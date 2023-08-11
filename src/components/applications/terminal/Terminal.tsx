import Window from "@/components/window/Window";

interface Props {}

const Terminal = ({}: Props) => {
  return (
    <Window title="Terminal" size={700}>
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