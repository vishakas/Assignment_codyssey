import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface CategorySection {
  title: string
  items: string[]
  baseUrl: string
}

const categories: CategorySection[] = [
  {
    title: 'Find Jobs',
    baseUrl: '/jobs',
    items: [
      'Jobs in Agra',
      'Jobs in Ajmer',
      'Jobs in Asansol',
      'Jobs in Belagavi',
      'Jobs in Ahmedabad',
      'Jobs in Aligarh',
      'Jobs in Aurangabad',
      'Jobs in Bengaluru/Bangalore',
      'Jobs in Ahmednagar',
      'Jobs in Amritsar',
      'Jobs in Bareilly',
      'Jobs in Bhavnagar',
    ],
  },
  {
    title: 'Start Hiring',
    baseUrl: '/employer',
    items: [
      'Hire in Agra',
      'Hire in Ajmer',
      'Hire in Asansol',
      'Hire in Belagavi',
      'Hire in Ahmedabad',
      'Hire in Aligarh',
      'Hire in Aurangabad',
      'Hire in Bengaluru/Bangalore',
      'Hire in Ahmednagar',
      'Hire in Amritsar',
      'Hire in Bareilly',
      'Hire in Bhavnagar',
    ],
  },
  {
    title: 'Popular Jobs',
    baseUrl: '/jobs',
    items: [
      'Delivery Person Jobs',
      'Human Resource',
      'Telecaller / BPO',
      'Full Time Jobs',
      'Accounts / Finance Jobs',
      'Backoffice Jobs',
      'Work from Home Jobs',
      'Night Shift Jobs',
      'Sales (Field Work)',
      'Business Development',
      'Part Time Jobs',
      'Freshers Jobs',
    ],
  },
]

export default function JobCategories() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container-custom">
        {categories.map((category, sectionIndex) => (
          <div key={sectionIndex} className="mb-12 last:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {category.items.map((item, index) => (
                <Link
                  key={index}
                  href={`${category.baseUrl}?q=${encodeURIComponent(item)}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors py-2"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button variant="ghost" size="sm">
                View More
                <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


