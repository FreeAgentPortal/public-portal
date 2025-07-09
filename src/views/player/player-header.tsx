type Props = {
  name: string;
  position: string;
  height: string;
  weight: string;
  gradClass: string;
  recruitRating: string;
  ranking: string;
};

export default function ProfileHeader(props: Props) {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-24 h-24 bg-white/20 rounded-full border border-white/30' />
      <div>
        <h1 className='text-2xl font-bold text-white drop-shadow-md'>
          {props.name}
        </h1>
        <p className='text-white/80'>
          {props.position} | {props.height} | {props.weight} | Class of{" "}
          {props.gradClass}
        </p>
        <p className='text-sm text-white/60'>
          {props.recruitRating} | {props.ranking}
        </p>
      </div>
    </div>
  );
}
