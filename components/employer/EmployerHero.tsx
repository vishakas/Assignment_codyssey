import React from 'react'
import Button from '@/components/ui/Button'

export default function EmployerHero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let&apos;s hire your next great candidate
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A hiring platform built to solve for relevancy, volume and speed of hiring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/login">
              Login/Sign up
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


