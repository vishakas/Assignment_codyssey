'use client'

import React from 'react'
import Image from 'next/image'

export default function DownloadApnaApp() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="rounded-[32px] w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-6 md:px-8 lg:px-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #F7EDFF 0%, #F3E9FF 100%)',
            paddingTop: '64px',
            paddingBottom: '64px'
          }}
        >
          {/* Left Column: Text + QR Box */}
          <div className="flex-1 flex flex-col justify-center w-full lg:w-auto">
            {/* Main Heading */}
            <h2 
              className="text-[48px] font-bold mb-3"
              style={{ 
                color: 'rgb(81 33 148/var(--tw-text-opacity,1))',
                letterSpacing: '0'
              }}
            >
              Download Apna app!
            </h2>

            {/* Sub-heading */}
            <p 
              className="text-[16px] mb-6"
              style={{ 
                color: '#1D0E32',
                lineHeight: '1.5',
                fontWeight: 600
              }}
            >
              Unlimited job applications | HRs contact you directly | Track your Applications
            </p>

            {/* QR + App badges container */}
            <div 
              className="bg-white rounded-[20px] flex flex-col md:flex-row items-start md:items-center gap-3 w-full lg:w-auto"
              style={{
                padding: '20px 40px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
              }}
            >
              {/* Left side: Text and badges */}
              <div className="flex flex-col flex-1">
                {/* QR Text */}
                <p 
                  className="text-[18px] font-semibold mb-3"
                  style={{ color: '#1D0E32' }}
                >
                  Scan QR to download Apna app
                </p>

                {/* App Store Badges */}
                <div className="flex flex-row gap-4">
                  {/* App Store Badge */}
                  <a
                    href="https://apps.apple.com/app/apna/id1451868308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download on the App Store"
                      width={140}
                      height={40}
                      className="w-[140px] h-auto"
                    />
                  </a>

                  {/* Google Play Badge */}
                  <a
                    href="https://play.google.com/store/apps/details?id=co.apna.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="GET IT ON Google Play"
                      width={140}
                      height={40}
                      className="w-[140px] h-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Right side: QR Code */}
              <div className="flex-shrink-0">
                <Image
                  src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fapp-qr.png&w=256&q=75"
                  alt="QR Code to download Apna app"
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Phone Image */}
          <div 
            className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto"
            style={{
              alignSelf: 'flex-end',
              marginBottom: '-64px',
              paddingBottom: 0
            }}
          >
            <Image
              src="https://cdn.apna.co/mumbai_apnatime_prod/apna-home/apna-app.png"
              alt="Apna app on mobile phone"
              width={300}
              height={375}
              className="h-[240px] md:h-[285px] lg:h-[315px] w-auto"
              style={{
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Right Section: Stats (Ratings + Downloads) */}
          <div className="flex flex-col gap-6 flex-shrink-0 hidden lg:flex">
            {/* Rating Row */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="#FFB800" 
                  stroke="#FFB800"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span 
                  className="text-[20px] font-bold"
                  style={{ color: '#5C1DCE' }}
                >
                  4.7
                </span>
              </div>
              <span 
                className="text-[14px] font-semibold"
                style={{ color: '#5C1DCE' }}
              >
                7L reviews
              </span>
            </div>

            {/* Downloads Row */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#5C1DCE" 
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span 
                  className="text-[20px] font-bold"
                  style={{ color: '#5C1DCE' }}
                >
                  5 cr+
                </span>
              </div>
              <span 
                className="text-[14px] font-semibold"
                style={{ color: '#5C1DCE' }}
              >
                App downloads
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
