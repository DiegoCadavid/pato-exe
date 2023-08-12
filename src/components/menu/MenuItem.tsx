interface Props {
  showRight?: boolean;
  title: string;
  commandKey?: string;
  children: React.ReactNode;
}

const MenuItem = ({ title ,showRight, children, commandKey }: Props) => {
  return (
    <button className="flex items-center justify-between rounded px-2 py-1 hover:bg-zinc-400/20 text-sm">
      <div className="flex items-center gap-2">
        {children}
        {title}
      </div>

     { showRight && <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>}
      {
        commandKey && <p className="text-xs">{commandKey}</p>
      }
    </button>
  );
};

export default MenuItem;
