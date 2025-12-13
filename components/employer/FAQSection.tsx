'use client'

import React, { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Why should I use Apna over others?',
    answer: 'Apna offers a unique combination of AI-powered candidate matching, 24/7 AI calling agents, and access to millions of active job seekers. Our platform is specifically designed for the Indian market, with features like bulk WhatsApp invites and area-based search that help you find candidates faster.',
  },
  {
    question: 'What happens if I don\'t receive enough candidates?',
    answer: 'We offer job post boosts and premium visibility options to increase your reach. Additionally, our AI calling agent proactively reaches out to qualified candidates, ensuring you get quality applications even if initial response is low.',
  },
  {
    question: 'In which cities can I hire via Apna?',
    answer: 'Apna operates in 900+ cities across India, covering major metros, tier-2, and tier-3 cities. You can post jobs for any location and our platform will help you find candidates in that area.',
  },
  {
    question: 'I want to hire more than 10 candidates, do you have any bulk-hiring plans?',
    answer: 'Yes, we offer Enterprise plans with bulk hiring features, ATS integrations, and dedicated account management. Contact our sales team to discuss custom pricing and features for your hiring volume.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-4"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


