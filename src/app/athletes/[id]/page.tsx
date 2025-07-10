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

export default function AthleteProfilePage() {
  const params = useParams();
  const { data: athlete, isLoading } = useAthlete(params.id as string);

  const searchParams = useSearchParams();

  if (isLoading || !athlete) {
    return <PlayerSkeleton />;
  }

  const tabs = [
    { name: "Metrics", slug: "metrics" },
    { name: "Measurements", slug: "measurements" },
    { name: "Rating", slug: "rating" },
    { name: "Videos", slug: "videos" },
    { name: "Photos", slug: "photos" },
  ] as const;

  type TabSlug = (typeof tabs)[number]["slug"];

  const slugParam = searchParams.get("tab");
  const currentTabSlug: TabSlug = tabs.some((t) => t.slug === slugParam)
    ? (slugParam as TabSlug)
    : "metrics";

  const actions = ["Express Interest", "Boost Profile"];

  return (
    <div className='text-white p-6 font-sans'>
      <div className='mx-auto'>
        <BackButton />
        <ProfileHeader athlete={athlete} />
        <ProfileActions actions={actions} />
        <ProfileTabs
          tabs={tabs}
          currentTabSlug={currentTabSlug}
          searchParams={searchParams}
        />
        {currentTabSlug === "metrics" && <ProfileMetrics athlete={athlete} />}
        {currentTabSlug === "measurements" && (
          <ProfileMeasurements athlete={athlete} />
        )}
        {currentTabSlug === "rating" && (
          <h1 className='text-3xl font-bold'>Rating: {athlete.rating}</h1>
        )}
        {currentTabSlug === "videos" && <ProfileVideos athelte={athlete} />}
      </div>
    </div>
  );
}
