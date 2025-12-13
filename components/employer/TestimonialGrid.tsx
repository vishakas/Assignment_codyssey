import React from 'react'
import Card from '@/components/ui/Card'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'We are closely working with apna for talent discovery and hiring across job families. Their quickest turn-around time is enabling us to uninterruptedly continue our daily functions and services, especially during the present times.',
    author: 'Dr Varun',
    role: 'SVP, Medical Affairs',
    company: 'TATA 1mg',
    avatar: 'DV',
  },
]

export default function TestimonialGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-12 aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
              <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <span className="text-6xl">👤</span>
              </div>
            </div>
          </div>

          <div>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t-2 border-dashed border-gray-300 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-700">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


