import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Dealer Kit',
  description: 'Request your free Compoxen dealer kit with product samples, pricing, and installation specifications for contractors.',
  openGraph: {
    title: 'Become a COMPOXEN Dealer',
    description: 'Get product details, pricing, and installation specifications.',
  },
}

export default function DealerKitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
