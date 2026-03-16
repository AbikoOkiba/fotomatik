# Fotomatik.cz – Webové stránky

Profesionální fotokoutek pro svatby, večírky a firemní akce.
Olomoucký kraj – Olomouc, Prostějov, Šumperk.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** + shadcn/ui
- **Cloudinary** – fotografie a videa
- **Vercel** – hosting

## Cloudinary

Cloud Name: `dfelxxl7t`

Struktura složek:
- `Fotomatik/foto/` – galerie fotografií (28 fotek)
- `Fotomatik/videa/` – videa (hero pozadí + video sekce)

## Spuštění lokálně

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000)

## Nasazení

1. Push na GitHub
2. Vercel automaticky nasadí
3. Namapuj doménu fotomatik.cz v Vercel Dashboard → Settings → Domains

## Kontaktní formulář

Formulář momentálně simuluje odeslání. Pro ostré nasazení napoj:
- [Resend](https://resend.com) (doporučeno – jednoduché API)
- [Formspree](https://formspree.io) (bezplatný tier)
- Vlastní API route v Next.js

## SEO

- Optimalizováno pro Olomoucký kraj
- Structured data (LocalBusiness schema)
- OpenGraph + Twitter cards
- Canonical URL
