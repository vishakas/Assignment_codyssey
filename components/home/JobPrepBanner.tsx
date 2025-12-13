'use client'

import React from 'react'

export default function JobPrepBanner() {
  return (
    <section 
      className="w-full py-4 min-h-[80px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(93.17deg, #0066FF 4.67%, #8F00FF 73.02%)',
        backgroundColor: '#0066FF'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-8">
          {/* Left Side: Job Prep Icon + Text + NEW Chip + Subtitle */}
          <div className="flex items-center gap-3">
            {/* AI Icon in light blue square */}
            <div className="bg-[#4FC3F7] rounded-lg p-2.5 flex items-center justify-center shrink-0">
              <span className="text-white text-xl font-bold">ai</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white text-[20px] font-[600]">Job Prep</span>
                {/* NEW Chip with sky/white gradient - pill-like */}
                <span 
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase text-white"
                  style={{
                    background: 'linear-gradient(135deg, #4FC3F7 0%, #FFFFFF 100%)'
                  }}
                >
                  + NEW
                </span>
              </div>
              <p className="text-white text-[12px] font-[600]">Practice interviews with AI Coach</p>
            </div>
          </div>

          {/* Right Side: Tilted Company Icons + Practice Now Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Company Logos - Tilted with shadows */}
            <div className="flex items-center gap-3">
              {/* PhonePe 1 (Blue) */}
              <div 
                className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
                style={{ transform: 'rotate(-8deg)' }}
              >
                <div className="w-10 h-10 bg-[#5F259F] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              
              {/* PhonePe (Purple with Hindi) */}
              <div 
                className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
                style={{ transform: 'rotate(5deg)' }}
              >
                <div className="w-10 h-10 bg-[#5F259F] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">फोन</span>
                </div>
              </div>
              
              {/* Amazon */}
              <div 
                className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <div className="w-10 h-10 bg-[#FF9900] rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">a</span>
                </div>
              </div>
              
              {/* Apple */}
              <div 
                className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
                style={{ transform: 'rotate(4deg)' }}
              >
                <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
              </div>
              
              {/* Airtel */}
              <div 
                className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <div className="w-10 h-10 bg-[#E60012] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">airt</span>
                </div>
              </div>
              
              {/* Netflix */}
              <div 
                className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
                style={{ transform: 'rotate(6deg)' }}
              >
                <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                  <span className="text-[#E50914] font-bold text-lg">N</span>
                </div>
              </div>
            </div>
            
            {/* Practice Now Button - White with blue border and text */}
            <button 
              className="bg-white border-2 border-[#0066FF] text-[#0066FF] px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#0066FF] hover:text-white transition-colors whitespace-nowrap"
            >
              Practice now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile: Show Job Prep content + arrow button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              className="bg-white/20 border-2 border-white text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
