'use client'

import React, { useState } from 'react'

export default function JobSearchBar() {
  const [jobQuery, setJobQuery] = useState('')
  const [experience, setExperience] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className="container-custom -mt-8 lg:-mt-12 relative z-10">
      <div className="bg-white rounded-[12px] shadow-[0px_2px_6px_rgba(0,0,0,0.06)] border border-gray-200 p-5 md:p-6 relative">
        <div className="grid md:grid-cols-4 gap-4 md:pr-40">
          {/* Search Field */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search jobs by skill, company..."
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-[14px] font-medium"
              />
            </div>
          </div>
          
          {/* Experience Dropdown */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full pl-10 pr-8 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none bg-white text-[14px] font-medium"
            >
              <option value="">Your Experience</option>
              <option value="fresher">Fresher</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Location Field */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for area or city..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-[14px] font-medium"
            />
          </div>
        </div>
        
        {/* Search Button */}
        <div className="mt-4 md:mt-0 md:absolute md:right-6 md:top-1/2 md:transform md:-translate-y-1/2">
          <button 
            className="bg-[#137A6A] text-white hover:bg-[#116B5C] font-semibold text-sm px-6 py-3 rounded-[4px] transition-colors w-full md:w-auto"
          >
            Search jobs
          </button>
        </div>
      </div>
    </div>
  )
}
