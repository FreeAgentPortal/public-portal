// hooks/useAthlete.ts
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Athlete } from "@/types/athlete";

export function useAthletes(page: number, filters: Record<string, string>) {
  const query = new URLSearchParams({
    ...filters,
    page: String(page),
  }).toString();

  return useQuery<Athlete[]>({
    queryKey: ["athletes", page, filters],
    queryFn: () => apiFetch<Athlete[]>(`/athlete?${query}`),
  });
}
