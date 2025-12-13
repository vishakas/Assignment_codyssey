'use client'

import React, { useState } from 'react'

interface JobPrepCard {
  id: string
  title: string
  company: string
  bgImage: string
  logoImage: string
  humanImage: string
}

const jobPrepCards: JobPrepCard[] = [
  {
    id: 'red-bull',
    title: 'Student Marketeer',
    company: 'Red Bull',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/red-bull/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/red-bull.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/red-bull/Human.png',
  },
  {
    id: 'netflix',
    title: 'Content Strategist',
    company: 'Netflix',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/netflix/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/netflix.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/netflix/Human.png',
  },
  {
    id: 'apple',
    title: 'Product Manager',
    company: 'Apple',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/apple/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/apple.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/apple/Human.png',
  },
  {
    id: 'formula-1',
    title: 'Marketing Executive',
    company: 'Formula 1',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/formula-1/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/formula-1.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/formula-1/Human.png',
  },
  {
    id: 'nvidia',
    title: 'Software Engineer',
    company: 'Nvidia',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/nvidia/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/nvidia.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/nvidia/Human.png',
  },
  {
    id: 'google',
    title: 'UX Designer',
    company: 'Google',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/google/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/google.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/google/Human.png',
  },
  {
    id: 'shaadi-com',
    title: 'Product Designer',
    company: 'Shaadi.com',
    bgImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/shaadi-com/Card.gif',
    logoImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/company_name/shaadi-com.webp',
    humanImage: 'https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/carousels/shaadi-com/Human.png',
  },
]

export default function JobPrepSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % jobPrepCards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + jobPrepCards.length) % jobPrepCards.length)
  }

  const getCardPosition = (index: number) => {
    const totalCards = jobPrepCards.length
    const relativeIndex = (index - currentIndex + totalCards) % totalCards
    
    // Always show 5 cards: center + 2 left + 2 right
    if (relativeIndex === 0 || relativeIndex === 1 || relativeIndex === 2 || 
        relativeIndex === totalCards - 1 || relativeIndex === totalCards - 2) return 'visible'
    return 'hidden'
  }

  const getCardStyle = (index: number) => {
    const totalCards = jobPrepCards.length
    const relativeIndex = (index - currentIndex + totalCards) % totalCards
    
    // Left-most card (2 positions before center) - Far-left
    if (relativeIndex === totalCards - 2) {
      return {
        transform: 'translateX(calc(-50% - 180px)) scale(0.78)',
        zIndex: 1,
        opacity: 0.35,
      }
    }
    // Second-left card (1 position before center) - Slight-left
    else if (relativeIndex === totalCards - 1) {
      return {
        transform: 'translateX(calc(-50% - 90px)) scale(0.88)',
        zIndex: 2,
        opacity: 0.55,
      }
    }
    // Center card
    else if (relativeIndex === 0) {
      return {
        transform: 'translateX(-50%) scale(1)',
        zIndex: 10,
        opacity: 1,
      }
    }
    // Second-right card (1 position after center) - Slight-right
    else if (relativeIndex === 1) {
      return {
        transform: 'translateX(calc(-50% + 90px)) scale(0.88)',
        zIndex: 2,
        opacity: 0.55,
      }
    }
    // Right-most card (2 positions after center) - Far-right
    else if (relativeIndex === 2) {
      return {
        transform: 'translateX(calc(-50% + 180px)) scale(0.78)',
        zIndex: 1,
        opacity: 0.35,
      }
    }
    // Hidden cards
    else {
      return {
        transform: 'translateX(-50%) scale(0.5)',
        zIndex: 0,
        opacity: 0,
      }
    }
  }

  const getCardShadow = () => {
    // All cards get the same soft glow
    return 'shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
  }

  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #E5F4FF 0%, #E8E4FF 45%, #F3E8FF 75%, #F7EDFF 100%), radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6), transparent 70%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Content Area */}
          <div className="flex-1 lg:max-w-[400px]">
            {/* AI Icon */}
            <div className="mb-6">
              <img 
                src="https://apna.co/_next/image?url=%2FAI.png&w=256&q=75" 
                alt="AI Logo" 
                className="w-[72px] h-[72px]"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="w-[72px] h-[72px] rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-purple-500 flex items-center justify-center shadow-lg"><span class="text-white text-2xl font-bold">ai</span></div>'
                  }
                }}
              />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1D152B] mb-4 leading-tight tracking-tight">
              Job Prep
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl lg:text-[24px] font-medium mb-8 leading-tight" style={{ color: 'rgba(29,21,43,0.75)' }}>
              Practice interviews with AI Interview Coach
            </p>

            {/* CTA Button */}
            <button 
              className="px-6 py-[14px] rounded-full font-semibold text-base text-white transition-all hover:shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #007AFF 0%, #9B00FF 100%)',
                fontWeight: 600,
              }}
            >
              View all Preps →
            </button>
          </div>

          {/* Right Side - Stacked Carousel */}
          <div className="flex-1 lg:flex-[1.5] w-full lg:w-auto">
            <div className="relative flex items-center justify-center min-h-[500px]">
              {/* Left Arrow */}
              <button
                onClick={prevCard}
                className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-[10] w-[48px] h-[48px] rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-[1.08] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                aria-label="Previous card"
              >
                <svg 
                  className="w-5 h-5 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Cards Container */}
              <div className="relative w-[750px] h-[500px] overflow-visible mx-auto hidden md:block">
                {jobPrepCards.map((card, index) => {
                  const style = getCardStyle(index)
                  const position = getCardPosition(index)
                  const shadow = getCardShadow()
                  
                  if (position === 'hidden') return null

                  return (
                    <div
                      key={card.id}
                      className="absolute top-0 left-1/2 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                      style={{
                        width: '418px',
                        height: '494px',
                        transform: style.transform,
                        zIndex: style.zIndex as number,
                        opacity: style.opacity as number,
                      }}
                    >
                      {/* White Background Container */}
                      <div 
                        className={`relative w-full h-full bg-white rounded-[24px] border-[5px] border-white overflow-hidden ${shadow}`}
                        style={(style.opacity as number) < 1 ? { 
                          backdropFilter: 'blur(1px)', 
                          WebkitBackdropFilter: 'blur(1px)' 
                        } : {}}
                      >
                        {/* Card Image */}
                        <div className="relative w-full h-full" style={{ borderRadius: '18px', overflow: 'hidden' }}>
                          <img
                            src={card.bgImage}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />

                          {/* Bottom Fade Overlay Gradient */}
                          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent z-[2]" />

                          {/* Content Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 flex flex-col justify-between p-5 md:p-6 z-[1]">
                            {/* Top Section - Title and Logo */}
                            <div className="flex flex-col gap-2 md:gap-3">
                              <h3 className="text-white text-[28px] font-[700] leading-tight">
                                {card.title}
                              </h3>
                              <div className="flex items-center gap-[10px]">
                                <img 
                                  src={card.logoImage} 
                                  alt={card.company}
                                  className="h-[32px] w-auto object-contain"
                                />
                                <span className="text-white text-[18px] font-semibold">
                                  {card.company}
                                </span>
                              </div>
                            </div>

                            {/* Middle Section - Human Image */}
                            <div className="flex-1 flex items-center justify-center py-2">
                              <img 
                                src={card.humanImage} 
                                alt={card.title}
                                className="max-w-full max-h-[180px] md:max-h-[220px] lg:max-h-[250px] object-contain"
                              />
                            </div>

                            {/* Bottom Section - CTA Button and Subtext */}
                            <div className="flex flex-col gap-2 md:gap-3 z-[3]">
                              <button
                                className="w-[80%] mx-auto py-[12px] rounded-full text-[18px] font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                                style={{
                                  background: 'linear-gradient(90deg, #0070FF, #A000FF)',
                                }}
                              >
                                Practice Interview
                              </button>
                              <p className="text-white text-xs md:text-sm text-center opacity-90 font-medium">
                                10 min AI Interview
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextCard}
                className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-[10] w-[48px] h-[48px] rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-[1.08] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                aria-label="Next card"
              >
                <svg 
                  className="w-5 h-5 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Carousel - Single Card View */}
            <div className="relative w-full max-w-[320px] h-[450px] mx-auto md:hidden">
              {jobPrepCards.map((card, index) => {
                if (index !== currentIndex) return null
                
                return (
                  <div
                    key={card.id}
                    className="relative w-full h-full bg-white rounded-[22px] border-[4px] border-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  >
                    <div className="relative w-full h-full rounded-[18px] overflow-hidden">
                      <img
                        src={card.bgImage}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 flex flex-col justify-between p-5">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-white text-lg font-bold leading-tight">
                            {card.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <img 
                              src={card.logoImage} 
                              alt={card.company}
                              className="h-5 w-auto object-contain"
                            />
                            <span className="text-white text-sm font-semibold">
                              {card.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center py-2">
                          <img 
                            src={card.humanImage} 
                            alt={card.title}
                            className="max-w-full max-h-[180px] object-contain"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            className="px-5 py-2 rounded-full font-semibold text-sm text-white transition-all hover:shadow-lg"
                            style={{
                              background: 'linear-gradient(90deg, #0066FF 0%, #8F00FF 100%)',
                            }}
                          >
                            Practice Interview
                          </button>
                          <p className="text-white text-xs text-center opacity-90 font-medium">
                            10 min AI Interview
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              
              {/* Mobile Navigation Arrows */}
              <button
                onClick={prevCard}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-[10] w-[44px] h-[44px] rounded-full bg-white shadow-lg flex items-center justify-center"
                aria-label="Previous card"
              >
                <svg 
                  className="w-5 h-5 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextCard}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-[10] w-[44px] h-[44px] rounded-full bg-white shadow-lg flex items-center justify-center"
                aria-label="Next card"
              >
                <svg 
                  className="w-5 h-5 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile: Single Card Swipe Indicator */}
            <div className="lg:hidden flex justify-center gap-2 mt-6">
              {jobPrepCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#0066FF] w-8' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

