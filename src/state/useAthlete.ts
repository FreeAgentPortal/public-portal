// hooks/useAthlete.ts
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Athlete } from "@/types/athlete";

export function useAthlete(id: string) {
  return useQuery({
    queryKey: ["athlete", id],
    queryFn: () => apiFetch<Athlete>(`/athlete/${id}`),
    enabled: !!id,
  });
}
