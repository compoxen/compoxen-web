import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  containerClass?: string
  background?: string
}

export default function Section({ 
  children, 
  className = '', 
  id, 
  containerClass = '',
  background = 'bg-white' // default to white
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={clsx(
        'py-16 md:py-32 relative overflow-hidden',
        background,
        className
      )}
    >
      <div className={clsx('container mx-auto px-6', containerClass)}>
        {children}
      </div>
    </section>
  )
}
