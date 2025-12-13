import React from 'react'

export default function SupportSection() {
  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="container-custom">
        <p className="text-sm font-semibold text-gray-700 mb-4">Proud to Support</p>
        <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              🇮🇳
            </div>
            <span>GOVERNMENT OF INDIA</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
              ⚙️
            </div>
            <span>AICTE</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              🏛️
            </div>
            <span>DPIIT #startupindia</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
        </p>
      </div>
    </section>
  )
}


