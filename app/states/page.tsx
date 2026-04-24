import { redirect } from 'next/navigation'

// Compoxen now serves Utah only. /states redirects to the dedicated service-areas hub.
export default function StatesIndex() {
  redirect('/service-areas')
}
