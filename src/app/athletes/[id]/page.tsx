"use client";
import ProfileHeader from "@/views/player/player-header";
import ProfileActions from "@/views/player/player-actions";
import ProfileTabs from "@/views/player/player-tabs";
import ProfileMetrics from "@/views/player/player-metrics";
import ProfileVideos from "@/views/player/player-videos";
import { useAthlete } from "@/state/useAthlete";
import { useParams, useSearchParams } from "next/navigation";
import PlayerSkeleton from "@/views/player/player-skeleton";
import ProfileMeasurements from "@/views/player/player-measurements";
import { BackButton } from "@/layout/back-button";
import { useMe } from "@/state/useMe";

export default function AthleteProfilePage() {
  const params = useParams();
  const { data: athleteData, isLoading } = useAthlete(params.id as string);
  const { data: user, isLoading: userLoading } = useMe();

  const searchParams = useSearchParams();

  if (isLoading || !athleteData?.payload || userLoading) {
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
