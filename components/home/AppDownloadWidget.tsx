'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ApnaLogo from '@/components/common/ApnaLogo'

export default function AppDownloadWidget() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-[16px] right-[5%] md:bottom-[24px] md:right-[24px] z-[50] bg-[#F2ECFF] border border-[#E4DDF7] rounded-[20px] shadow-[0_4px_18px_rgba(0,0,0,0.08)] py-[16px] px-[24px] flex flex-col md:flex-row items-center text-center md:text-left gap-[12px] md:gap-[20px] w-[90%] md:w-auto md:min-w-[420px] md:max-w-[480px]">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-[10px] right-[10px] w-[28px] h-[28px] rounded-full flex items-center justify-center text-[#5C556B] text-[20px] cursor-pointer hover:bg-[#E8E2F6] transition-colors"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* QR Code Block */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <Image
          src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/app-qr.png"
          alt="QR Code"
          width={80}
          height={80}
          className="w-[80px] h-[80px] rounded-[8px]"
        />
        <p className="text-[14px] text-[#544C63] font-medium text-center mt-[4px]">Scan the QR</p>
      </div>

      {/* Divider + Or Text */}
      <div className="flex flex-row md:flex-col items-center justify-center gap-[4px] px-[12px]">
        <div className="w-[36px] h-[1px] md:w-[1px] md:h-[36px] bg-[#D5CFF0]"></div>
        <div className="text-[14px] font-semibold text-[#5C556B]">Or</div>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col gap-[12px]">
        {/* App Store Badges */}
        <div className="flex flex-col md:flex-row gap-[8px] items-center justify-center md:justify-start">
          <a
            href="https://apps.apple.com/app/apna/id1481992074"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-auto rounded-[8px] overflow-hidden"
          >
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-[40px] w-auto rounded-[8px]"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=co.apna.app"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-auto rounded-[8px] overflow-hidden"
          >
            <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="GET IT ON Google Play"
              width={135}
              height={40}
              className="h-[40px] w-auto rounded-[8px]"
            />
          </a>
        </div>

        {/* Rating + Reviews Block */}
        <div className="flex flex-col md:flex-row items-center gap-[6px] md:gap-[20px] justify-center md:justify-start">
          {/* App Logo */}
          <div className="flex-shrink-0">
            <ApnaLogo width={32} height={32} />
          </div>

          {/* Rating + Reviews */}
          <div className="flex items-center gap-[6px]">
            <span className="text-[18px] font-semibold text-[#1D152B]">4.7</span>
            <span className="text-[18px] font-semibold text-[#1D152B]">★</span>
            <span className="text-[14px] text-[#6A637A]">7L reviews</span>
          </div>

          {/* Downloads */}
          <div className="text-[16px] font-semibold text-[#1D152B]">5cr+ Downloads</div>
        </div>
      </div>
    </div>
  )
}
