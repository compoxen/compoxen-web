import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  containerClass?: string
  background?: string
  narrow?: boolean
}

export default function Section({ 
  children, 
  className = '', 
  id, 
  containerClass = '',
  background = 'bg-white',
  narrow = false,
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={clsx(
        'py-20 md:py-28 relative overflow-hidden',
        background,
        className
      )}
    >
      <div className={clsx('container mx-auto px-6', narrow ? 'max-w-4xl' : 'max-w-6xl', containerClass)}>
        {children}
      </div>
    </section>
  )
}
