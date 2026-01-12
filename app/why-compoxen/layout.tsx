import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Compoxen',
  description: 'Discover why Compoxen composite fencing outperforms wood, vinyl, and metal. Engineered for 25+ years of quiet performance with zero maintenance.',
  openGraph: {
    title: 'Why Choose Compoxen Composite Fencing',
    description: 'Engineered for 25+ years of quiet performance with zero maintenance.',
  },
}

export default function WhyCompoxenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
