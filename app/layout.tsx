import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://compoxen.com'),
  title: {
    default: 'COMPOXEN | Premium Composite Fencing',
    template: '%s | COMPOXEN'
  },
  description: 'Premium composite fencing solutions for elite contractors. 20-year warranty, zero maintenance, architect-led design.',
  keywords: ['composite fencing', 'premium fence materials', 'contractor supply', 'modern fencing', 'zero maintenance fence'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'COMPOXEN',
    title: 'COMPOXEN | Premium Composite Fencing',
    description: 'Premium composite fencing solutions for elite contractors.',
    images: [{ url: '/images/hero-fence-bg.jpg', width: 1200, height: 630, alt: 'COMPOXEN Premium Fencing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COMPOXEN | Premium Composite Fencing',
    description: 'Premium composite fencing solutions for elite contractors.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth scroll-pt-24`}>
      <body className="font-sans antialiased bg-white text-black min-h-screen flex flex-col">
          <div className="noise-overlay" />
          <Navigation />
          <main className="relative grow">
            {children}
          </main>
      </body>
    </html>
  )
}
