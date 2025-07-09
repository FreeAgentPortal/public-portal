"use client";
import AthleteGrid from "@/views/search/athlete-grid";
import PaginationControls from "@/views/search/pagination-controls";
import SearchControls from "@/views/search/search-controls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Props = {};

const Search = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const position = searchParams.get("position") || "";

  const updateQuery = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) =>
        value ? params.set(key, value) : params.delete(key)
      );
      router.push(`/athletes?${params}`);
    },
    [router, searchParams]
  );

  return (
    <div className='p-6 space-y-6'>
      <SearchControls
        search={search}
        position={position}
        updateQuery={updateQuery}
      />
      <AthleteGrid page={page} filters={{ search, position }} />
      <PaginationControls
        currentPage={page}
        onPageChange={(p) => updateQuery({ page: String(p) })}
      />
    </div>
  );
};

export default Search;
