type Props = {
  tabs: string[];
};
export default function ProfileTabs(props: Props) {
  return (
    <div className='mt-6 border-b border-white/20 flex gap-6 text-sm'>
      {props.tabs.map((tab, i) => (
        <span
          key={i}
          className={`pb-2 cursor-pointer ${
            i === 0
              ? "border-b-2 border-blue-400 text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}
