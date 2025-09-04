import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { Team } from "@/types/team";

export function useTeamLeagues() {
  return useQuery<ApiResponse<Team[]>>({
    queryKey: ["teams"],
    queryFn: () => apiFetch<Team[]>(`/team`),
  });
}
