import React from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface Company {
  id: string
  name: string
  description: string
  logo: string
  logoBg: string
}

const companies: Company[] = [
  {
    id: '1',
    name: 'Bajaj Allianz Life Insurance',
    description: 'Provider of life insurance and financial services.',
    logo: 'BA',
    logoBg: 'bg-blue-100',
  },
  {
    id: '2',
    name: 'Paytm Service Pvt. Ltd.',
    description: 'Digital payment and e-commerce facilitator.',
    logo: 'PT',
    logoBg: 'bg-blue-100',
  },
  {
    id: '3',
    name: 'Zomato',
    description: 'Online food delivery marketplace.',
    logo: 'ZO',
    logoBg: 'bg-red-100',
  },
]

export default function TopCompanies() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Job Openings in Top companies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {companies.map((company) => (
            <Card key={company.id} hover>
              <div className="flex items-center mb-4">
                <div className={`${company.logoBg} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                  <span className="font-bold text-gray-700">{company.logo}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{company.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{company.description}</p>
              <Link href={`/companies/${company.id}`}>
                <span className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View jobs
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="w-8 h-1 bg-primary-600 rounded"></div>
          <div className="w-8 h-1 bg-gray-300 rounded"></div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="md">
            View all
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}


