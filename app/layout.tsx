import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SchemaScript from '@/components/SchemaScript'
import {
  getOrganizationSchema,
  getProductSchema,
  getWebSiteSchema,
  getLocalBusinessSchema,
} from '@/lib/schema'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://compoxen.com'),
  title: {
    default: 'COMPOXEN | Trade-Only Composite Fence Systems — UT · ID · OR · CO',
    template: '%s | COMPOXEN'
  },
  description: 'A composite fence line built for the trade. Strategic distributor program for fence dealers, lumberyards, and pro contractors across Utah, Idaho, Oregon, and Colorado. Designed in USA.',
  keywords: [
    'wholesale composite fencing', 'composite fence dealer program', 'composite fence distributor',
    'fence supplier Utah Idaho Colorado', 'pro composite fence', 'composite fence pallet',
    'composite fence systems', 'fence contractor materials', 'lumberyard composite fence',
    'Mountain West fence supply', 'designed in USA',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'COMPOXEN',
    title: 'COMPOXEN | Trade-Only Composite Fence Systems',
    description: 'A composite fence line built for the trade — UT · ID · OR · CO. Strategic distributor program for dealers, lumberyards, and pro contractors.',
    images: [{ url: '/images/hero-fence-bg.jpg', width: 1200, height: 630, alt: 'COMPOXEN Composite Fence Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COMPOXEN | Trade-Only Composite Fence Systems — UT · ID · OR · CO',
    description: 'A composite fence line built for the trade. Strategic distributor program across Utah, Idaho, Oregon, and Colorado.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  alternates: {
    canonical: 'https://compoxen.com',
  },
  verification: {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth scroll-pt-24`}>
      <head>
        <SchemaScript data={[getOrganizationSchema(), getLocalBusinessSchema(), getProductSchema(), getWebSiteSchema()]} />
      </head>
      <body className="font-sans antialiased bg-white text-black min-h-screen flex flex-col">
          <Navigation />
          <main className="relative grow">
            {children}
          </main>
          <Footer />

          {/* Google tag (gtag.js) — Google Ads AW-18096759650 */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-18096759650"
            strategy="afterInteractive"
          />
          <Script id="google-ads-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18096759650');
            `}
          </Script>
      </body>
    </html>
  )
}
