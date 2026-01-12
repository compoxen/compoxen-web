import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Get a quote for your Compoxen composite fencing project. Connect with certified dealers for residential, commercial, or HOA installations.',
  openGraph: {
    title: 'Request a COMPOXEN Quote',
    description: 'Tell us about your project and connect with a certified dealer.',
  },
}

export default function RequestQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
