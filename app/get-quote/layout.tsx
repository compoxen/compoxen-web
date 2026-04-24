import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a quote for Compoxen premium composite fencing. Tell us about your Utah project and we\'ll reply within 24 hours.',
}

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
