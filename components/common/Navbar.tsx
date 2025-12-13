'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ApnaLogo from './ApnaLogo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#F4F2F8] sticky top-0 z-50 border-b border-gray-200">
      <div className="container-custom px-4 sm:px-6 lg:px-10">
        <div className="flex items-center h-18 gap-8">
          <Link
            href="/"
            className="flex items-center justify-center shrink-0"
          >
            <ApnaLogo width={32} height={32} />
          </Link>

          <div className="hidden md:flex items-center space-x-10 font-semibold text-[14px] text-[#1D152B] ml-6">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-[#137A6A]"
            >
              Jobs
              <svg className="w-3.5 h-3.5 text-[#1D152B]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="/job-prep"
              className="flex items-center transition-colors hover:text-[#137A6A]"
            >
              Job Prep
              <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[10px] font-bold uppercase px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                NEW
              </span>
            </Link>
            <Link
              href="/contests"
              className="flex items-center transition-colors hover:text-[#137A6A]"
            >
              Contests
              <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[10px] font-bold uppercase px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                NEW
              </span>
            </Link>
            <Link
              href="/degree"
              className="flex items-center transition-colors hover:text-[#137A6A]"
            >
              Degree
              <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[10px] font-bold uppercase px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                NEW
              </span>
            </Link>
            <Link
              href="/resume-tools"
              className="flex items-center gap-1 transition-colors hover:text-[#137A6A]"
            >
              Resume Tools
              <svg className="w-3.5 h-3.5 text-[#1D152B]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link
              href="/employer"
              className="text-[#137A6A] hover:text-[#0F614F] font-semibold text-sm px-3 py-2 transition-colors"
            >
              Employer Login
            </Link>
            <Link
              href="/login"
              className="bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm px-5 py-2 rounded-full transition-colors shadow-sm !rounded-[4px] !px-6 !text-sm !font-semibold"
            >
              Candidate Login
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-[#1D152B] hover:text-[#137A6A] text-[14px] font-semibold">
              Jobs
            </Link>
            <Link
              href="/job-prep"
              className="block text-[#1D152B] hover:text-[#137A6A] flex items-center text-[14px] font-semibold"
            >
              Job Prep
              <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[10px] font-bold uppercase px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                NEW
              </span>
            </Link>
            <Link
              href="/contests"
              className="block text-[#1D152B] hover:text-[#137A6A] flex items-center text-[14px] font-semibold"
            >
              Contests
              <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[10px] font-bold uppercase px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                NEW
              </span>
            </Link>
            <Link
              href="/degree"
              className="block text-[#1D152B] hover:text-[#137A6A] flex items-center text-[14px] font-semibold"
            >
              Degree
              <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[10px] font-bold uppercase px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                NEW
              </span>
            </Link>
            <Link href="/resume-tools" className="block text-[#1D152B] hover:text-[#137A6A] text-[14px] font-semibold">
              Resume Tools
            </Link>
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <Link
                href="/employer"
                className="block text-center text-[#137A6A] hover:text-[#0F614F] font-semibold text-sm py-2"
              >
                Employer Login
              </Link>
              <Link
                href="/login"
                className="block text-center bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm py-2 px-5 rounded-full !rounded-[4px] !px-6 !text-sm !font-semibold"
              >
                Candidate Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

