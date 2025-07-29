import { Athlete } from "@/types/athlete";
import Image from "next/image";
import { Gem } from "lucide-react";
import { useMe } from "@/state/useMe";

type Props = {
  athlete: Athlete;
};

export default function ProfileHeader({ athlete }: Props) {
  const position = athlete.positions?.[0];
  const positionText =
    position?.name && position?.abbreviation
      ? `${position.name} (${position.abbreviation})`
      : null;

  const weight = athlete.measurements?.["weight"];
  const height = athlete.measurements?.["height"];

  const weightText = weight ? `${weight} lbs` : null;
  const heightText = height ? `${height} in` : null;

  const infoText = [positionText, weightText, heightText]
    .filter(Boolean)
    .join(" | ");

  const { data: user, isLoading } = useMe();
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
          <p className='text-white/80'>{infoText}</p>
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
        {athlete.diamondRating &&
          athlete.diamondRating > 0 &&
          user?.payload?.profileRefs?.scout && (
            <div className='flex items-center gap-1'>
              {[...Array(5)].map((_, i) => (
                <Gem
                  key={i}
                  size={25}
                  className={
                    athlete.diamondRating && i < athlete.diamondRating
                      ? "text-cyan-400"
                      : "text-white/20"
                  }
                  aria-hidden='true'
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
