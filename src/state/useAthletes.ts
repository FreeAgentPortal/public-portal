// hooks/useAthlete.ts
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Athlete } from "@/types/athlete";
import { filter, s } from "framer-motion/client";
function formatCustomQuery(filters?: Record<string, string>): string | null {
  if (!filters) {
    return null;
  }
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
  const modifiedFilters: Record<string, string> = {
    ...filters,
    isActive: "true",
  };
  delete modifiedFilters.page;
  delete modifiedFilters.search;
  const customQuery = formatCustomQuery(modifiedFilters);
  const queryString = `pageNumber=${page}${search ? `&keyword=${search}` : ""}${
    customQuery ? `&filterOptions=${customQuery}` : ""
  }`;

  return useQuery<ApiResponse<Athlete[]>>({
    queryKey: ["athletes", page, filters, search],
    queryFn: () => apiFetch<Athlete[]>(`/athlete?${queryString}`),
  });
}
