# Fotomatik.cz – Poznámky pro Claude

## O projektu
Web pro pronájem fotokoutku Fotomatik.cz – majitel Tomáš Loutocký (tomas@loutocky.com, +420 603 837 432).
Působnost: Olomoucký kraj a okolí (Olomouc, Prostějov, Šumperk, celá Morava).

## Stack
- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** komponenty
- **Cloudinary** – fotky a videa
- **lucide-react** – ikony

## Struktura projektu
```
app/
  page.tsx          – hlavní stránka (skládá sekce)
  layout.tsx        – root layout
  globals.css       – CSS proměnné (barvy, fonty)
  api/
    gallery/route.ts  – API pro načtení fotek z Cloudinary
    videos/route.ts   – API pro načtení videí z Cloudinary
components/
  sections/
    header.tsx        – navigace + Rezervovat → #contact
    hero.tsx          – hero sekce s videem v pozadí, 2 tlačítka
    features.tsx      – id="features", 4 karty výhod
    gallery.tsx       – id="gallery", dynamická galerie z Cloudinary API
    how-it-works.tsx  – id="process", 3 kroky
    video-section.tsx – videa z Cloudinary API
    contact.tsx       – id="contact", formulář + kontaktní info
    footer.tsx        – logo + Facebook + copyright
  ui/               – shadcn komponenty (button, input, select, textarea...)
```

## Cloudinary
- **Cloud name:** dfelxxl7t
- **Složka fotek:** Fotomatik/Foto (28 fotek)
- **Složka videí:** Fotomatik/Videa
- API Key a Secret jsou v `.env.local` (není v gitu)
- Galerie se načítá dynamicky přes `/api/gallery` – přidání/odebrání fotky na Cloudinary se automaticky projeví na webu

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

## Co bylo opraveno / přidáno
- [x] Chybějící `select.tsx` a `textarea.tsx` shadcn komponenty
- [x] Anchor `id` na všech sekcích
- [x] Tlačítko "Rezervovat" v headeru → odkaz na #contact
- [x] Hero tlačítka → #contact a #gallery
- [x] Dynamická galerie přes Cloudinary API (místo hardcoded URL)
- [x] Dynamická videa přes Cloudinary API
- [x] `cloudinary` přidán do package.json

## Co zbývá / nápady do budoucna
- [ ] Otestovat Cloudinary API připojení na localhost
- [ ] Nasazení na Vercel (přidat env variables: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET)
- [ ] Kontaktní formulář – napojit na skutečné odesílání (email / Resend / Formspree)
- [ ] SEO metadata (title, description, OG obrázky)
- [ ] Google Analytics nebo podobné

## Jak spustit lokálně
```bash
cd fotomatik
npm install
npm run dev
# → http://localhost:3000
```

## Důležité soubory k načtení na začátku session
1. `CLAUDE_NOTES.md` – tento soubor
2. `app/page.tsx` – struktura stránky
3. `app/globals.css` – design tokens
