interface Props {}

const Dialogues = ({}: Props) => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center  flex-col  items-center pb-4">
      <div className="rounded-2xl border border-zinc-600 bg-zinc-800/80 p-4 text-zinc-300 backdrop-blur-lg flex items-center gap-4 max-w-3xl">
        <img
          src="https://th.bing.com/th/id/OIP.Jz_Uy2S2plqo_Ia5C_G3PQAAAA?pid=ImgDet&rs=1"
          alt="dialogue avatar"
          className="w-12 h-12 rounded-full object-cover object-center"
        />

        <p>Era obvio que era un virus, como pudiste caer en eso .-. </p>
      </div>

      <div className="flex gap-2 justify-center mt-2">
        <button className="px-4 py-2 bg-zinc-800/80 backdrop-blur-lg rounded-2xl text-zinc-300 border border-zinc-600">...</button>
        <button className="px-4 py-2 bg-zinc-800/80 backdrop-blur-lg rounded-2xl text-zinc-300 border border-zinc-600">¿Quien eres?</button>
        <button className="px-4 py-2 bg-zinc-800/80 backdrop-blur-lg rounded-2xl text-zinc-300 border border-zinc-600">asdoñnj</button>

      </div>
    </div>
  );
};

export default Dialogues;
