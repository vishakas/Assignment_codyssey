'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ApnaLogo from './ApnaLogo'

interface NavbarProps {
  variant?: 'default' | 'employer'
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isEmployer = variant === 'employer'

  return (
    <nav className={`${isEmployer ? 'bg-white' : 'bg-[#F4F2F8]'} sticky top-0 z-50 border-b border-gray-200`}>
      <div className="container-custom px-3 sm:px-4 md:px-6 lg:px-10">
        <div className={`flex items-center ${isEmployer ? 'h-16 sm:h-[72px]' : 'h-14 sm:h-16 md:h-18'} gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8`}>
          {/* Hamburger Menu - Mobile Only, Left Side */}
          <button
            className="md:hidden p-1.5 sm:p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

          {/* Logo */}
          <Link
            href={isEmployer ? "/employer" : "/"}
            className="flex items-center justify-center shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <ApnaLogo width={32} height={32} />
            </div>
          </Link>

          {/* Desktop Menu - Default Variant */}
          {!isEmployer && (
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-10 font-semibold text-xs sm:text-sm md:text-[14px] text-[#1D152B] ml-2 sm:ml-4 md:ml-6">
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-[#137A6A] whitespace-nowrap"
              >
                Jobs
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1D152B]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/job-prep"
                className="flex items-center transition-colors hover:text-[#137A6A] whitespace-nowrap"
              >
                Job Prep
                <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[8px] sm:text-[10px] font-bold uppercase px-[4px] sm:px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[4px] sm:ml-[6px]">
                  NEW
                </span>
              </Link>
              <Link
                href="/contests"
                className="flex items-center transition-colors hover:text-[#137A6A] whitespace-nowrap"
              >
                Contests
                <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[8px] sm:text-[10px] font-bold uppercase px-[4px] sm:px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[4px] sm:ml-[6px]">
                  NEW
                </span>
              </Link>
              <Link
                href="/degree"
                className="flex items-center transition-colors hover:text-[#137A6A] whitespace-nowrap"
              >
                Degree
                <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[8px] sm:text-[10px] font-bold uppercase px-[4px] sm:px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[4px] sm:ml-[6px]">
                  NEW
                </span>
              </Link>
              <Link
                href="/resume-tools"
                className="flex items-center gap-1 transition-colors hover:text-[#137A6A] whitespace-nowrap"
              >
                Resume Tools
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1D152B]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          )}

          {/* Desktop Menu - Employer Variant */}
          {isEmployer && (
            <div className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 ml-2 sm:ml-4 md:ml-6">
              <Link
                href="/employer"
                className="flex items-center gap-1 text-[#111827] hover:text-[#030712] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Product
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#111827]/70 transition-transform hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/employer/enterprise"
                className="text-[#111827] hover:text-[#030712] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Enterprise
              </Link>
              <Link
                href="/employer/blogs"
                className="text-[#111827] hover:text-[#030712] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Blogs
              </Link>
              <Link
                href="/employer/pricing"
                className="text-[#111827] hover:text-[#030712] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="flex items-center gap-1 text-[#111827] hover:text-[#030712] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Looking for a job
                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          )}

          {/* Buttons - Default Variant (Visible on all screens) */}
          {!isEmployer && (
            <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 lg:space-x-4 ml-auto">
              <Link
                href="/employer"
                className="text-[#137A6A] hover:text-[#0F614F] font-semibold text-[10px] sm:text-xs md:text-sm px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 transition-colors whitespace-nowrap"
              >
                Employer Login
              </Link>
              <Link
                href="/login"
                className="bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 rounded-[4px] transition-colors shadow-sm whitespace-nowrap"
              >
                Candidate Login
              </Link>
            </div>
          )}

          {/* Buttons - Employer Variant (Visible on all screens) */}
          {isEmployer && (
            <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 ml-auto">
              <Link
                href="#contact"
                className="bg-white border border-[#D0D5DD] text-[#1F2937] hover:bg-gray-50 font-medium text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg transition-colors whitespace-nowrap"
              >
                Contact us
              </Link>
              <Link
                href="/employer"
                className="bg-[#157F6F] text-white hover:bg-[#116B5C] font-medium text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 h-7 sm:h-8 md:h-9 lg:h-10 rounded-lg transition-colors flex items-center whitespace-nowrap"
              >
                Login/Sign up
              </Link>
            </div>
          )}
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 space-y-3 sm:space-y-4 border-t border-gray-200">
            {/* Mobile Menu - Default Variant */}
            {!isEmployer && (
              <>
                <Link 
                  href="/" 
                  className="block text-[#1D152B] hover:text-[#137A6A] text-sm sm:text-[14px] font-semibold py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jobs
                </Link>
                <Link
                  href="/job-prep"
                  className="block text-[#1D152B] hover:text-[#137A6A] flex items-center text-sm sm:text-[14px] font-semibold py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Job Prep
                  <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[8px] sm:text-[10px] font-bold uppercase px-[4px] sm:px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                    NEW
                  </span>
                </Link>
                <Link
                  href="/contests"
                  className="block text-[#1D152B] hover:text-[#137A6A] flex items-center text-sm sm:text-[14px] font-semibold py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contests
                  <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[8px] sm:text-[10px] font-bold uppercase px-[4px] sm:px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                    NEW
                  </span>
                </Link>
                <Link
                  href="/degree"
                  className="block text-[#1D152B] hover:text-[#137A6A] flex items-center text-sm sm:text-[14px] font-semibold py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Degree
                  <span className="inline-flex items-center bg-gradient-to-r from-[#FF8800] to-[#FF4E00] text-white text-[8px] sm:text-[10px] font-bold uppercase px-[4px] sm:px-[6px] py-[2px] rounded-[6px] tracking-tight ml-[6px]">
                    NEW
                  </span>
                </Link>
                <Link 
                  href="/resume-tools" 
                  className="block text-[#1D152B] hover:text-[#137A6A] text-sm sm:text-[14px] font-semibold py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume Tools
                </Link>
              </>
            )}

            {/* Mobile Menu - Employer Variant */}
            {isEmployer && (
              <>
                <Link 
                  href="/employer" 
                  className="block text-[#111827] hover:text-[#030712] text-sm font-medium py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product
                </Link>
                <Link 
                  href="/employer/enterprise" 
                  className="block text-[#111827] hover:text-[#030712] text-sm font-medium py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enterprise
                </Link>
                <Link 
                  href="/employer/blogs" 
                  className="block text-[#111827] hover:text-[#030712] text-sm font-medium py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link 
                  href="/employer/pricing" 
                  className="block text-[#111827] hover:text-[#030712] text-sm font-medium py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/" 
                  className="flex items-center gap-1 text-[#111827] hover:text-[#030712] text-sm font-medium py-1.5 sm:py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Looking for a job
                  <svg className="h-3 w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

