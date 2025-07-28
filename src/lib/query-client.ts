import { useNotificationStore } from "@/lib/notifications";
import { QueryClient } from "@tanstack/react-query";

const ignoredErrors = ["JWT validation failed"];

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
      throwOnError(error, query) {
        const message = error?.message || "Something went wrong loading data.";
        const isIgnored = ignoredErrors.some((ignoredError) =>
          message.includes(ignoredError)
        );

        if (!isIgnored) {
          queueMicrotask(() => {
            useNotificationStore
              .getState()
              .showNotification({ type: "error", message });
          });
        }
        return false;
      },
    },
    mutations: {
      retry: 1,
    },
  },
});
