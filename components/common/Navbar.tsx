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
      <div className="container-custom px-4 sm:px-6 lg:px-10">
        <div className={`flex items-center ${isEmployer ? 'h-[72px]' : 'h-18'} gap-8`}>
          <Link
            href={isEmployer ? "/employer" : "/"}
            className="flex items-center justify-center shrink-0"
          >
            <ApnaLogo width={32} height={32} />
          </Link>

          {/* Desktop Menu - Default Variant */}
          {!isEmployer && (
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
          )}

          {/* Desktop Menu - Employer Variant */}
          {isEmployer && (
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-6">
              <Link
                href="/employer"
                className="flex items-center gap-1 text-[#111827] hover:text-[#030712] font-medium text-sm transition-colors"
              >
                Product
                <svg className="w-4 h-4 text-[#111827]/70 transition-transform hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/employer/enterprise"
                className="text-[#111827] hover:text-[#030712] font-medium text-sm transition-colors"
              >
                Enterprise
              </Link>
              <Link
                href="/employer/blogs"
                className="text-[#111827] hover:text-[#030712] font-medium text-sm transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/employer/pricing"
                className="text-[#111827] hover:text-[#030712] font-medium text-sm transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="flex items-center gap-1 text-[#111827] hover:text-[#030712] font-medium text-sm transition-colors"
              >
                Looking for a job
                <svg className="h-3 w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          )}

          {/* Desktop Buttons - Default Variant */}
          {!isEmployer && (
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
          )}

          {/* Desktop Buttons - Employer Variant */}
          {isEmployer && (
            <div className="hidden md:flex items-center space-x-3 ml-auto">
              <Link
                href="#contact"
                className="bg-white border border-[#D0D5DD] text-[#1F2937] hover:bg-gray-50 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="/employer"
                className="bg-[#157F6F] text-white hover:bg-[#116B5C] font-medium text-sm px-6 py-2.5 h-10 rounded-lg transition-colors flex items-center"
              >
                Login/Sign up
              </Link>
            </div>
          )}

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
            {/* Mobile Menu - Default Variant */}
            {!isEmployer && (
              <>
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
              </>
            )}

            {/* Mobile Menu - Employer Variant */}
            {isEmployer && (
              <>
                <Link href="/employer" className="block text-[#111827] hover:text-[#030712] text-sm font-medium">
                  Product
                </Link>
                <Link href="/employer/enterprise" className="block text-[#111827] hover:text-[#030712] text-sm font-medium">
                  Enterprise
                </Link>
                <Link href="/employer/blogs" className="block text-[#111827] hover:text-[#030712] text-sm font-medium">
                  Blogs
                </Link>
                <Link href="/employer/pricing" className="block text-[#111827] hover:text-[#030712] text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/" className="flex items-center gap-1 text-[#111827] hover:text-[#030712] text-sm font-medium">
                  Looking for a job
                  <svg className="h-3 w-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <div className="pt-4 space-y-2 border-t border-gray-200">
                  <Link
                    href="#contact"
                    className="block text-center bg-white border border-[#D0D5DD] text-[#1F2937] hover:bg-gray-50 font-medium text-sm py-2.5 rounded-lg"
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/employer"
                    className="block text-center bg-[#157F6F] text-white hover:bg-[#116B5C] font-medium text-sm py-2.5 rounded-lg"
                  >
                    Login/Sign up
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

