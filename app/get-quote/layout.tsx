import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a quote for Compoxen premium composite fencing. Tell us about your project and we\'ll connect you with a certified dealer.',
}

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
