# Stvarna Slika - Project TODO

## Setup & Infrastructure
- [x] Initialize project with web-db-user scaffold
- [x] Setup global CSS theme (dark premium, deep purple/indigo palette)
- [x] Add Google Fonts (Playfair Display + Inter + Crimson Text)
- [x] Configure SEO meta tags and structured data in index.html
- [x] favicon.svg
- [x] robots.txt

## Pages & Navigation
- [x] Premium responsive navigation bar (mobile hamburger + desktop)
- [x] Footer with links and quote
- [x] Početna (Home) - hero, intro, areas overview, stats, CTA
- [x] O nama (About) - mission, values, timeline, resources
- [x] Psihologija (Psychology) - Jung archetypes, clinical, philosophy, forensic
- [x] Parapsihologija (Parapsychology) - ESP, Orch-OR, Rhine, quantum biology, stvarnaslika.com topics
- [x] Alternativni pristupi (Alternative Approaches) - holistic healing, lucid dreams, quantum consciousness
- [x] Kontakt (Contact) - form with validation + email notification

## Features
- [x] Chatbot psihoterapeut (AI powered via LLM backend)
- [x] Contact form with tRPC backend + owner notification
- [x] YouTube video embeds in relevant sections (6 videos total)
- [x] Unsplash images integration (CDN uploaded - 10 images)
- [x] Animated scroll effects (framer-motion)
- [x] Mobile-first responsive design

## SEO & Performance
- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags (Facebook)
- [x] Twitter Cards
- [x] Structured data (JSON-LD) - Organization + WebSite
- [x] robots.txt
- [x] Canonical URLs

## Backend
- [x] tRPC router for contact form
- [x] tRPC router for chatbot (LLM integration)
- [x] Owner notification on contact form submit

## Testing
- [x] Vitest tests for contact form router (3 tests)
- [x] Vitest tests for chatbot router (2 tests)
- [x] TypeScript errors fixed (0 errors)

## Ažuriranja (v2)
- [x] Promijeniti dizajn na premium light temu
- [x] Zamijeniti uvodni video s https://youtu.be/rNh6fM6_hCo
- [x] Zamijeniti video u parapsihologiji s https://youtu.be/hfnF9Vu3hvI
- [x] Zamijeniti video o meditaciji/neuroznanosti s https://youtu.be/lPrz1NjHlV0
- [x] Zamijeniti fotografiju u O nama sekciji (Lukin portret)
- [x] Zamijeniti video u psihologiji s https://youtu.be/p-cKY-L4-mw
- [x] Zamijeniti sliku u psihologiji (C.G. Jung)
- [x] Ispraviti JSX greške u Parapsychology.tsx
- [x] Ažurirati sve stranice za light temu (bg-white, bg-muted, shadow-sm)
- [x] ThemeProvider promijenjen na defaultTheme="light"

## SEO Popravci (v3)
- [x] Smanjiti keywords na 3-8 (sa 11 na 6)
- [x] Ispraviti title na 30-60 znakova (sada 42 znaka)
- [x] Skratiti description na 50-160 znakova (sada 134 znaka)

## SEO Popravci (v4)
- [x] Dodati document.title useEffect u Home.tsx (42 znaka)
- [x] Dodati document.title useEffect u sve ostale stranice

## Blog/Članci CMS (v5)
- [x] DB schema: tablica `posts` (id, title, slug, excerpt, content, category, imageUrl, published, authorId, createdAt, updatedAt)
- [x] DB migracija i primjena
- [x] Backend: tRPC procedure (list, getBySlug, create, update, delete, publish/unpublish)
- [x] Javna Blog stranica (/blog) - popis članaka s filterom po kategoriji
- [x] Javna stranica članka (/blog/:slug) - puni tekst, SEO meta tagovi
- [x] Admin CMS panel (/admin/blog) - zaštićen, CRUD sučelje
- [x] Admin: Markdown editor za sadržaj članka
- [x] Integracija u navigaciju (Blog link u Navbar)
- [x] Demo članci za sve kategorije (3 objavljena) (psihologija, parapsihologija, alternativni pristupi)
- [x] Vitest testovi za blog procedure (8/8 prolaze, ukupno 14/14)

## Bug Fix (v6)
- [ ] Popraviti 404 za /admin/blog i /blog na objavljenoj domeni (SPA fallback routing)

## Webador HTML Export (v7)
- [x] Kompletni HTML bez meta oznaka za Webador ugradnju
- [x] CSS animacije umjesto framer-motion
- [x] Veliki chatbot prozor "Teo AI, dr.med." u zasebnoj sekciji (pulse-glow animacija)
- [x] Elfsight WhatsApp Chat u kontakt sekciji
- [x] Upute za kombiniranje s Webador blogom
- [x] Nova hero slika za naslovnicu (Lukina custom slika s mozgom i Ouroboros)
