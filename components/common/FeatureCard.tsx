import React from 'react'
import Card from '@/components/ui/Card'

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card hover>
      {icon && (
        <div className="text-4xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </Card>
  )
}


