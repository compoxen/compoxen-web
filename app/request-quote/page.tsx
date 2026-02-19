import { redirect } from 'next/navigation'

// Consolidate duplicate route — 301 redirect to /get-quote
export default function RequestQuotePage() {
  redirect('/get-quote')
}
