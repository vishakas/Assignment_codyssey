'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

export default function AICallingSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1)

  const features = [
    {
      title: 'Post a Premium job with AI Calling Agent',
      description: '',
    },
    {
      title: 'AI agent calls candidates on your behalf 24/7',
      description: 'Interviews all interested candidates. Follows up 5 times via call, whatsapp & email even after work hours',
    },
    {
      title: 'Gives you a ready shortlist of top candidates',
      description: '',
    },
  ]

  return (
    <section id="ai-calling" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📞</span>
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Job with AI Calling Agent
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Calling Agent interviews and shortlists candidates 24/7
            </h2>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 bg-white"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900">{feature.title}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedIndex === index && feature.description && (
                    <p className="mt-3 text-gray-600 text-sm">{feature.description}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="primary" size="lg">
                Post a job now
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✨</span>
                  <span className="font-semibold text-gray-900">AI Calling Agent</span>
                </div>
                <span className="text-gray-600">Candidate</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👩</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-purple-100 rounded-lg p-3 mb-2">
                      <div className="w-full h-2 bg-purple-300 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-purple-300 rounded"></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Great. Tell me about a time you convinced a doubtful client.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨</span>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-sm text-gray-600">
                      I once handled a situation where...
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4 pt-6 border-t border-gray-200">
                <span className="text-sm text-gray-500">00:03</span>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium">
                  End Call
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


