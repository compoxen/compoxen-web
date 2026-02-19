/**
 * Schema component for injecting JSON-LD structured data into pages
 */

interface SchemaScriptProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function SchemaScript({ data }: SchemaScriptProps) {
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
