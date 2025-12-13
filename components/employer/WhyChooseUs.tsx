import React from 'react'

interface Stat {
  value: string
  label: string
  highlight?: boolean
}

const stats: Stat[] = [
  {
    value: '5 Lakhs+',
    label: 'New candidates join apna every month.',
    highlight: true,
  },
  {
    value: '200+',
    label: 'Job categories to publish your job.',
  },
  {
    value: 'Upto 5X',
    label: 'More walk-ins than competitors',
  },
  {
    value: '80%',
    label: 'Business get qualified candidates within 24 hrs',
    highlight: true,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why hire from apna?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to SMEs to established enterprises, Apna revolutionizes the way businesses find high-quality talent quickly & effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center border-r-0 md:border-r last:border-r-0 border-gray-200 pr-0 md:pr-8 last:pr-0"
            >
              <div
                className={`text-4xl md:text-5xl font-bold mb-3 ${
                  stat.highlight ? 'text-green-600' : 'text-gray-900'
                }`}
              >
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


