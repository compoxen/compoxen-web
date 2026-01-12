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
  title: 'COMPOXEN | Engineered Excellence',
  description: 'Premium composite fencing solutions for elite contractors',
  keywords: 'composite fencing, premium fence materials, contractor supply',
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
          <main className="relative flex-grow">
            {children}
          </main>
      </body>
    </html>
  )
}
