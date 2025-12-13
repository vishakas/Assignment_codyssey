import React from 'react'
import Link from 'next/link'
import ApnaLogo from '@/components/common/ApnaLogo'

// Social Media Icons as SVG components
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.138 17.03h1.805L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function EmployerFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#241B2F] py-12 md:py-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* LEFT COLUMN - Logo + Social Icons */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-6">
              <ApnaLogo width={120} height={40} className="text-white" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="#"
                className="text-white hover:opacity-80 cursor-pointer transition-opacity"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 cursor-pointer transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 cursor-pointer transition-opacity"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 cursor-pointer transition-opacity"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 cursor-pointer transition-opacity"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 - PRODUCT */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] font-bold mb-4">
              PRODUCT
            </h3>
            <div className="flex flex-col gap-3">
              <Link 
                href="/employer/job-posting" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Job posting
              </Link>
              <Link 
                href="/employer/contests" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Contests
              </Link>
              <Link 
                href="/employer/database" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Database
              </Link>
              <Link 
                href="/employer/enterprise" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Enterprise
              </Link>
              <Link 
                href="/employer/pricing" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* COLUMN 3 - GET TO KNOW US */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] font-bold mb-4">
              GET TO KNOW US
            </h3>
            <div className="flex flex-col gap-3">
              <Link 
                href="/employer/careers" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link 
                href="/employer/contact-support" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Contact support
              </Link>
              <Link 
                href="/employer/contact-sales" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Contact sales
              </Link>
              <Link 
                href="/" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Job seekers
              </Link>
            </div>
          </div>

          {/* COLUMN 4 - RESOURCES */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] font-bold mb-4">
              RESOURCES
            </h3>
            <div className="flex flex-col gap-3">
              <Link 
                href="/employer/help-center" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Apna help center
              </Link>
              <Link 
                href="/employer/blogs" 
                className="text-[14px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="border-t border-[rgba(255,255,255,0.16)] mt-12 mb-6"
        ></div>

        {/* Bottom Row - Copyright + Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Copyright */}
          <div className="text-[14px] text-[rgba(255,255,255,0.7)]">
            © {currentYear} Apna | All rights reserved.
          </div>

          {/* Right - Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link 
              href="/employer/privacy-policy" 
              className="text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
            >
              Privacy policy
            </Link>
            <Link 
              href="/employer/terms-conditions" 
              className="text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/employer/terms-of-service" 
              className="text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
            >
              Terms of service
            </Link>
            <Link 
              href="/employer/disclosure-policy" 
              className="text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
            >
              Disclosure Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

