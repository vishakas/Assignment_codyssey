'use client'

import React from 'react'
import Button from '@/components/ui/Button'

export default function JobPrepBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <span className="text-2xl font-bold text-white">ai</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-lg">Job Prep</span>
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  NEW
                </span>
              </div>
              <p className="text-white/90 text-sm">Practice interviews with AI Coach</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              {['PhonePe', 'Amazon', 'Apple', 'Airtel', 'Netflix'].map((brand, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-semibold"
                >
                  {brand[0]}
                </div>
              ))}
            </div>
            <Button
              variant="secondary"
              size="md"
              className="bg-white text-purple-600 hover:bg-gray-100 border-0"
            >
              Practice now
              <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


