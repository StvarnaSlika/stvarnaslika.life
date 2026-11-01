import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import { pathToFileURL } from "node:url";
import viteConfig from "../../vite.config";
import { createPageHandler } from "../seo-render";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use(
    createPageHandler(
      async () => {
        const clientTemplate = path.resolve(
          import.meta.dirname,
          "../..",
          "client",
          "index.html"
        );

        // always reload the index.html file from disk incase it changes
        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`
        );
        return vite.transformIndexHtml("/", template);
      },
      async () => {
        const entry = await vite.ssrLoadModule("/src/entry-server.tsx");
        return entry.render;
      }
    )
  );
}

export function serveStatic(app: Express) {
  // The production server is bundled into dist/index.js.
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // /biblioteka is both a page and a public download directory. Let the page
  // handler serve it instead of redirecting to /biblioteka/ and creating a loop.
  app.use(express.static(distPath, { index: false, redirect: false }));

  const entryUrl = pathToFileURL(
    path.resolve(import.meta.dirname, "server", "entry-server.js")
  ).href;
  app.use(
    createPageHandler(
      () => fs.promises.readFile(path.resolve(distPath, "index.html"), "utf-8"),
      async () => (await import(entryUrl)).render
    )
  );
}
