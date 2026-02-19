import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string
  as?: 'input' | 'select'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, as = 'input', className = '', ...props }, ref) => {
    const id = props.id || props.name || label.toLowerCase().replace(/\s+/g, '-')
    
    const wrapperClass = 'flex flex-col gap-1.5 w-full'
    
    const inputClass = `
      w-full px-4 py-3
      bg-white/6 border border-white/8
      rounded-xl
      text-white text-sm placeholder-white/30
      focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent
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
            {...(props as any)}
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
