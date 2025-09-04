"use client";

import { useAthletes } from "@/state/useAthletes";
import AthleteCard from "../../components/athlete-card";
import AthleteSkeletonCard from "./athlete-skeleton-card";
import PaginationControls from "./pagination-controls";

type Props = {
  page: string;
  filters?: Record<string, string>;
  search?: string;
  updateQuery: (updates: Record<string, string>) => void;
};

export default function AthleteGrid(props: Props) {
  const { data, isLoading } = useAthletes(
    props.page,
    props.search,
    props.filters
  );

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
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {data.payload
          .filter((a) => a.profileImageUrl)
          .map((athlete, i) => (
            <AthleteCard key={i} athlete={athlete} />
          ))}
      </div>
      <PaginationControls
        currentPage={Number(props.page)}
        isNextPage={data.metadata.pages > Number(props.page)}
        onPageChange={(p) =>
          props.updateQuery({ ...props.filters, page: String(p) })
        }
      />
    </>
  );
}
