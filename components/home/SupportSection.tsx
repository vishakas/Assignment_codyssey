import React from 'react'

export default function SupportSection() {
  return (
    <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
      <div className="container-custom">
        {/* Proud to Support Section */}
        <div className="mb-8">
          <p className="text-[18px] font-bold text-gray-900 mb-6">Proud to Support</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <div className="text-xs text-gray-700">
                <div className="font-semibold">GOVERNMENT OF INDIA</div>
                <div className="text-[10px] text-gray-600">MINISTRY OF LABOUR & EMPLOYMENT</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-700">AICTE</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-blue-700">DPIIT</span>
              </div>
              <span className="text-xs text-gray-700 font-medium">#startupindia</span>
            </div>
          </div>
        </div>
        
        {/* Trust Section */}
        <p className="text-[18px] font-[600] text-gray-900 mt-8">
          Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
        </p>
      </div>
    </section>
  )
}
