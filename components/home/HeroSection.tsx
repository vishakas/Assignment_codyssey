'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function HeroSection() {
  const [jobQuery, setJobQuery] = useState('')
  const [experience, setExperience] = useState('')
  const [location, setLocation] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // 15 brand logos for infinite carousel
  const brandLogos = [
    { name: 'Swiggy', url: 'https://cdn.apna.co/brands/swiggy.png' },
    { name: 'Uber', url: 'https://cdn.apna.co/brands/uber.png' },
    { name: 'Urban Company', url: 'https://cdn.apna.co/brands/urban-company.png' },
    { name: 'Zomato', url: 'https://cdn.apna.co/brands/zomato.png' },
    { name: 'FirstCry', url: 'https://cdn.apna.co/brands/firstcry.png' },
    { name: 'Airtel', url: 'https://cdn.apna.co/brands/airtel.png' },
    { name: 'Netflix', url: 'https://cdn.apna.co/brands/netflix.png' },
    { name: 'Amazon', url: 'https://cdn.apna.co/brands/amazon.png' },
    { name: 'PhonePe', url: 'https://cdn.apna.co/brands/phonepe.png' },
    { name: 'ICICI', url: 'https://cdn.apna.co/brands/icici.png' },
    { name: 'Jio', url: 'https://cdn.apna.co/brands/jio.png' },
    { name: 'Tata', url: 'https://cdn.apna.co/brands/tata.png' },
    { name: 'Reliance', url: 'https://cdn.apna.co/brands/reliance.png' },
    { name: 'HDFC Bank', url: 'https://cdn.apna.co/brands/hdfc.png' },
    { name: 'Tech Mahindra', url: 'https://cdn.apna.co/brands/tech-mahindra.png' },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...brandLogos, ...brandLogos]

  useEffect(() => {
    if (!carouselRef.current || isPaused) return

    const carousel = carouselRef.current
    let animationId: number
    let position = 0
    const speed = 0.5 // pixels per frame

    const animate = () => {
      position -= speed
      
      // Reset position when we've scrolled through one set of logos
      const logoWidth = 200 // approximate width including margin
      if (Math.abs(position) >= logoWidth * brandLogos.length) {
        position = 0
      }

      carousel.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isPaused, brandLogos.length])

  return (
    <section 
      className="py-8 lg:py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F4F2F8 0%, #E9E4F3 35%, #F4F2F8 100%)'
      }}
    >
      {/* Background Hero Image Layer */}
      <div 
        className="hidden lg:block absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: '45%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 55%, #e7e9f6, transparent 65%)',
          zIndex: 1
        }}
      >
        <img
          src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fcloudinary%2FApnaHeroNew.png&w=3840&q=75"
          alt="Hero"
          className="absolute right-0 bottom-0 h-full w-full object-contain object-right-bottom"
          style={{
            zIndex: 1
          }}
        />
      </div>

      {/* Tablet: Smaller hero image */}
      <div 
        className="hidden md:block lg:hidden absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: '35%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 55%, #e7e9f6, transparent 65%)',
          zIndex: 1
        }}
      >
        <img
          src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fcloudinary%2FApnaHeroNew.png&w=3840&q=75"
          alt="Hero"
          className="absolute right-0 bottom-0 h-full w-full object-contain object-right-bottom opacity-60"
          style={{
            zIndex: 1
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-2xl">
          {/* Top Tagline */}
          <div className="mb-6">
            <span className="text-[16px] font-[700] text-[#108455] tracking-wide uppercase">
              INDIA&apos;S #1 JOB PLATFORM
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] text-[#1D152B] mb-4 leading-tight">
            Your job search ends here
          </h1>
          
          {/* Subtext */}
          <p className="text-[18px] md:text-[20px] text-[rgba(29,21,43,0.8)]">
            Discover 50 lakh+ career opportunities
          </p>

          {/* Search Form - Directly under subtitle with 32px margin-top */}
          <div 
            className="mb-[36px] mt-auto flex w-full flex-col items-center gap-[16px] rounded-xl bg-white pb-0 md:mb-0 md:flex-row md:gap-0 md:py-[8px] md:px-[12px] inline-flex md:w-[860px] mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.06)] relative z-20 mt-8 h-[60px]"
          >
            <div className="flex flex-col md:flex-row md:h-full w-full items-center gap-0 md:pr-40">
              {/* Search Field */}
              <div className="md:flex-[2] relative md:h-full h-[60px] flex items-center md:border-r border-[#E4E2E8] md:pr-4 border-b md:border-b-0 border-[#E4E2E8]">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search jobs by skill, company..."
                  value={jobQuery}
                  onChange={(e) => setJobQuery(e.target.value)}
                  className="w-full h-full pl-11 pr-4 border-0 focus:outline-none text-sm font-medium text-[#5B5563] bg-transparent flex items-center"
                />
              </div>
              
              {/* Experience Dropdown */}
              <div className="relative md:flex-1 md:h-full h-[60px] flex items-center md:border-r border-[#E4E2E8] md:px-4 border-b md:border-b-0 border-[#E4E2E8]">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full h-full pl-11 pr-8 border-0 focus:outline-none appearance-none bg-transparent text-sm font-medium text-[#5B5563] flex items-center"
                >
                  <option value="">Your Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#7A7485]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Location Field */}
              <div className="relative md:flex-1 md:h-full h-[60px] flex items-center md:px-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for area or city..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-full pl-11 pr-4 border-0 focus:outline-none text-sm font-medium text-[#5B5563] bg-transparent flex items-center"
                />
              </div>
            </div>
            
            {/* Search Button */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:flex items-center">
              <button 
                className="bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm px-6 rounded-[4px] transition-colors h-[40px] flex items-center"
              >
                Search jobs
              </button>
            </div>
            
            {/* Mobile Search Button */}
            <div className="md:hidden w-full px-4 pb-4">
              <button 
                className="w-full bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm px-6 rounded-[4px] transition-colors h-[40px] flex items-center justify-center"
              >
                Search jobs
              </button>
            </div>
          </div>

          {/* Proud to Support Section */}
          <div className="mb-8 mt-8">
            <p className="text-[18px] font-[700] text-[#1D152B] mb-6">Proud to Support</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="h-10 flex items-center">
                <img 
                  src="https://cdn.apna.co/apna-learn/Support%20Icons/DPIIT-header-new.png" 
                  alt="DPIIT" 
                  className="h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="h-10 flex items-center">
                <img 
                  src="https://cdn.apna.co/apna-learn/Support%20Icons/aicte-seeklogo.png" 
                  alt="AICTE" 
                  className="h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="h-10 flex items-center">
                <img 
                  src="https://cdn.apna.co/apna-learn/Support%20Icons/DPIIT-header-new.png" 
                  alt="DPIIT" 
                  className="h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-10">
            <p className="text-[18px] font-[600] text-[#1D152B] mb-6">
              Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
            </p>

            {/* Infinite Logo Carousel */}
            <div 
              className="relative overflow-hidden"
              style={{
                height: '48px'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                ref={carouselRef}
                className="flex items-center"
                style={{
                  gap: '48px',
                  width: 'fit-content'
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div 
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center mx-6"
                    style={{ 
                      height: '48px',
                      width: 'auto',
                      minWidth: '120px'
                    }}
                  >
                    <div className="h-[36px] md:h-[42px] lg:h-[48px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                      <span className="text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap">{logo.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Hero Image below content */}
        <div className="md:hidden mt-8">
          <div 
            className="relative w-full"
            style={{
              background: 'radial-gradient(circle, #E7E9F6, transparent 70%)',
              padding: '40px 20px',
              borderRadius: '16px',
              opacity: 0.4
            }}
          >
            <img
              src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fcloudinary%2FApnaHeroNew.png&w=3840&q=75"
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
