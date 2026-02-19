import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getStateBySlug, SERVICE_STATES, EXPANSION_STATES, BRAND } from '@/lib/constants'

// Generate static params for all known state pages
export function generateStaticParams() {
  const allStates = { ...SERVICE_STATES, ...EXPANSION_STATES }
  return Object.values(allStates).map((state) => ({
    'state-name': state.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ 'state-name': string }>
}): Promise<Metadata> {
  const { 'state-name': stateName } = await params
  const state = getStateBySlug(stateName)

  if (!state) {
    return { title: 'State Not Found' }
  }

  const isActive = state.status === 'active'
  const statusText = isActive ? 'Available Now' : 'Coming Soon'

  return {
    title: `Composite Fencing in ${state.name} | ${statusText}`,
    description: `${state.description} ${BRAND.designOrigin}. ${isActive ? `${state.installerCount}+ certified installers.` : 'Join the waiting list for launch updates.'}`,
    openGraph: {
      title: `Compoxen Composite Fencing in ${state.name} — ${statusText}`,
      description: state.description,
      url: `${BRAND.url}/states/${state.slug}`,
    },
  }
}

export default async function StateLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ 'state-name': string }>
}) {
  const { 'state-name': stateName } = await params
  const state = getStateBySlug(stateName)

  if (!state) {
    notFound()
  }

  return <>{children}</>
}
