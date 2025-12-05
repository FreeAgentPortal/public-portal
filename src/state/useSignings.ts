import { useQuery } from "@tanstack/react-query";
import { getSignings } from "@/lib/api";

export const useSignings = (limit?: number) => {
  return useQuery({
    queryKey: limit ? ["signings", limit] : ["signings"],
    queryFn: () => getSignings(limit),
  });
};
