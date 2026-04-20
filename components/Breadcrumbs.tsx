import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SchemaScript from './SchemaScript'
import { getBreadcrumbSchema } from '@/lib/schema'

export interface BreadcrumbItem {
  name: string
  href: string
}

/**
 * Visible breadcrumb trail + JSON-LD BreadcrumbList in one component.
 * Schema and visible items must always match — AI engines distrust
 * schemas that don't appear on the page.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <SchemaScript data={getBreadcrumbSchema(items.map(i => ({ name: i.name, url: i.href })))} />
      <nav aria-label="Breadcrumb" className="container mx-auto px-6 max-w-4xl pt-6">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-enterprise-950/50">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={12} className="text-enterprise-950/30" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="text-enterprise-950/80">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-enterprise-950 transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
