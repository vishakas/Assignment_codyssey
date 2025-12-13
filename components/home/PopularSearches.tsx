'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface PopularSearch {
  id: string
  title: string
  rank: number
  image: string
}

const popularSearches: PopularSearch[] = [
  { id: '1', title: 'Jobs for Freshers', rank: 1, image: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&w=3840&q=50' },
  { id: '2', title: 'Work from home Jobs', rank: 2, image: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fwork-from-home-jobs.png&w=3840&q=50' },
  { id: '3', title: 'Part time Jobs', rank: 3, image: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fpart-time-jobs.png&w=3840&q=50' },
  { id: '4', title: 'Jobs for Women', rank: 4, image: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fwomen-jobs.png&w=3840&q=50' },
  { id: '5', title: 'Full time Jobs', rank: 5, image: 'https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2FFull_time_banner_home_page.png&w=3840&q=50' },
]

export default function PopularSearches() {
  const getCardConfig = (title: string) => {
    switch (title) {
      case 'Jobs for Freshers':
        return {
          hoverBorderColor: '#6A4DFF',
          hoverBgTint: 'rgba(106, 77, 255, 0.1)',
        }
      case 'Work from home Jobs':
        return {
          hoverBorderColor: '#1F8268',
          hoverBgTint: 'rgba(31, 130, 104, 0.1)',
        }
      case 'Part time Jobs':
        return {
          hoverBorderColor: '#FF7A00',
          hoverBgTint: 'rgba(255, 122, 0, 0.1)',
        }
      case 'Jobs for Women':
        return {
          hoverBorderColor: '#1F8268',
          hoverBgTint: 'rgba(31, 130, 104, 0.1)',
        }
      case 'Full time Jobs':
        return {
          hoverBorderColor: '#0057FF',
          hoverBgTint: 'rgba(0, 87, 255, 0.1)',
        }
      default:
        return {
          hoverBorderColor: '#E8E4F2',
          hoverBgTint: 'rgba(0, 0, 0, 0)',
        }
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Text Block - Row 1, Col 1 */}
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="text-[48px] leading-[56px] font-bold text-[#1C152E] max-w-[320px]">
              Popular Searches on Apna
            </h2>
          </div>

          {/* Cards */}
          {popularSearches.map((search, index) => {
            const config = getCardConfig(search.title)
            
            // Determine grid position based on card index
            let gridPosition = ''
            if (index === 0) {
              // Card 1: Row 1, Col 2
              gridPosition = 'lg:col-start-2 lg:row-start-1'
            } else if (index === 1) {
              // Card 2: Row 1, Col 3
              gridPosition = 'lg:col-start-3 lg:row-start-1'
            } else if (index === 2) {
              // Card 3: Row 2, Col 1
              gridPosition = 'lg:col-start-1 lg:row-start-2'
            } else if (index === 3) {
              // Card 4: Row 2, Col 2
              gridPosition = 'lg:col-start-2 lg:row-start-2'
            } else if (index === 4) {
              // Card 5: Row 2, Col 3
              gridPosition = 'lg:col-start-3 lg:row-start-2'
            }
            
            return (
              <Link key={search.id} href={`/jobs?search=${search.id}`} className={`group h-full ${gridPosition}`}>
                <div
                  className={`
                    relative overflow-hidden
                    w-full h-full bg-white
                    border border-[#E8E4F2] rounded-[24px]
                    p-6 md:px-6 md:py-[40px]
                    min-h-[280px]
                    transition-all duration-500
                    group-hover:border-[2px]
                    group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                    group-hover:-translate-y-[4px]
                  `}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = config.hoverBorderColor
                    e.currentTarget.style.backgroundColor = config.hoverBgTint
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8E4F2'
                    e.currentTarget.style.backgroundColor = 'white'
                  }}
                >
                    {/* Layer 1: Stroked Background Text */}
                    <div 
                      className={`
                        absolute top-[-10px] left-[16px]
                        text-[60px] md:text-[84px]
                        font-[700] leading-none
                        text-transparent opacity-[0.9]
                        pointer-events-none
                        transition-all duration-500
                        group-hover:-translate-y-[4px]
                        group-hover:opacity-100
                      `}
                      style={{
                        WebkitTextStroke: '2px rgba(0,0,0,0.06)',
                        WebkitTextFillColor: 'transparent',
                        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      {search.title}
                    </div>

                    {/* Layer 2: Foreground Header Text */}
                    <div className="text-[14px] uppercase tracking-wide text-[#8C8595] mb-2 relative z-[3]">
                      TRENDING AT #{search.rank}
                    </div>

                    {/* Layer 3: Main Title */}
                    <h3 className="text-[22px] md:text-[28px] font-bold text-[#1C152E] mb-4 relative z-[3]">
                      {search.title}
                    </h3>

                    {/* Layer 4: CTA Button */}
                    <div className="inline-flex items-center px-4 py-2 text-[14px] font-semibold bg-[#155E4F] text-white rounded-[8px] relative z-[3]">
                      View all
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Layer 5: Person Image */}
                    {search.image && (
                      <div 
                        className={`
                          absolute bottom-0 right-0 z-[2]
                          transition-transform duration-500
                          group-hover:-translate-y-[4px]
                        `}
                        style={{
                          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      >
                        <Image
                          src={search.image}
                          alt={search.title}
                          width={180}
                          height={180}
                          className="h-[130px] md:h-[180px] w-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              )
          })}
        </div>
      </div>
    </section>
  )
}
