import { redirect } from 'next/navigation'

// Compoxen retired the dealer-kit funnel. All inquiries route to the unified quote form.
export default function DealerKitPage() {
  redirect('/get-quote')
}
