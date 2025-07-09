import { Athlete } from "@/types/athlete";
import Link from "next/link";

type Props = {
  athlete: Athlete;
};

export default function AthleteCard(props: Props) {
  const position = props.athlete.positions?.[0] ?? "Unknown";
  const avatarUrl = `https://api.dicebear.com/7.x/open-peeps/svg?seed=${props.athlete.fullName}`;

  return (
    <Link href={`/athletes/${props.athlete._id}`}>
      <div className='bg-base-100 p-4 rounded-xl shadow hover:shadow-lg transition'>
        <img
          src={avatarUrl}
          alt={props.athlete.fullName}
          className='rounded-full w-24 h-24 mx-auto'
        />
        <h2 className='mt-2 text-center font-semibold'>
          {props.athlete.fullName}
        </h2>
        <p className='text-center text-sm opacity-70'>{position}</p>
      </div>
    </Link>
  );
}
