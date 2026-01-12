import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    // Variants
    const variants = {
      primary: 'bg-brand-amber text-white hover:bg-brand-amber-dark shadow-xl hover:-translate-y-0.5 hover:shadow-2xl',
      outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10 backdrop-blur-md',
      ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5'
    }

    // Sizes
    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-8 py-4 text-base gap-3',
      lg: 'px-10 py-5 text-lg gap-4'
    }

    // Combine
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
