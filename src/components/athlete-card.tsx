import { Athlete } from "@/types/athlete";
import Image from "next/image";
import Link from "next/link";

type Props = {
  athlete: Athlete;
};

export default function AthleteCard({ athlete }: Props) {
  const positions =
    athlete.positions?.map((pos) => pos.abbreviation).filter(Boolean) ?? [];

  return (
    <Link href={`/athletes/${athlete._id}`}>
      <div
        className='card bg-base-100/75 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[101%] transition-all duration-300 ease-in-out 
        flex flex-col items-center justify-between h-64'
      >
        {/* 👆 h-64 gives a consistent card height */}

        {/* Profile Image */}
        <Image
          src={
            athlete.profileImageUrl ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={athlete.fullName}
          width={96}
          height={96}
          className='rounded-full w-24 h-24 object-cover bg-black'
        />

        {/* Name */}
        <h2 className='mt-3 text-center font-semibold text-lg text-white line-clamp-1'>
          {athlete.fullName}
        </h2>

        {/* College */}
        {athlete.college && (
          <p className='text-center text-sm text-gray-300 line-clamp-1 mb-3'>
            {athlete.college}
          </p>
        )}

        {/* Positions */}
        {positions.length > 0 && (
          <div className='mt-2 flex flex-wrap justify-center gap-2'>
            {positions.map((abbr, index) => (
              <span
                key={index}
                className='px-2 py-1 text-xs font-medium uppercase bg-white/10 text-white rounded-md'
              >
                {abbr}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
