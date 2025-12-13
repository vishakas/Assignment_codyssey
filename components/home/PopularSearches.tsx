import React from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

interface PopularSearch {
  id: string
  title: string
  rank: number
  image: string
}

const popularSearches: PopularSearch[] = [
  { id: '1', title: 'Jobs for Freshers', rank: 1, image: '👤' },
  { id: '2', title: 'Work from home Jobs', rank: 2, image: '💻' },
  { id: '3', title: 'Part time Jobs', rank: 3, image: '⏰' },
  { id: '4', title: 'Jobs for Women', rank: 4, image: '👩' },
  { id: '5', title: 'Full Time Jobs', rank: 5, image: '💼' },
]

export default function PopularSearches() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Searches on Apna
            </h2>
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSearches.map((search) => (
                <Link key={search.id} href={`/jobs?search=${search.id}`}>
                  <Card hover className="relative overflow-hidden p-0">
                    <div className="absolute top-4 left-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Trending at #{search.rank}
                    </div>
                    <div className="p-6 pt-12">
                      <div className="text-5xl mb-4 text-center">{search.image}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        {search.title}
                      </h3>
                      <div className="text-center">
                        <span className="text-primary-600 font-medium">
                          View all
                          <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


