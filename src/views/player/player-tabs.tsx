"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import ProfileMetrics from "./player-metrics";
import ProfileMeasurements from "./player-measurements";
import { Athlete } from "@/types/athlete";
import ProfileVideos from "./player-videos";
import clsx from "clsx";
import { Lock, LockIcon } from "lucide-react";
import { useMe } from "@/state/useMe";
import ProfileRating from "./player-rating";
type Props = {
  athlete: Athlete;
};
export default function ProfileTabs({ athlete }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: user, isLoading } = useMe();

  const tabs = [
    {
      name: "Metrics",
      slug: "metrics",
      component: <ProfileMetrics athlete={athlete} />,
    },
    {
      name: "Measurements",
      slug: "measurements",
      component: <ProfileMeasurements athlete={athlete} />,
    },
    {
      name: "Rating",
      slug: "rating",
      component: <ProfileRating athlete={athlete} />,
    },
    {
      name: "Videos",
      slug: "videos",
      component: <ProfileVideos athelte={athlete} />,
    },
  ] as const;

  type TabSlug = (typeof tabs)[number]["slug"];

  const slugParam = searchParams.get("tab");
  const currentTabSlug: TabSlug = tabs.some((t) => t.slug === slugParam)
    ? (slugParam as TabSlug)
    : "metrics";

  const activeTab = useMemo(() => {
    const index = tabs.findIndex((t) => t.slug === currentTabSlug);
    return index >= 0 ? index : 0;
  }, [currentTabSlug]);

  const setActiveTab = (index: number) => {
    const slug = tabs[index].slug;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", slug);
    router.replace(`?${newParams.toString()}`);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div className='mt-6 border-b border-white/20 flex gap-6 text-sm '>
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`pb-2 cursor-pointer ${
              i === activeTab
                ? "border-b-2 border-blue-400 text-white"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => {
              setActiveTab(i);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div
        className={clsx("mt-6 relative", {
          "p-8": !user?.payload?._id,
        })}
      >
        {!user?.payload._id && (
          <div className='absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl flex flex-col items-center justify-center'>
            <Lock className='w-12 h-12 text-white m-3' />
            <h2 className='text-lg font-semibold mb-2 text-white/90'>
              You must be logged in to see this content
            </h2>
          </div>
        )}
        <h2 className='text-lg font-semibold mb-2 text-white/90'>
          {tabs[activeTab].name}
        </h2>
        {tabs[activeTab].component}
      </div>
    </div>
  );
}
