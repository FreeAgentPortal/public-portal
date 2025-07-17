import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import type { Athlete } from "@/types/athlete";

export function useMe() {
  return useQuery<ApiResponse<Athlete>>({
    queryKey: ["me"],
    queryFn: () => apiFetch<Athlete>("/auth/me"),
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
  });
}
