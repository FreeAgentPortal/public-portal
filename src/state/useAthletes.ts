// hooks/useAthlete.ts
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Athlete } from "@/types/athlete";
import { filter, s } from "framer-motion/client";
function formatCustomQuery(filters?: Record<string, string>): string | null {
  // Initialize filters with active=true
  //if (!filters) {
  //  return null;
  //}
  const enforcedFilters = {
    active: "true",
    ...filters, //Spread input filters, allowing overrides but keeping active=true
  };

  return Object.entries(filters)
    .map(([key, value]) => {
      const safeValue = /\s/.test(value) ? `"${value}"` : value;
      return `${key};${safeValue}`;
    })
    .join("|");
}
export function useAthletes(
  page: string,
  search?: string,
  filters?: Record<string, string>
) {
  delete filters?.page;
  delete filters?.search;
  const customQuery = formatCustomQuery(filters);
  const queryString = `pageNumber=${page}${search ? `&keyword=${search}` : ""}${
    customQuery ? `&filterOptions=${customQuery}` : ""
  }`;

  return useQuery<ApiResponse<Athlete[]>>({
    queryKey: ["athletes", page, filters, search],
    queryFn: () => apiFetch<Athlete[]>(`/athlete?${queryString}`),
  });
}
