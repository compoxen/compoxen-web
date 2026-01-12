import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dealer Dashboard',
  description: 'Access the COMPOXEN dealer dashboard for real-time insights, project tracking, smart pricing tiers, and marketing assets.',
  openGraph: {
    title: 'COMPOXEN Dealer Dashboard',
    description: 'Track orders, manage samples, and unlock better pricing.',
  },
}

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
