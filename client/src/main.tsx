import { UNAUTHED_ERR_MSG } from "@shared/const";
import { hydrate } from "@tanstack/react-query";
import { TRPCClientError } from "@trpc/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import superjson from "superjson";
import App from "./App";
import { getLoginUrl } from "./const";
import "./index.css";
import { AppProviders, createQueryClient, createTrpcClient } from "./providers";

const queryClient = createQueryClient();
const state = document.getElementById("app-state")?.textContent;
if (state && state !== "null")
  hydrate(queryClient, superjson.deserialize(JSON.parse(state)));

const redirectToLoginIfUnauthorized = (error: unknown) => {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;

  const isUnauthorized = error.message === UNAUTHED_ERR_MSG;

  if (!isUnauthorized) return;

  window.location.href = getLoginUrl();
};

queryClient.getQueryCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.query.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Query Error]", error);
  }
});

queryClient.getMutationCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.mutation.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Mutation Error]", error);
  }
});

const app = (
  <AppProviders trpcClient={createTrpcClient()} queryClient={queryClient}>
    <App />
  </AppProviders>
);
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
