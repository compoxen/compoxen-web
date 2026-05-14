// Google Ads (gtag.js) helpers. The base tag is injected once in app/layout.tsx;
// these helpers fire conversion events from client components.

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const GOOGLE_ADS_ID = 'AW-18096759650'

// Conversion label from the Google Ads UI — the part *after* the slash in
// `send_to`. Example: if Ads gives you `AW-18096759650/AbCdEfGhIjK`, paste
// `AbCdEfGhIjK` here. While set to 'REPLACE_ME' we fall back to a generic
// `generate_lead` event so the build keeps working before the action exists.
const QUOTE_CONVERSION_LABEL = 'REPLACE_ME'

/**
 * Fire a Google Ads conversion when someone submits the quote form.
 */
export function trackQuoteSubmission(opts?: {
  value?: number
  currency?: string
  transactionId?: string
}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  if (QUOTE_CONVERSION_LABEL && QUOTE_CONVERSION_LABEL !== 'REPLACE_ME') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${QUOTE_CONVERSION_LABEL}`,
      value: opts?.value ?? 1.0,
      currency: opts?.currency ?? 'USD',
      transaction_id: opts?.transactionId ?? '',
    })
  } else {
    window.gtag('event', 'generate_lead', {
      send_to: GOOGLE_ADS_ID,
      value: opts?.value ?? 1.0,
      currency: opts?.currency ?? 'USD',
    })
  }
}
