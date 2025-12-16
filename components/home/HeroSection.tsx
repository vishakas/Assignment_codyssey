'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ApnaLogo from '@/components/common/ApnaLogo'

export default function HeroSection() {
  const [jobQuery, setJobQuery] = useState('')
  const [experience, setExperience] = useState('')
  const [location, setLocation] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
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
        className="hidden lg:block absolute right-0 top-0 pointer-events-none"
        style={{
          width: '45%',
          height: '80%',
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


      <div className="relative z-10 mx-auto flex h-full w-full max-w-screen-xl flex-col px-4 sm:px-5 md:px-6 lg:px-10 md:mb-[150px] md:block md:h-auto">
        <div className="max-w-2xl w-full">
          {/* Top Tagline */}
          <h1 className="mb-3 sm:mb-4 md:mb-6 font-bold text-[#108455] text-sm sm:text-base md:text-[16px] tracking-wide uppercase">
            INDIA&apos;S #1 JOB PLATFORM
          </h1>
          
          {/* Main Heading */}
          <h2 className="mb-3 sm:mb-4 md:mb-6 w-full md:w-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D152B] leading-tight">
            Your job search ends here
          </h2>
          
          {/* Subtext */}
          <h2 className="mb-6 sm:mb-8 md:mb-10 w-full md:w-auto text-base sm:text-lg md:text-xl font-semibold text-[rgba(29,21,43,0.8)]">
            Discover 50 lakh+ career opportunities
          </h2>

          {/* Search Form */}
          {/* Mobile: Single Input Field with Hero Image Overlay */}
          <div className="md:hidden mb-8 sm:mb-10 relative" style={{ minHeight: '120px', paddingTop: '60px' }}>
            {/* Hero Image positioned over search input */}
            <div 
              className="absolute right-0 pointer-events-none"
              style={{
                width: '50%',
                top: '0',
                zIndex: 99,
                height: 'auto'
              }}
            >
              <div
                className="relative"
                style={{
                  background: 'radial-gradient(circle, rgba(231, 233, 246, 0.5), transparent 60%)',
                  padding: '10px 8px',
                  borderRadius: '12px'
                }}
              >
                <img
                  src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fcloudinary%2FApnaHeroNew.png&w=3840&q=75"
                  alt="Hero"
                  className="w-full h-auto object-contain object-right"
                  style={{
                    opacity: 0.9,
                    maxHeight: '180px',
                    display: 'block'
                  }}
                />
              </div>
            </div>
            
            <div 
              className="w-full rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] relative z-20 overflow-visible"
              onClick={() => setIsMobileSearchOpen(true)}
              style={{ marginTop: '40px' }}
            >
              <div className="relative h-[50px] sm:h-[60px] flex items-center px-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485] z-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search jobs by area"
                  value={jobQuery || location ? `${jobQuery || ''} ${location || ''}`.trim() : ''}
                  readOnly
                  className="w-full h-full pl-11 pr-4 border-0 focus:outline-none text-sm font-medium text-[#5B5563] bg-transparent flex items-center cursor-pointer relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Full Search Form */}
          <div 
            className="hidden md:flex w-full flex-col items-stretch gap-0 rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] relative z-20 overflow-hidden mb-[36px]"
          >
            <div className="flex flex-row md:h-[60px] w-full items-stretch md:items-center gap-0 md:pr-[140px]">
              {/* Search Field */}
              <div className="md:flex-[2] relative md:h-full h-[60px] flex items-center md:border-r border-[#E4E2E8] md:pr-3 lg:pr-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search jobs by 'skill'"
                  value={jobQuery}
                  onChange={(e) => setJobQuery(e.target.value)}
                  className="w-full h-full pl-11 pr-4 border-0 focus:outline-none text-sm font-medium text-[#5B5563] bg-transparent flex items-center"
                />
              </div>
              
              {/* Experience Dropdown */}
              <div className="relative md:flex-1 md:h-full h-[60px] flex items-center md:border-r border-[#E4E2E8] md:px-3 lg:px-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Location Field */}
              <div className="relative md:flex-1 md:h-full h-[60px] flex items-center md:px-3 lg:px-4">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for an area or..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-full pl-11 pr-4 border-0 focus:outline-none text-sm font-medium text-[#5B5563] bg-transparent flex items-center"
                />
              </div>
            </div>
            
            {/* Search Button - Desktop */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center">
              <button 
                className="bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm px-6 rounded-[4px] transition-colors h-[40px] flex items-center whitespace-nowrap"
              >
                Search jobs
              </button>
            </div>
          </div>

          {/* Proud to Support Section */}
          <div className="mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10">
            <p className="text-base sm:text-[16px] md:text-[18px] font-[700] text-[#1D152B] mb-4 sm:mb-5 md:mb-6">Proud to Support</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
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
          <div className="mt-6 sm:mt-8 md:mt-10">
            <p className="text-base sm:text-[16px] md:text-[18px] font-[600] text-[#1D152B] mb-4 sm:mb-5 md:mb-6">
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

      </div>

      {/* Mobile Search Modal */}
      {isMobileSearchOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
            {/* Back Button */}
            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="p-2 -ml-2"
              aria-label="Close search"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <ApnaLogo width={24} height={24} />
              <span className="text-lg font-semibold text-[#137A6A]">apna</span>
            </div>

            {/* Candidate Login Button */}
            <Link
              href="/login"
              className="bg-[#137A6A] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Candidate Login
            </Link>
          </div>

          {/* Search Form */}
          <div className="px-4 py-6 space-y-4">
            {/* Search by Title Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search jobs by 'title'"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                className="w-full h-[50px] pl-12 pr-4 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#137A6A] text-sm font-medium text-[#5B5563]"
                autoFocus
              />
            </div>

            {/* Experience Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full h-[50px] pl-12 pr-10 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#137A6A] appearance-none text-sm font-medium text-[#5B5563]"
              >
                <option value="">Your Experience</option>
                <option value="fresher">Fresher</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#7A7485]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A7485]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for an area or city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-[50px] pl-12 pr-4 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#137A6A] text-sm font-medium text-[#5B5563]"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={() => {
                // Handle search
                setIsMobileSearchOpen(false)
              }}
              className="w-full bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm py-3 rounded-lg transition-colors mt-2"
            >
              Search jobs
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
