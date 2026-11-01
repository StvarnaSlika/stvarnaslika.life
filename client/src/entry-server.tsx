import { renderToString } from "react-dom/server";
import { dehydrate } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { Router } from "wouter";
import superjson from "superjson";
import type { Post } from "../../drizzle/schema";
import App from "./App";
import { trpc } from "./lib/trpc";
import { AppProviders, createQueryClient, createTrpcClient } from "./providers";

export interface RenderData {
  pathname: string;
  search: string;
  posts?: Post[];
  slug?: string;
  post?: Post | null;
}

export function render(data: RenderData) {
  const queryClient = createQueryClient();
  if (data.posts)
    queryClient.setQueryData(
      getQueryKey(trpc.blog.list, undefined, "query"),
      data.posts
    );
  if (data.slug)
    queryClient.setQueryData(
      getQueryKey(trpc.blog.getBySlug, { slug: data.slug }, "query"),
      data.post ?? null
    );
  try {
    const html = renderToString(
      <AppProviders queryClient={queryClient} trpcClient={createTrpcClient()}>
        <Router ssrPath={data.pathname} ssrSearch={data.search}>
          <App />
        </Router>
      </AppProviders>
    );
    return { html, state: superjson.serialize(dehydrate(queryClient)) };
  } finally {
    queryClient.clear();
  }
}
