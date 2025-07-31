"use client";
import ProfileHeader from "@/views/player/player-header";
import ProfileActions from "@/views/player/player-actions";
import ProfileTabs from "@/views/player/player-tabs";
import { useAthlete } from "@/state/useAthlete";
import { useParams } from "next/navigation";
import PlayerSkeleton from "@/views/player/player-skeleton";
import { BackButton } from "@/layout/back-button";

export default function AthleteProfilePage() {
  const params = useParams();
  const { data: athleteData, isLoading } = useAthlete(params.id as string);

  if (isLoading || !athleteData?.payload) {
    return <PlayerSkeleton />;
  }

  return (
    <div className='text-white p-6 font-sans'>
      <div className='mx-auto'>
        <BackButton />
        <ProfileHeader athlete={athleteData?.payload} />
        <ProfileActions athlete={athleteData?.payload} />
        <ProfileTabs athlete={athleteData?.payload} />
      </div>
    </div>
  );
}
