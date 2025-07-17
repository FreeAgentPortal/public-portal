import { useQuery } from "@tanstack/react-query";
import { apiFetch, normalFetch } from "@/lib/api";
import { NewsItem } from "@/types/news";

export function useNews() {
  return useQuery<ApiResponse<NewsItem[]>>({
    queryKey: ["news"],
    queryFn: () => apiFetch<NewsItem[]>(`/feed/articles`),
  });
}
