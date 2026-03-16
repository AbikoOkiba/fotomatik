# Fotomatik.cz – Poznámky pro Claude

## O projektu
Web pro pronájem fotokoutku Fotomatik.cz – majitel Tomáš Loutocký (tomas@loutocky.com, +420 603 837 432).
Působnost: Olomoucký kraj a okolí (Olomouc, Prostějov, Šumperk, celá Morava). Po domluvě kamkoliv.

## Stack
- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** komponenty
- **Cloudinary** – fotky a videa
- **Resend** – odesílání emailů z kontaktního formuláře
- **lucide-react** – ikony

## Struktura projektu
```
app/
  page.tsx               – hlavní stránka (skládá sekce)
  layout.tsx             – root layout + metadata + JSON-LD
  globals.css            – CSS proměnné (barvy, fonty)
  icon.svg               – favicon (černý čtverec, bílé F)
  opengraph-image.tsx    – OG obrázek 1200×630 generovaný dynamicky
  sitemap.ts             – automatický /sitemap.xml
  robots.ts              – /robots.txt
  api/
    gallery/route.ts     – API pro načtení fotek z Cloudinary
    videos/route.ts      – API pro načtení videí z Cloudinary
    contact/route.ts     – API pro odeslání kontaktního formuláře přes Resend
components/
  sections/
    header.tsx           – navigace + Rezervovat → #contact
    hero.tsx             – hero sekce s videem v pozadí (Fotomatik/Hero_video), 2 tlačítka
    features.tsx         – id="features", 4 karty výhod
    gallery.tsx          – id="gallery", dynamická galerie z Cloudinary API
    how-it-works.tsx     – id="process", 3 kroky
    video-section.tsx    – id="videos", videa z Cloudinary API s vlastními náhledy
    contact.tsx          – id="contact", formulář + kontaktní info
    footer.tsx           – logo + Facebook + copyright
  ui/                    – shadcn komponenty (button, input, select, textarea...)
```

## Cloudinary
- **Cloud name:** dfelxxl7t
- **Složka fotek:** Fotomatik/Foto (33 fotek)
- **Složka videí:** Fotomatik/Videa (2 videa)
- **Hero video:** Fotomatik/Hero_video (1 video – běží v smyčce jako pozadí hero sekce)
- API Key a Secret jsou v `.env.local` (není v gitu)
- Cloudinary používá **nový Dynamic Folders systém** – galerie se načítá přes `resources_by_asset_folder` (ne klasický folders endpoint)
- Galerie se načítá dynamicky přes `/api/gallery` – přidání/odebrání fotky na Cloudinary se automaticky projeví na webu
- Video náhledy generuje Cloudinary s parametrem `so_X` (start offset v sekundách)
  - Video 1: offset 32s
  - Video 2: offset 47s, crop fill (bylo vertikální, ořezáno na 16:9)

## Resend (kontaktní formulář)
- Registrován účet, API klíč v `.env.local` jako `RESEND_API_KEY`
- Emaily chodí na tomas@loutocky.com
- Odesílatel: `Fotomatik <noreply@fotomatik.cz>` ✅ (doména ověřena 16.3.2026)
- replyTo je nastaven na email odesílatele – stačí kliknout Odpovědět

## Barvy (globals.css)
- **Primary (zelená):** oklch(0.45 0.12 145) ≈ #2e7d4f
- **Accent (zlatá):** oklch(0.75 0.15 55) ≈ #c9943a
- **Background:** oklch(0.98 0.005 75) – teplá bílá
- **Fonty:** Playfair Display (serif, nadpisy), Inter (sans, text)

## Anchor navigace (všechny fungují)
- `#features` → Proč my
- `#gallery` → Galerie
- `#process` → Jak to funguje
- `#contact` → Kontakt (Rezervovat tlačítko)

## SEO
- JSON-LD LocalBusiness v layout.tsx (adresa, geo souřadnice, areaServed)
- OG image: `app/opengraph-image.tsx` (zelené pozadí, zlatý text, lokace)
- Sitemap: `app/sitemap.ts` → `/sitemap.xml`
- Robots: `app/robots.ts` → `/robots.txt`
- Favicon: `app/icon.svg` (černý čtverec, bílé F)
- TODO: Google Search Console – přidat web a odeslat sitemap po nasazení

## GitHub
- Repozitář: https://github.com/AbikoOkiba/fotomatik
- Branch: main
- `.env.local` je v `.gitignore` – API klíče nejsou v gitu
- Po každé změně: `git add .` → `git commit -m "popis"` → `git push`

## Vercel (nasazení)
- Propojeno s GitHub repozitářem AbikoOkiba/fotomatik
- URL: fotomatik-gp1m.vercel.app (interní), fotomatik.cz (produkce)
- Environment Variables nastaveny ve Vercelu:
  - `CLOUDINARY_CLOUD_NAME` = dfelxxl7t
  - `CLOUDINARY_API_KEY` = (viz .env.local)
  - `CLOUDINARY_API_SECRET` = (viz .env.local)
  - `RESEND_API_KEY` = (viz .env.local)
- Doména fotomatik.cz a www.fotomatik.cz připojeny a funkční ✅
- DNS na Active24 – A záznamy pro Vercel, CNAME pro www

## Active24 DNS (aktuální stav)
- `fotomatik.cz` A → Vercel IP (nastaveno dle Vercelu)
- `www.fotomatik.cz` A → Vercel IP (nastaveno dle Vercelu)
- `resend._domainkey` TXT → DKIM klíč pro Resend ✅
- `send` MX → feedback-smtp.eu-west-1.amazonses.com (priorita 10) ✅
- `send` TXT → v=spf1 include:amazonses.com ~all ✅
- `_dmarc` TXT → v=DMARC1; p=none; ✅

## Co bylo opraveno / přidáno (kompletní přehled)
- [x] Chybějící `select.tsx` a `textarea.tsx` shadcn komponenty
- [x] Anchor `id` na všech sekcích
- [x] Tlačítko "Rezervovat" v headeru → odkaz na #contact
- [x] Hero tlačítka → #contact a #gallery
- [x] Druhé tlačítko v hero sekci – opravena čitelnost (bílý text na světlém)
- [x] Dynamická galerie přes Cloudinary API (Dynamic Folders systém)
- [x] Dynamická videa přes Cloudinary API
- [x] Hero sekce – pozadí nahrazeno videem z Cloudinary (Fotomatik/Hero_video)
- [x] Video náhledy – vlastní timestamp (32s / 47s), druhé video crop fill
- [x] Skrytí filename pod video náhledy
- [x] Kontaktní formulář napojený na Resend → email na tomas@loutocky.com
- [x] Favicon – černý čtverec s bílým F (app/icon.svg)
- [x] SEO – sitemap, robots.txt, OG image, JSON-LD s adresou a geo
- [x] GitHub repozitář – kód pushnut
- [x] Vercel build error opraven (chybějící separator.tsx, toast.tsx, implicit any)
- [x] Vercel – web live na fotomatik.cz ✅
- [x] Doména fotomatik.cz napojena přes Active24 DNS
- [x] Resend doména ověřena – emaily z noreply@fotomatik.cz ✅

## Co zbývá
- [ ] Google Search Console – přidat web a odeslat sitemap.xml
- [ ] Google Analytics nebo Vercel Analytics

## Jak spustit lokálně
```bash
cd fotomatik
npm install
npm run dev
# → http://localhost:3000
```

## .env.local (šablona – hodnoty nezveřejňovat)
```
CLOUDINARY_CLOUD_NAME=dfelxxl7t
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
RESEND_API_KEY=...
```

## Důležité soubory k načtení na začátku session
1. `CLAUDE_NOTES.md` – tento soubor
2. `app/page.tsx` – struktura stránky
3. `app/globals.css` – design tokens
4. `app/layout.tsx` – metadata a JSON-LD
