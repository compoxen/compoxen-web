/**
 * Server-rendered content primitives for editorial / pillar pages.
 * Keep these stateless and styling-only so AI crawlers can extract content
 * without executing JS.
 */

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg max-w-none text-enterprise-950/80 leading-relaxed [&_h2]:text-enterprise-950 [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-enterprise-950 [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:my-4 [&_a]:text-brand-amber [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_li]:my-1 [&_strong]:text-enterprise-950 [&_strong]:font-semibold">
      {children}
    </div>
  )
}

export function ContentSection({
  children,
  bg = 'gray',
}: {
  children: React.ReactNode
  bg?: 'gray' | 'white'
}) {
  const bgClass = bg === 'white' ? 'bg-white border-y border-enterprise-950/4' : 'bg-enterprise-50'
  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-4xl">{children}</div>
    </section>
  )
}

export function KeyFacts({
  title = 'Key facts',
  facts,
}: {
  title?: string
  facts: { label: string; value: string }[]
}) {
  return (
    <div className="my-8 p-6 md:p-8 bg-white border border-enterprise-950/8 rounded-2xl">
      <p className="text-xs font-semibold text-enterprise-950/50 uppercase tracking-wider mb-4">
        {title}
      </p>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {facts.map(f => (
          <div key={f.label} className="flex justify-between gap-4 border-b border-enterprise-950/5 pb-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
            <dt className="text-sm text-enterprise-950/60">{f.label}</dt>
            <dd className="text-sm font-semibold text-enterprise-950 text-right">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="text-xs text-enterprise-950/40 mt-2">
      Last updated <time dateTime={date}>{formatDate(date)}</time>
    </p>
  )
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function ClosingCTA({
  title = 'Ready for a real number?',
  body = "We'll reply with pricing, lead time, and availability for your Utah project.",
  primary = { label: 'Get a Quote', href: '/get-quote' },
}: {
  title?: string
  body?: string
  primary?: { label: string; href: string }
}) {
  return (
    <section className="py-16 bg-enterprise-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="p-8 md:p-12 bg-enterprise-950 text-white rounded-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">{body}</p>
          <a
            href={primary.href}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
          >
            {primary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
