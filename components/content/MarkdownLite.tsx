import { Fragment } from 'react'

/**
 * Tiny inline markdown renderer for blog post bodies.
 * Supports: ## h2, ### h3, paragraphs, - bullets, [text](url), **bold**.
 * Kept intentionally small so we ship no MD runtime to the client and
 * the rendered HTML is fully server-rendered for AI crawlers.
 */
export default function MarkdownLite({ source }: { source: string }) {
  const blocks = parseBlocks(source)
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'h2') return <h2 key={i}>{renderInline(block.text)}</h2>
        if (block.type === 'h3') return <h3 key={i}>{renderInline(block.text)}</h3>
        if (block.type === 'ul') {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{renderInline(block.text)}</p>
      })}
    </>
  )
}

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const blocks: Block[] = []
  let buffer: string[] = []
  let listBuffer: string[] = []

  const flushParagraph = () => {
    if (buffer.length) {
      blocks.push({ type: 'p', text: buffer.join(' ').trim() })
      buffer = []
    }
  }
  const flushList = () => {
    if (listBuffer.length) {
      blocks.push({ type: 'ul', items: listBuffer })
      listBuffer = []
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      flushParagraph()
      flushList()
      continue
    }
    if (line.startsWith('### ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'h3', text: line.slice(4) })
      continue
    }
    if (line.startsWith('## ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'h2', text: line.slice(3) })
      continue
    }
    if (line.startsWith('- ')) {
      flushParagraph()
      listBuffer.push(line.slice(2))
      continue
    }
    flushList()
    buffer.push(line)
  }
  flushParagraph()
  flushList()
  return blocks
}

function renderInline(text: string): React.ReactNode {
  // Convert links and bold sequentially.
  // Order matters: links first (so bold inside links works),
  // then bold across the remaining segments.
  const parts: React.ReactNode[] = []
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{renderBold(text.slice(lastIndex, match.index))}</Fragment>)
    }
    const href = match[2]
    parts.push(
      <a key={key++} href={href}>
        {renderBold(match[1])}
      </a>,
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{renderBold(text.slice(lastIndex))}</Fragment>)
  }
  return parts
}

function renderBold(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  const boldRegex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>)
    parts.push(<strong key={key++}>{match[1]}</strong>)
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
  return parts.length ? parts : text
}
