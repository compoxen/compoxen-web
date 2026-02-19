import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark' | 'glass'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber/50 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-brand-amber text-black hover:bg-amber-500',
      outline: 'border border-white/10 text-white/70 hover:bg-white/6 hover:text-white',
      ghost: 'text-white/60 hover:text-white hover:bg-white/4',
      dark: 'bg-enterprise-950 text-white hover:bg-enterprise-950/90',
      glass: 'bg-white/6 border border-white/8 text-white/70 backdrop-blur-md hover:bg-white/10 hover:text-white',
    }

    const sizes = {
      sm: 'px-4 py-2 text-[13px] gap-1.5',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-7 py-3.5 text-sm gap-2',
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <button 
        ref={ref} 
        className={classes} 
        {...props} 
      />
    )
  }
)

Button.displayName = 'Button'
export default Button
