import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | Where Compoxen Is Available',
  description: 'Compoxen premium composite fencing is currently available in Utah, Colorado, Idaho, and California. Check availability for your area or join the waiting list for expansion.',
  openGraph: {
    title: 'Compoxen Service Areas — Designed in USA',
    description: 'Currently serving UT, CO, ID, CA. Expanding nationwide.',
  },
}

export default function StatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
