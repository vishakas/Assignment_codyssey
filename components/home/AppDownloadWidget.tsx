'use client'

import React, { useState } from 'react'

export default function AppDownloadWidget() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 max-w-sm animate-slide-up">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
            <div className="text-4xl">📱</div>
          </div>
          <p className="text-xs text-gray-600 text-center">Scan the QR</p>
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-3">Or</p>
          <div className="space-y-2 mb-4">
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <span className="text-xs font-semibold">Download on the App Store</span>
            </button>
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <span className="text-xs font-semibold">GET IT ON Google Play</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="font-bold text-gray-900">apna</span>
            <span>4.7 ⭐</span>
            <span>7L reviews</span>
            <span>5cr+ Downloads</span>
          </div>
        </div>
      </div>
    </div>
  )
}


