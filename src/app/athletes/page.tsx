"use client";
import { useAthletes } from "@/state/useAthletes";
import AthleteGrid from "@/views/search/athlete-grid";
import PaginationControls from "@/views/search/pagination-controls";
import SearchControls from "@/views/search/search-controls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Props = {};

const Search = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const allFilters = Object.fromEntries(searchParams.entries());
  const search = searchParams.get("search") || "";
  const page = searchParams.get("page") || "1";

  const updateQuery = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      router.push(`/athletes?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-3xl font-bold'>Search</h1>

      <SearchControls
        search={search}
        updateQuery={updateQuery}
        filters={allFilters}
      />
      <AthleteGrid
        page={page}
        filters={allFilters}
        search={search}
        updateQuery={updateQuery}
      />
    </div>
  );
};

export default Search;
