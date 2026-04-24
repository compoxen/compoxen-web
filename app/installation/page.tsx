import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { Prose, ContentSection, LastUpdated, ClosingCTA } from '@/components/content/Primitives'
import { getHowToSchema, getBreadcrumbSchema } from '@/lib/schema'

const URL = '/installation'
const UPDATED = '2026-04-20'

const STEPS = [
  {
    name: 'Quote and site survey',
    text: 'A certified Compoxen dealer measures the run, identifies grade and obstacle conditions, confirms property lines, and pulls local code for post depth and wind load. The quote returned to the homeowner is binding except where buried surprises change the scope.',
  },
  {
    name: 'Permits, code, and color selection',
    text: 'The dealer pulls the relevant residential or commercial permit if your jurisdiction requires one. The homeowner selects from the five architect-led colors. Lead time begins when the color is locked.',
  },
  {
    name: 'Post setting and footings',
    text: 'Posts are set in concrete footings sized to the local frost line and engineered post spacing. Most jobs use 24–36 inch footings. The crew laser-aligns the post line before concrete cures.',
  },
  {
    name: 'Panel installation and inspection',
    text: 'Panels are dropped into the engineered post system using the hidden fastener mechanism, racked or stepped to follow grade as needed. The crew walks the run with the homeowner, confirms gate operation, and registers the warranty before leaving the site.',
  },
]

export const metadata: Metadata = {
  title: 'Compoxen Composite Fence Installation — Four-Step Process',
  description:
    'How a Compoxen composite fence is installed: quote and site survey, permits and color selection, post setting, and panel installation. Typical residential install completes in 1–3 working days.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Installation Process — Compoxen',
    description: 'Four-step certified installer process for Compoxen composite fencing.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-6.jpg', width: 1200, height: 630, alt: 'Composite fence installation in progress' }],
  },
}

export default function InstallationPage() {
  return (
    <>
      <SchemaScript
        data={[
          getHowToSchema({
            name: 'How to install a Compoxen composite fence',
            description:
              'Four-step certified installer process for Compoxen composite fencing. Typical residential install completes in 1–3 working days.',
            totalTime: 'PT3D',
            steps: STEPS,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Installation', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="How it works"
        title={<>Installation, in <span className="text-gradient-light">four steps</span></>}
        subtitle="From signed quote to walked-and-warranted fence — typically inside one working week."
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'See Specifications', href: '/specifications' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Installation', href: URL }]} />

      <ContentSection>
        <Prose>
          <p className="text-xl text-enterprise-950 font-medium">
            Compoxen is installed exclusively by Compoxen-trained crews. The
            20-year warranty assumes professional installation, which is also why
            the same crew that bids the job is the one that walks the finished
            run with you at the end.
          </p>
          <LastUpdated date={UPDATED} />
        </Prose>

        <ol className="my-10 space-y-6 not-prose">
          {STEPS.map((step, i) => (
            <li key={step.name} className="flex gap-5 p-6 bg-white border border-enterprise-950/8 rounded-2xl">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-amber text-black font-semibold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-enterprise-950">{step.name}</h3>
                <p className="mt-2 text-enterprise-950/70 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <Prose>
          <h2>How long does a typical install take?</h2>
          <p>
            A residential run of 100–200 linear feet completes in 1–3 working
            days. Larger or stepped runs on uneven ground take longer. Commercial
            and HOA-scale projects are scheduled separately.
          </p>

          <h2>Can I install Compoxen myself?</h2>
          <p>
            No. Compoxen is sold and installed only by Compoxen-trained crews.
            The hidden fastener system, engineered post spacing, and warranty
            terms all assume a professional install — that is what allows the
            20-year warranty to be honored.
          </p>

          <h2>What about my old fence?</h2>
          <p>
            We quote removal and disposal of an existing wood, vinyl, or
            chain-link fence as part of the project. Confirm scope and pricing
            on the written quote.
          </p>

          <h2>What does it cost?</h2>
          <p>
            See <a href="/pricing">/pricing</a> for installed price ranges and the
            factors that move the number on a specific job.
          </p>
        </Prose>
      </ContentSection>

      <ClosingCTA />
    </>
  )
}
