import React from 'react'
import Button from '@/components/ui/Button'

interface CTASectionProps {
  title: string
  description?: string
  primaryButton: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  variant?: 'default' | 'primary'
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'default',
}: CTASectionProps) {
  const bgClass = variant === 'primary' 
    ? 'bg-primary-600 text-white' 
    : 'bg-gray-50 text-gray-900'

  return (
    <section className={`${bgClass} py-16 lg:py-24`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg mb-8 opacity-90">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant={variant === 'primary' ? 'secondary' : 'primary'}
              size="lg"
              onClick={primaryButton.onClick}
              href={primaryButton.href}
            >
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button
                variant={variant === 'primary' ? 'outline' : 'outline'}
                size="lg"
                onClick={secondaryButton.onClick}
                href={secondaryButton.href}
                className={variant === 'primary' ? 'border-white text-white hover:bg-white/10' : ''}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

