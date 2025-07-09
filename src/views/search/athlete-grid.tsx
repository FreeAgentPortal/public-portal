"use client";

import { useAthletes } from "@/state/useAthletes";
import AthleteCard from "./athlete-card";
import AthleteSkeletonCard from "./athlete-skeleton-card";

type Props = {
  page: number;
  filters: Record<string, string>;
};

export default function AthleteGrid(props: Props) {
  const { data, isLoading } = useAthletes(props.page, props.filters);

  if (isLoading) {
    return (
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {Array.from({ length: 8 }).map((_, i) => (
          <AthleteSkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!data) {
    return <p className='text-white text-center'>No athletes found.</p>;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
      {data.map((athlete) => (
        <AthleteCard key={athlete._id} athlete={athlete} />
      ))}
    </div>
  );
}
