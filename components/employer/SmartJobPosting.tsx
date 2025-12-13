import React from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function SmartJobPosting() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💼</span>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Smart Job Posting
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get applications from relevant, high-intent candidates
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Advanced Job Filters & Smart Matching</h3>
                  <p className="text-sm text-gray-600">
                    Use intelligent filters to find candidates that match your exact requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Smart AI Lead Management</h3>
                  <p className="text-sm text-gray-600">
                    Boost recruiter productivity by automatically categorizing leads into matched and non-matched candidates
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Inbound Calls & WhatsApp Alerts</h3>
                  <p className="text-sm text-gray-600">
                    Receive instant notifications when qualified candidates reach out
                  </p>
                </div>
              </div>
            </div>
            <Button variant="primary" size="lg">
              Post a smart-AI job
            </Button>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20"></div>
                <Card className="bg-white p-6 max-w-sm mx-auto relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Software Developer</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Raj Residency, Bengaluru, Karnataka
                  </p>
                  <p className="text-xs text-gray-500">Posted on Nov 30, 2023</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


