import { useEffect } from "react";
import { useLocation } from "wouter";
import { getPageSeo, renderSeoHead } from "@shared/seo";
import { trpc } from "@/lib/trpc";

export default function PageSeo() {
  const [pathname] = useLocation();
  const match = /^\/blog\/([^/]+)$/.exec(pathname);
  let slug = "";
  try {
    slug = match ? decodeURIComponent(match[1]) : "";
  } catch {
    /* Invalid URL: keep noindex metadata. */
  }
  const { data: post, error } = trpc.blog.getBySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  useEffect(() => {
    const seo = getPageSeo(pathname, post, error ? 404 : 200);
    document.title = seo.title;
    document.head.querySelectorAll("[data-seo]").forEach(node => node.remove());
    const template = document.createElement("template");
    template.innerHTML = renderSeoHead(seo).replace(
      /<title>[\s\S]*?<\/title>\n?/,
      ""
    );
    document.head.append(template.content);
  }, [pathname, post, error]);

  return null;
}
