import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { LegalDocument } from "@/types/legal";

export function useLegal(type: string) {
  return useQuery<ApiResponse<LegalDocument>>({
    queryKey: ["news"],
    queryFn: () => apiFetch<LegalDocument>(`/auth/legal/${type}`),
  });
}
