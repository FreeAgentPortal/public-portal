import { Athlete } from "@/types/athlete";
import Image from "next/image";
import Link from "next/link";

type Props = {
  athlete: Athlete;
};

export default function AthleteCard(props: Props) {
  return (
    <Link href={`/athletes/${props.athlete._id}`}>
      <div className='card bg-base-100/75 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-inner hover:shadow-xl hover:scale-[101%] transition-all duration-300 ease-in-out'>
        <Image
          src={
            props.athlete.profileImageUrl ||
            `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
          }
          alt={props.athlete.fullName}
          width={96}
          height={96}
          className='rounded-full w-24 h-24 mx-auto object-cover bg-black'
        />
        <h2 className='mt-2 text-center font-semibold'>
          {props.athlete.fullName}
        </h2>

        {props.athlete.positions.map(
          (position, index) =>
            position.name && (
              <p key={index} className='text-center text-sm opacity-70'>
                {position.name ?? ""} ({position.abbreviation ?? ""})
              </p>
            )
        )}
        {props.athlete.college && (
          <p className='text-center text-sm opacity-70'>
            {props.athlete.college}
          </p>
        )}
      </div>
    </Link>
  );
}
