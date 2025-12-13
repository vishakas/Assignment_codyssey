'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {isExpanded && (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 mb-2 animate-slide-up">
            <p className="text-sm font-semibold text-gray-900 mb-2">Quick Actions</p>
            <div className="space-y-2">
              <Link
                href="/employer/post-job"
                className="block text-sm text-gray-700 hover:text-primary-600 py-2 px-3 rounded hover:bg-gray-50"
              >
                Post a Job
              </Link>
              <Link
                href="/employer/pricing"
                className="block text-sm text-gray-700 hover:text-primary-600 py-2 px-3 rounded hover:bg-gray-50"
              >
                View Pricing
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-gray-700 hover:text-primary-600 py-2 px-3 rounded hover:bg-gray-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span className="font-medium">Start your job post</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}


