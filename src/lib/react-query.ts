// src/lib/react-query.ts
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnMount: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
