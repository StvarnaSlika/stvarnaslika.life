# SEO i indeksiranje

Javne stranice sada se renderiraju na poslužitelju: naslov, opis, canonical,
Open Graph, strukturirani podaci i glavni sadržaj dostupni su u prvom HTML
odgovoru, bez čekanja na JavaScript. React zatim preuzima interaktivnost.
Isti se sadržaj šalje posjetiteljima i tražilicama.

## Objavljivanje

Iz korijena repozitorija koristite verziju pnpm-a iz `packageManager`:

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm test
corepack pnpm build
corepack pnpm start
```

Objaviti treba cijeli `dist` (uključujući `dist/public` i `dist/server`) uz
Node.js i projektne ovisnosti, a ne samo statički frontend. Postojeće postavke
baze, prijave i vanjskih usluga ostaju potrebne u produkciji. Za članke treba
ispravan `DATABASE_URL` i primijenjena postojeća shema baze. Ovaj zahvat ne
stvara, ne mijenja i ne objavljuje članke.

Nakon objavljivanja provjerite:

- `/`, `/psihologija`, `/biblioteka` i objavljeni članak: HTTP 200, sadržaj
  vidljiv u izvornom HTML-u, jedinstveni naslov i canonical za tu stranicu.
- `/sitemap.xml`: sve javne stranice i objavljeni članci; stvarni datumi izmjena
  članaka. Greška baze vraća 503 kako ne bi nestali URL-ovi iz sitemapa.
- `/robots.txt`: javne stranice i API potreban za renderiranje nisu blokirani.
- Nepostojeći URL i nepostojeći ili neobjavljeni članak: HTTP 404 i `noindex`.
- `/admin/blog`: `noindex`; prijava i prava pristupa provjeravaju se zasebno.
- `/google3611913d6b3cfaa1.html`: postojeći verifikacijski odgovor ostaje sačuvan.

## Google Search Console

Ove provjere traže vlasnički pristup Google računu i nisu automatizirane ovim
repozitorijem:

1. U Search Consoleu otvorite postojeće svojstvo za `stvarnaslika.life` ili ga
   dodajte. Za domensko svojstvo Google traži DNS verifikaciju; za URL-prefix
   svojstvo koristite točno `https://stvarnaslika.life/` i aktualnu Googleovu
   metodu verifikacije. Postojeća datoteka vrijedi samo ako se podudara s onom
   dodijeljenom tom računu.
2. Pošaljite `https://stvarnaslika.life/sitemap.xml`.
3. U pregledu URL-a testirajte početnu, ključne podstranice i stvarni objavljeni
   članak. Provjerite dohvaćeni HTML, odabrani canonical i razloge isključivanja.
4. Za ključne promijenjene URL-ove zatražite indeksiranje. Pratite izvješća
   o indeksiranju i izvedbi; zahtjev ne jamči indeksiranje ni rangiranje.

Za daljnju vidljivost objavljujte izvorne, korisne članke s izvorima i jasnim
autorstvom. Za zdravstvene teme navedite stvarne kvalifikacije i datum pregleda;
ne dodajte izmišljene stručne recenzije, ocjene ni medicinske tvrdnje radi SEO-a.
