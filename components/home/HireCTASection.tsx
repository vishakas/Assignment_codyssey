import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HireCTASection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="rounded-[36px] border border-[#E0F3EC] px-[72px] flex items-end justify-between gap-x-[40px] max-w-[1280px] mx-auto w-full"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F4FFFA 20%, #EEFFF7 60%, #E6FDF5 100%)'
          }}
        >
          {/* Left: Image */}
          <div className="flex-shrink-0 self-end !mb-0 !pb-0">
            <Image
              src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/two-people.png"
              alt="People working together"
              width={440}
              height={440}
              className="h-[440px] !mb-0 !pb-0"
              style={{
                objectFit: 'contain',
                objectPosition: 'bottom'
              }}
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col">
            {/* Badge */}
            <span 
              className="inline-block w-fit text-[20px] font-bold text-[#147D6F] py-[6px] px-[22px] rounded-xl mb-3"
              style={{
                background: 'rgba(20,125,111,0.10)'
              }}
            >
              APNA FOR EMPLOYERS
            </span>

            {/* Heading */}
            <h2 className="text-[48px] font-bold leading-[1.1] text-[rgb(0_95_62/var(--tw-text-opacity,1))] mb-5">
              Want to hire?
            </h2>

            {/* Subtext */}
            <p 
              className="text-[16px] font-semibold mb-8"
              style={{
                color: 'rgba(42,42,42,0.8)'
              }}
            >
              Find the best candidate from 5 crore+ active job seekers!
            </p>

            {/* Button */}
            <Link
              href="/employer"
              className="inline-flex items-center justify-center gap-2 h-12 max-w-[180px] min-w-[150px] px-5 rounded-[14px] bg-white border-2 border-[#147D6F] text-[#147D6F] text-[18px] font-semibold transition-colors hover:bg-[rgba(20,125,111,0.06)] mb-6"
            >
              Post job
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

