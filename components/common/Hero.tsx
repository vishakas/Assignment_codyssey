import React from 'react'
import Button from '@/components/ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  primaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  image?: string
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={primaryCTA.onClick}
                  href={primaryCTA.href}
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={secondaryCTA.onClick}
                  href={secondaryCTA.href}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          {image && (
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

