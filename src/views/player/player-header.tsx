import { Athlete } from "@/types/athlete";
import Image from "next/image";
import { Gem } from "lucide-react";

type Props = {
  athlete: Athlete;
};

export default function ProfileHeader({ athlete }: Props) {
  const rating = athlete.rating ?? 3;
  return (
    <div className='flex items-center gap-4 mt-6'>
      <Image
        className='w-32 h-32 bg-white/20 rounded-full border border-white/30 object-cover'
        src={
          athlete.profileImageUrl ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }
        alt={athlete.fullName}
        width={120}
        height={120}
      />
      <div className='flex justify-between w-full sm:flex-row flex-col gap-3'>
        <div>
          <h1 className='text-2xl font-bold text-white drop-shadow-md'>
            {athlete.fullName}
          </h1>
          <p className='text-white/80'>
            {[
              athlete.positions[0]?.name && athlete.positions[0]?.abbreviation
                ? `${athlete.positions[0].name} (${athlete.positions[0].abbreviation})`
                : null,
              athlete.measurements.weight &&
                `${athlete.measurements.weight} lbs`,
              athlete.measurements.height &&
                `${athlete.measurements.height} in`,
            ]
              .filter(Boolean)
              .join(" | ")}
          </p>
          {athlete.college && (
            <p className='text-white/80'>{athlete.college}</p>
          )}
          {athlete.espnid && (
            <p className='text-white/80 badge mt-3'>
              <strong>ESPN ID:</strong> {athlete.espnid}
              {athlete.espnid}
            </p>
          )}
        </div>
        <div className='flex items-center gap-1'>
          {[...Array(5)].map((_, i) => (
            <Gem
              key={i}
              size={25}
              className={i < rating ? "text-cyan-400" : "text-white/20"}
              aria-hidden='true'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
