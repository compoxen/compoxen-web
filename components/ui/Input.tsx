import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string
  as?: 'input' | 'select'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, as = 'input', className = '', ...props }, ref) => {
    const id = props.id || props.name || label.toLowerCase().replace(/\s+/g, '-')
    
    // Shared container
    const wrapperClass = 'flex flex-col gap-1.5 w-full'
    
    // Shared input/select styles
    const inputClass = `
      w-full px-4 py-3
      bg-surface-glass border border-surface-glassBorder
      rounded-lg
      text-white text-sm placeholder-white/40
      focus:outline-none focus:ring-2 focus:ring-brand-amber focus:border-transparent
      transition-all duration-200
      ${className}
    `

    return (
      <div className={wrapperClass}>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>

        {as === 'select' ? (
          <select
            id={id}
            className={inputClass}
            {...(props as any)} // SelectHTMLAttributes
          >
            {props.children}
          </select>
        ) : (
          <input
            ref={ref}
            id={id}
            className={inputClass}
            {...props}
          />
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
