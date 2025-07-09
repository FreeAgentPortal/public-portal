"use client";
import ProfileHeader from "@/views/player/player-header";
import ProfileActions from "@/views/player/player-actions";
import ProfileTabs from "@/views/player/player-tabs";
import ProfileBio from "@/views/player/player-bio";
import ProfileMetrics from "@/views/player/player-metrics";
import ProfileVideos from "@/views/player/player-videos";
import { useAthlete } from "@/state/useAthlete";

export default function AthleteProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { data: athlete, isLoading } = useAthlete(params.id);

  if (isLoading || !athlete) {
    return <p className='text-white'>Loading athlete profile...</p>;
  }

  const performanceMetrics = [
    { name: "Yard Dash 40", value: athlete.metrics?.yardDash40 ?? "N/A" },
    { name: "Vertical Jump", value: athlete.metrics?.verticalJump ?? "N/A" },
    { name: "Bench Press", value: athlete.metrics?.benchPress ?? "N/A" },
    { name: "Cone Drill 3", value: athlete.metrics?.coneDrill3 ?? "N/A" },
    { name: "Broad Jump", value: athlete.metrics?.broadJump ?? "N/A" },
    { name: "Shuttle Run", value: athlete.metrics?.shuttleRun ?? "N/A" },
  ];

  const tabs = ["Bio", "Performance", "Videos", "Team Interactions"];
  const actions = ["Express Interest", "Boost Profile"];

  return (
    <div className='text-white p-6 font-sans'>
      <div className='mx-auto'>
        <ProfileHeader
          name={athlete.fullName}
          position={athlete.positions?.[0] ?? "N/A"}
          height={athlete.measurements?.height ?? "N/A"}
          weight={athlete.measurements?.weight ?? "N/A"}
          gradClass={new Date(athlete.birthdate).getFullYear().toString()}
          recruitRating={"4-Star Recruit"}
          ranking={"Top 10 QB Nationally"}
        />
        <ProfileActions actions={actions} />
        <ProfileTabs tabs={tabs} />
        <ProfileBio bio={athlete.bio ?? "No bio available."} />
        <ProfileMetrics performanceMetrics={performanceMetrics} />
        <ProfileVideos videos={athlete.highlightVideos ?? []} />
      </div>
    </div>
  );
}
