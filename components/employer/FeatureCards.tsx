import React from 'react'
import Card from '@/components/ui/Card'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🤖',
    title: 'AI-Suggested Candidates',
    description: 'Get AI-recommended candidates from our database matching to your job postings.',
  },
  {
    icon: '⚙️',
    title: 'Customized Lead Management',
    description: 'Manage leads efficiently with ATS integration, CSV access, dashboard tracking, and WhatsApp alerts.',
  },
  {
    icon: '🚀',
    title: 'Job Post Boosts',
    description: 'Enhance visibility with walk-in and premium job post boosts.',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


