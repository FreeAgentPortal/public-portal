import { useNotificationStore } from "@/lib/notifications";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
      throwOnError(error, query) {
        const message = error?.message || "Something went wrong loading data.";
        queueMicrotask(() => {
          useNotificationStore
            .getState()
            .showNotification({ type: "error", message });
        });
        return false;
      },
    },
    mutations: {
      retry: 1,
    },
  },
});
