import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    default: 'COMPOXEN | Premium Composite Fencing — Designed in USA',
    template: '%s | COMPOXEN'
  },
  description: 'Premium composite fence supply + professional installation across Utah. 20-year warranty, zero maintenance, five architect-led colors. Free statewide quotes.',
  keywords: [
    'composite fencing', 'composite fence Utah', 'Utah fence installation',
    'composite fence supply Utah', 'Salt Lake City fence', 'Lehi fence', 'Provo fence',
    'Park City fence', 'composite fence vs wood', 'composite fence vs vinyl',
    'composite fence cost Utah', 'HOA approved fence Utah', 'pool fence Utah',
    'commercial fencing Utah', 'residential fence Utah', 'designed in USA',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'COMPOXEN',
    title: 'COMPOXEN | Utah Composite Fence Supply + Install',
    description: 'Composite fence supply + install across Utah. 20-year warranty, zero maintenance.',
    images: [{ url: '/images/hero-fence-bg.jpg', width: 1200, height: 630, alt: 'COMPOXEN Premium Composite Fencing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COMPOXEN | Premium Composite Fencing — Designed in USA',
    description: 'Premium composite fencing. 20-year warranty. Zero maintenance. Designed in USA.',
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
      </body>
    </html>
  )
}
