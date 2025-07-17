import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { SubscriptionPlan } from "@/types/plan";

export function usePlans() {
  return useQuery<ApiResponse<SubscriptionPlan[]>>({
    queryKey: ["plans"],
    queryFn: () => apiFetch<SubscriptionPlan[]>("/auth/plan"),
  });
}
