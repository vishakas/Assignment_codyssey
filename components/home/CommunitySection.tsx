import React from 'react'
import Card from '@/components/ui/Card'

interface Testimonial {
  id: string
  name: string
  status: string
  rating: number
  review: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Shiwangi Singla',
    status: 'PLACED',
    rating: 4.5,
    review: 'Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.',
    avatar: 'SS',
  },
  {
    id: '2',
    name: 'Jenil G',
    status: 'PLACED',
    rating: 4.5,
    review: 'This app is very helpful and the team is also very supportive through every stage. I got a job interview call within a week of applying.',
    avatar: 'JG',
  },
]

export default function CommunitySection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6 opacity-80">❝</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the community of 5 crore satisfied job seekers...
            </h2>
            <div className="mt-8">
              <p className="text-white/90 mb-2">Play Store Ratings</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${star <= 4 ? 'text-yellow-400' : 'text-yellow-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        {testimonial.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-white font-semibold">{testimonial.rating}</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-yellow-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{testimonial.review}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


