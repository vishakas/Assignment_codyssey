import React from 'react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 lg:py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                INDIA&apos;S #1 JOB PLATFORM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Your job search ends here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover 50 lakh+ career opportunities
            </p>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-6xl">💼</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


