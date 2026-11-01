import type { Post } from "../drizzle/schema";

export const SITE_URL = "https://stvarnaslika.life";
export const DEFAULT_IMAGE = `${SITE_URL}/images/hero-brain.jpg`;

export const STATIC_PAGES = [
  {
    path: "/",
    title: "Stvarna Slika — Psihologija, psiha i svijest",
    description:
      "Neovisni prostor za istraživanje psihe, svijesti i ljudskog ponašanja. Članci iz psihologije, kritičke analize i autorski materijali.",
  },
  {
    path: "/o-nama",
    title: "O autoru i projektu | Stvarna Slika",
    description:
      "Upoznajte Luku Anića-Antića i projekt Stvarna Slika: istraživanje psihologije, svijesti i čovjeka uz kritičko promišljanje dokaza.",
  },
  {
    path: "/psihologija",
    title: "Psihologija — Jung, emocije i ponašanje | Stvarna Slika",
    description:
      "Istražite Jungove arhetipove, emocije, traumu i obrasce ponašanja. Edukativni sadržaji o analitičkoj i kliničkoj psihologiji.",
  },
  {
    path: "/parapsihologija",
    title: "Parapsihologija i teorije svijesti | Stvarna Slika",
    description:
      "Kritički pogled na parapsihologiju, ESP, intuiciju i teorije svijesti: istraživanja, pretpostavke i granice dostupnih dokaza.",
  },
  {
    path: "/alternativni-pristupi",
    title: "Alternativni pristupi, meditacija i snovi | Stvarna Slika",
    description:
      "Istražite meditaciju, lucidne snove i integrativne pristupe razumijevanju psihe, uz razlikovanje iskustava, hipoteza i znanstvenih dokaza.",
  },
  {
    path: "/blog",
    title: "Blog — Članci o psihologiji i svijesti | Stvarna Slika",
    description:
      "Čitajte istraživačke članke o psihologiji, parapsihologiji i alternativnim pristupima razumijevanju ljudske psihe i svijesti.",
  },
  {
    path: "/kontakt",
    title: "Kontakt | Stvarna Slika",
    description:
      "Javite se autoru projekta Stvarna Slika za pitanja o člancima, istraživačkim temama, suradnji i objavljenim materijalima.",
  },
  {
    path: "/alati",
    title: "Alati — iDoctor AI asistent | Stvarna Slika",
    description:
      "Istražite iDoctor AI asistent za edukativna pitanja o psihologiji, parapsihologiji i istraživanju psihe. AI nije zamjena za stručnu pomoć.",
  },
  {
    path: "/biblioteka",
    title: "Biblioteka — PDF-ovi i prezentacije | Stvarna Slika",
    description:
      "Preuzmite autorske PDF-ove, prezentacije i istraživačke materijale Luke Anića-Antića iz psihologije, mentalnog zdravlja i svijesti.",
  },
];

export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type: "website" | "article";
  robots: string;
  structuredData: Record<string, unknown>[];
}

export function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    char =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!
  );
}

// JSON embedded in HTML must not be able to close its own script element.
export function serializeForHtml(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function getPageSeo(
  pathname: string,
  post?: Post | null,
  status = 200
): PageSeo {
  const page = STATIC_PAGES.find(page => page.path === pathname);
  const article =
    pathname.startsWith("/blog/") && post?.published === "published"
      ? post
      : null;
  const noindex = status !== 200 || (!page && !article);
  const title = article
    ? article.seoTitle?.trim() || `${article.title} | Stvarna Slika`
    : (page?.title ??
      (pathname.startsWith("/admin")
        ? "Administracija | Stvarna Slika"
        : "Stranica nije pronađena | Stvarna Slika"));
  const description = article
    ? article.seoDescription?.trim() ||
      article.excerpt?.trim() ||
      article.content
        .replace(/[#*_`\[\]]/g, "")
        .replace(/\s+/g, " ")
        .slice(0, 160)
    : (page?.description ??
      "Tražena stranica nije dostupna. Istražite članke i materijale na stranici Stvarna Slika.");
  const canonical = `${SITE_URL}${article ? `/blog/${encodeURIComponent(article.slug)}` : pathname}`;
  const image = article?.imageUrl || DEFAULT_IMAGE;
  const structuredData: Record<string, unknown>[] = noindex
    ? []
    : [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: title,
          description,
          inLanguage: "hr",
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
      ];
  if (article)
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description,
      url: canonical,
      mainEntityOfPage: { "@id": `${canonical}#webpage` },
      image,
      inLanguage: "hr",
      datePublished: new Date(article.createdAt).toISOString(),
      dateModified: new Date(article.updatedAt).toISOString(),
      publisher: {
        "@type": "Organization",
        name: "Stvarna Slika",
        url: SITE_URL,
      },
    });
  if (pathname === "/")
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Stvarna Slika",
      url: `${SITE_URL}/`,
      inLanguage: "hr",
    });
  return {
    title,
    description,
    canonical,
    image,
    type: article ? "article" : "website",
    robots: noindex ? "noindex, follow" : "index, follow",
    structuredData,
  };
}

export function renderSeoHead(seo: PageSeo) {
  const meta = (key: string, value: string, property = false) =>
    `<meta ${property ? "property" : "name"}="${key}" content="${escapeHtml(value)}" data-seo />`;
  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" data-seo />`,
    meta("description", seo.description),
    meta("robots", seo.robots),
    meta("og:type", seo.type, true),
    meta("og:title", seo.title, true),
    meta("og:description", seo.description, true),
    meta("og:url", seo.canonical, true),
    meta("og:image", seo.image, true),
    meta("og:locale", "hr_HR", true),
    meta("og:site_name", "Stvarna Slika", true),
    meta("twitter:card", "summary_large_image"),
    meta("twitter:title", seo.title),
    meta("twitter:description", seo.description),
    meta("twitter:image", seo.image),
    `<script type="application/ld+json" data-seo>${serializeForHtml(seo.structuredData)}</script>`,
  ].join("\n");
}
