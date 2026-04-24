import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Get a quote for your Compoxen composite fencing project. Statewide install across Utah for residential, commercial, or HOA projects.',
  openGraph: {
    title: 'Request a COMPOXEN Quote',
    description: 'Tell us about your Utah project and we\'ll reply within 24 hours.',
  },
}

export default function RequestQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
