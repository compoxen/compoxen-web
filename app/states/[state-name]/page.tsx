import { redirect } from 'next/navigation'

// Compoxen pivoted to Utah-only service. State pages redirect to the service-areas hub.
export default function StatePage() {
  redirect('/service-areas')
}
