import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

interface JobRole {
  id: string
  title: string
  openings: number
  icon: string
}

const jobRoles: JobRole[] = [
  { id: '1', title: 'Sales & Marketing', openings: 1234, icon: '📊' },
  { id: '2', title: 'Back Office', openings: 856, icon: '📋' },
  { id: '3', title: 'Logistics/Warehouse', openings: 1164, icon: '🚚' },
  { id: '4', title: 'Cook / Chef / Baker', openings: 710, icon: '👨‍🍳' },
  { id: '5', title: 'Business Operations', openings: 707, icon: '⚙️' },
  { id: '6', title: 'Human Resources', openings: 706, icon: '👥' },
  { id: '7', title: 'Lab Technician', openings: 106, icon: '🔬' },
  { id: '8', title: 'Welder', openings: 105, icon: '🔧' },
  { id: '9', title: 'Mechanical Engineer', openings: 81, icon: '⚙️' },
  { id: '10', title: 'Turner-Fitter', openings: 76, icon: '🔩' },
]

export default function TrendingJobRoles() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Trending job roles on Apna
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {jobRoles.map((role) => (
            <Link key={role.id} href={`/jobs?category=${role.id}`}>
              <Card hover className="text-center p-4 md:p-6">
                <div className="text-4xl mb-3">{role.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                  {role.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {role.openings.toLocaleString()} openings
                </p>
                <div className="mt-3 text-primary-600">
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
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

