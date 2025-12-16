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
      className="w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #E5F4FF 0%, #E8E4FF 45%, #F3E8FF 75%, #F7EDFF 100%), radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6), transparent 70%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-12">
          {/* Left Content Area */}
          <div className="flex-1 lg:max-w-[400px] w-full text-center lg:text-left">
            {/* AI Icon */}
            <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center lg:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">ai</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold text-[#1D152B] mb-2 sm:mb-3 md:mb-4 leading-tight tracking-tight">
              Job Prep
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[24px] font-medium mb-4 sm:mb-6 md:mb-8 leading-tight" style={{ color: 'rgba(29,21,43,0.75)' }}>
              Practice interviews with AI Interview Coach
            </p>

            {/* CTA Button - Hidden on mobile, shown on desktop */}
            <button 
              className="hidden lg:block px-6 py-[14px] rounded-full font-semibold text-base text-white transition-all hover:shadow-lg"
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
            <div className="relative flex items-center justify-center">
              {/* Desktop Left Arrow */}
              <button
                onClick={prevCard}
                className="hidden md:flex absolute left-[-40px] lg:left-[-50px] top-1/2 -translate-y-1/2 z-[10] w-[48px] h-[48px] lg:w-[52px] lg:h-[52px] rounded-full bg-white shadow-xl items-center justify-center hover:scale-[1.08] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                aria-label="Previous card"
              >
                <svg 
                  className="w-5 h-5 lg:w-6 lg:h-6 text-[#1D152B]" 
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

              {/* Desktop Right Arrow */}
              <button
                onClick={nextCard}
                className="hidden md:flex absolute right-[-40px] lg:right-[-50px] top-1/2 -translate-y-1/2 z-[10] w-[48px] h-[48px] lg:w-[52px] lg:h-[52px] rounded-full bg-white shadow-xl items-center justify-center hover:scale-[1.08] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                aria-label="Next card"
              >
                <svg 
                  className="w-5 h-5 lg:w-6 lg:h-6 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Carousel - Stacked Cards View */}
            <div className="relative w-full max-w-[280px] h-[380px] mx-auto md:hidden">
              {/* Mobile Left Arrow */}
              <button
                onClick={prevCard}
                className="absolute left-[-12px] sm:left-[-16px] top-1/2 -translate-y-1/2 z-[20] w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Previous card"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Mobile Right Arrow */}
              <button
                onClick={nextCard}
                className="absolute right-[-12px] sm:right-[-16px] top-1/2 -translate-y-1/2 z-[20] w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Next card"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#1D152B]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {jobPrepCards.map((card, index) => {
                const relativeIndex = (index - currentIndex + jobPrepCards.length) % jobPrepCards.length
                
                // Show only 5 cards: center + 2 left + 2 right
                if (relativeIndex > 4) return null
                
                let cardStyle: React.CSSProperties = {}
                if (relativeIndex === 0) {
                  // Center card (foreground)
                  cardStyle = {
                    transform: 'translateX(-50%) scale(1)',
                    zIndex: 10,
                    opacity: 1,
                  }
                } else if (relativeIndex === 1) {
                  // Right card
                  cardStyle = {
                    transform: 'translateX(calc(-50% + 40px)) scale(0.85)',
                    zIndex: 3,
                    opacity: 0.6,
                  }
                } else if (relativeIndex === 2) {
                  // Far right card
                  cardStyle = {
                    transform: 'translateX(calc(-50% + 60px)) scale(0.75)',
                    zIndex: 2,
                    opacity: 0.4,
                  }
                } else if (relativeIndex === jobPrepCards.length - 1) {
                  // Left card
                  cardStyle = {
                    transform: 'translateX(calc(-50% - 40px)) scale(0.85)',
                    zIndex: 3,
                    opacity: 0.6,
                  }
                } else if (relativeIndex === jobPrepCards.length - 2) {
                  // Far left card
                  cardStyle = {
                    transform: 'translateX(calc(-50% - 60px)) scale(0.75)',
                    zIndex: 2,
                    opacity: 0.4,
                  }
                } else {
                  return null
                }
                
                return (
                  <div
                    key={card.id}
                    className="absolute top-0 left-1/2 transition-all duration-300 ease-out"
                    style={{
                      width: '260px',
                      height: '360px',
                      ...cardStyle
                    }}
                  >
                    <div className="relative w-full h-full bg-white rounded-[20px] border-[3px] border-white overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                      <div className="relative w-full h-full rounded-[17px] overflow-hidden">
                        <img
                          src={card.bgImage}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 flex flex-col justify-between p-4">
                          <div className="flex flex-col gap-2">
                            <h3 className="text-white text-base sm:text-lg font-bold leading-tight">
                              {card.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <img 
                                src={card.logoImage} 
                                alt={card.company}
                                className="h-5 w-auto object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none'
                                }}
                              />
                              <span className="text-white text-xs sm:text-sm font-semibold">
                                {card.company}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 flex items-center justify-center py-2">
                            <img 
                              src={card.humanImage} 
                              alt={card.title}
                              className="max-w-full max-h-[140px] sm:max-h-[160px] object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <button
                              className="px-4 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white transition-all hover:shadow-lg"
                              style={{
                                background: 'linear-gradient(90deg, #0066FF 0%, #8F00FF 100%)',
                              }}
                            >
                              Practice Interview
                            </button>
                            <p className="text-white text-[10px] sm:text-xs text-center opacity-90 font-medium">
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

            {/* Mobile: View All Button */}
            <div className="md:hidden flex justify-center mt-4">
              <button 
                className="px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #0066FF 0%, #8F00FF 100%)',
                }}
              >
                View all Preps →
              </button>
            </div>

            {/* Mobile: Card Swipe Indicator */}
            <div className="md:hidden flex justify-center gap-1.5 mt-3">
              {jobPrepCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#0066FF] w-6' 
                      : 'bg-gray-300 w-1'
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

