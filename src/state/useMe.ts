import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { User } from "@/types/user";

export function useMe() {
  return useQuery<ApiResponse<User>>({
    queryKey: ["me"],
    queryFn: () => apiFetch<User>("/auth/me"),
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
  });
}
