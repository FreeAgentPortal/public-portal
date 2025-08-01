import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { LegalDocument } from "@/types/legal";

export function useAllLegal(type: string) {
  return useQuery<ApiResponse<LegalDocument[]>>({
    queryKey: ["legal"],
    queryFn: () => apiFetch<LegalDocument[]>(`/auth/legal`),
  });
}

export function useLegalType(type: string) {
  return useQuery<ApiResponse<LegalDocument>>({
    queryKey: ["legal", type],
    queryFn: () => apiFetch<LegalDocument>(`/auth/legal/${type}`),
  });
}
