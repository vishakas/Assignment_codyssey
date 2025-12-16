'use client'

import React from 'react'

export default function JobPrepBanner() {
  return (
    <section 
      className="w-full py-3 sm:py-4 min-h-[70px] sm:min-h-[80px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(93.17deg, #0066FF 4.67%, #8F00FF 73.02%)',
        backgroundColor: '#0066FF'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Left Side: Job Prep Icon + Text + NEW Chip + Subtitle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            {/* AI Icon in light blue square */}
            <div className="bg-[#4FC3F7] rounded-lg p-1.5 sm:p-2 md:p-2.5 flex items-center justify-center shrink-0">
              <span className="text-white text-base sm:text-lg md:text-xl font-bold">ai</span>
            </div>
            
            <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-white text-base sm:text-lg md:text-[20px] font-[600] whitespace-nowrap">Job Prep</span>
                {/* NEW Chip with sky/white gradient - pill-like */}
                <span 
                  className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase text-white shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #4FC3F7 0%, #FFFFFF 100%)'
                  }}
                >
                  ✨ NEW
                </span>
              </div>
              <p className="text-white text-[10px] sm:text-[11px] md:text-[12px] font-[600] whitespace-nowrap">Practice interviews with AI Coach</p>
            </div>
          </div>

          {/* Middle: Tilted Company Icons - Overlapping */}
          <div className="hidden sm:flex items-center justify-center flex-1 min-w-0 mx-2 md:mx-4">
            <div className="flex items-center relative" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
              {/* PhonePe 1 (Blue) */}
              <div 
                className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center relative z-[6]"
                style={{ transform: 'rotate(-8deg)', marginLeft: '0', marginRight: '-8px' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#5F259F] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">1</span>
                </div>
              </div>
              
              {/* PhonePe (Purple with Hindi) */}
              <div 
                className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center relative z-[5]"
                style={{ transform: 'rotate(5deg)', marginRight: '-8px' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#5F259F] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] sm:text-xs">पे</span>
                </div>
              </div>
              
              {/* Amazon */}
              <div 
                className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center relative z-[4]"
                style={{ transform: 'rotate(-6deg)', marginRight: '-8px' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FF9900] rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">a</span>
                </div>
              </div>
              
              {/* Apple */}
              <div 
                className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center relative z-[3]"
                style={{ transform: 'rotate(4deg)', marginRight: '-8px' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black rounded flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
              </div>
              
              {/* Airtel */}
              <div 
                className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center relative z-[2]"
                style={{ transform: 'rotate(-5deg)', marginRight: '-8px' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#E60012] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs">airt</span>
                </div>
              </div>
              
              {/* Netflix */}
              <div 
                className="bg-white rounded-lg p-1 shadow-md flex items-center justify-center relative z-[1]"
                style={{ transform: 'rotate(6deg)', marginRight: '0' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black rounded flex items-center justify-center">
                  <span className="text-[#E50914] font-bold text-sm sm:text-base md:text-lg">N</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Practice Now Button */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            {/* Practice Now Button - White with blue border and text */}
            <button 
              className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-[#0066FF] hover:text-white transition-colors whitespace-nowrap"
            >
              Practice now
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
