import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import { trpc } from "./lib/trpc";
import { AnimatePresence } from "framer-motion";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: { queries: { staleTime: 60_000 } },
  });
}

export function createTrpcClient() {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: "/api/trpc",
        transformer: superjson,
        fetch(input, init) {
          return globalThis.fetch(input, { ...init, credentials: "include" });
        },
      }),
    ],
  });
}

export function AppProviders({
  children,
  queryClient,
  trpcClient,
}: {
  children: ReactNode;
  queryClient: QueryClient;
  trpcClient: ReturnType<typeof createTrpcClient>;
}) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {/* First-render content must stay visible even when JavaScript is unavailable. */}
        <AnimatePresence initial={false}>{children}</AnimatePresence>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
