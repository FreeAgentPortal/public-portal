type Props = {
  actions: string[];
};
export default function ProfileActions(props: Props) {
  return (
    <div className='mt-4 flex gap-4'>
      {props.actions.map((action, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-lg font-medium shadow-md ${
            i === 0
              ? "bg-white/10 hover:bg-white/20"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {action}
        </button>
      ))}
    </div>
  );
}
