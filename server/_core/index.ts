import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { getPublishedPosts } from "../db";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // ===== GOOGLE SEARCH CONSOLE VERIFIKACIJA =====
  app.get("/google3611913d6b3cfaa1.html", (_req, res) => {
    res.set("Content-Type", "text/html");
    res.send("google-site-verification: google3611913d6b3cfaa1.html");
  });

  // ===== DINAMIČKI SITEMAP.XML =====
  app.get("/sitemap.xml", async (_req, res) => {
    const BASE_URL = "https://stvarnaslika.life";
    const now = new Date().toISOString();

    // Statičke stranice
    const staticPages = [
      { url: "/", priority: "1.0", changefreq: "weekly" },
      { url: "/o-nama", priority: "0.8", changefreq: "monthly" },
      { url: "/psihologija", priority: "0.9", changefreq: "weekly" },
      { url: "/parapsihologija", priority: "0.9", changefreq: "weekly" },
      { url: "/alternativni-pristupi", priority: "0.8", changefreq: "weekly" },
      { url: "/blog", priority: "0.9", changefreq: "daily" },
      { url: "/kontakt", priority: "0.6", changefreq: "monthly" },
    ];

    // Dinamički blog postovi
    let blogUrls = "";
    try {
      const posts = await getPublishedPosts();
      blogUrls = posts.map((post: any) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt ? new Date(post.updatedAt).toISOString() : now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join("");
    } catch (_e) {
      // Ako nema blog postova, nastavi bez njih
    }

    const staticUrls = staticPages.map(p => `
  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

    res.set("Content-Type", "application/xml");
    res.send(xml);
  });

  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
