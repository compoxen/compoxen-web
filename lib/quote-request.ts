// Drop-in client for the D Fence intake-forms public submit endpoint.
//
// The public_key below is *meant* to be public — the backend gates it via
// `allowed_origins` on the form record, not by secrecy. Same idea as the
// embed snippets Jobber / Calendly hand out. Swap the placeholder once you
// run the one-time `POST /v1/intake/forms` curl and copy `data.form.public_key`.

const RS_API_URL = 'https://rs-backend.fly.dev'
const QUOTE_FORM_KEY = 'pk_REPLACE_ME' // <-- paste public_key from intake-forms response

export type QuoteService =
  | 'fence_install'
  | 'fence_repair'
  | 'gate_install'
  | 'other'

export type QuoteRequestPayload = {
  name: string
  email: string
  phone: string
  company?: string
  service: QuoteService
  address?: string
  details?: string
  // honeypot — must be empty for a real submission
  website?: string
}

export type QuoteRequestResult = {
  submission_id: string | null
  contact_id: string | null
  deal_id: string | null
  redirect_url?: string | null
  message: string
}

export async function submitQuoteRequest(
  payload: QuoteRequestPayload
): Promise<QuoteRequestResult> {
  const { website, ...fields } = payload

  const search =
    typeof window !== 'undefined' ? window.location.search : ''
  const params = new URLSearchParams(search)

  const res = await fetch(
    `${RS_API_URL}/public/intake/forms/${QUOTE_FORM_KEY}/submit`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        website: website ?? '',
        fields,
        metadata: {
          url:
            typeof window !== 'undefined'
              ? window.location.href
              : undefined,
          referrer:
            typeof document !== 'undefined' ? document.referrer : undefined,
          utm_source: params.get('utm_source') ?? undefined,
          utm_medium: params.get('utm_medium') ?? undefined,
          utm_campaign: params.get('utm_campaign') ?? undefined,
          utm_term: params.get('utm_term') ?? undefined,
          utm_content: params.get('utm_content') ?? undefined,
          gclid: params.get('gclid') ?? undefined,
        },
      }),
    }
  )

  let json: {
    success?: boolean
    data?: QuoteRequestResult
    error?: { message?: string }
  } = {}
  try {
    json = await res.json()
  } catch {
    // fallthrough — handled below
  }

  if (!res.ok || !json?.success || !json.data) {
    throw new Error(json?.error?.message || 'Submission failed')
  }

  return json.data
}
