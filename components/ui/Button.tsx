import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center'
  
  const variants = {
    primary: 'bg-green-700 text-white hover:bg-green-800 focus:ring-green-500',
    secondary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    outline: 'border-2 border-green-700 text-green-700 hover:bg-green-50 focus:ring-green-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = cn(baseStyles, variants[variant], sizes[size], className)
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

