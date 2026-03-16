import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fotomatik – Profesionální fotokoutek | Olomouc, Prostějov, Šumperk',
  description: 'Pronájem profesionálního fotokoutku pro svatby, firemní večírky a oslavy. Okamžitý tisk, vtipné rekvizity, milá obsluha. Působíme v Olomouckém kraji – Olomouc, Prostějov, Šumperk a okolí. 15 let zkušeností.',
  keywords: [
    'fotokoutek Olomouc',
    'fotokoutek Olomoucký kraj',
    'fotokoutek pronájem',
    'fotokoutek svatba',
    'fotokoutek Prostějov',
    'fotokoutek Šumperk',
    'fotobudka Olomouc',
    'fotobudka pronájem Morava',
    'fotomatik',
    'fotokoutek firemní večírek',
    'fotokoutek oslava',
    'okamžitý tisk fotek',
  ],
  authors: [{ name: 'Fotomatik', url: 'https://fotomatik.cz' }],
  creator: 'Fotomatik',
  publisher: 'Fotomatik',
  metadataBase: new URL('https://fotomatik.cz'),
  alternates: {
    canonical: 'https://fotomatik.cz',
  },
  openGraph: {
    title: 'Fotomatik – Profesionální fotokoutek | Olomoucký kraj',
    description: 'Pronájem profesionálního fotokoutku pro svatby, večírky a oslavy. Okamžitý tisk, zábavné rekvizity. Olomouc, Prostějov, Šumperk a okolí.',
    url: 'https://fotomatik.cz',
    siteName: 'Fotomatik',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotomatik – Profesionální fotokoutek | Olomoucký kraj',
    description: 'Pronájem profesionálního fotokoutku pro svatby, večírky a oslavy. Olomouc, Prostějov, Šumperk.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fotomatik",
  "description": "Profesionální fotokoutek pro svatby, firemní večírky a oslavy s okamžitým tiskem. Olomoucký kraj.",
  "url": "https://fotomatik.cz",
  "telephone": "+420603837432",
  "email": "tomas@loutocky.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Olomouc",
    "addressRegion": "Olomoucký kraj",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.5938,
    "longitude": 17.2509
  },
  "areaServed": [
    { "@type": "City", "name": "Olomouc" },
    { "@type": "City", "name": "Prostějov" },
    { "@type": "City", "name": "Šumperk" },
    { "@type": "AdministrativeArea", "name": "Olomoucký kraj" },
    { "@type": "AdministrativeArea", "name": "Morava" }
  ],
  "serviceType": "Pronájem fotokoutku",
  "priceRange": "$$",
  "image": "https://fotomatik.cz/opengraph-image",
  "sameAs": [
    "https://www.facebook.com/fotomatik"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
