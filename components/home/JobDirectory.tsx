'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface ExpandableListSectionProps {
  title: string
  items: string[]
  baseUrl?: string
}

const ExpandableListSection: React.FC<ExpandableListSectionProps> = ({ title, items, baseUrl = '/jobs' }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const itemsPerRow = 3 // 3 columns on desktop
  const visibleRows = 4
  const visibleItems = visibleRows * itemsPerRow
  const hasMoreItems = items.length > visibleItems

  const visibleItemsList = isExpanded ? items : items.slice(0, visibleItems)

  return (
    <div className="border-b border-[#E5E7EB] pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
      <h3 className="text-[14px] font-semibold text-[#0D0D0D] mb-4">
        {title}
      </h3>
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-16 mb-4 transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-none' : ''
        }`}
      >
        {visibleItemsList.map((item, index) => (
          <Link
            key={index}
            href={`${baseUrl}?q=${encodeURIComponent(item)}`}
            className="text-[12px] text-[#4B5563] hover:underline transition-all duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
      {hasMoreItems && (
        <div className="text-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[12px] text-[#4B5563] hover:underline transition-all duration-300"
          >
            {isExpanded ? 'View Less ▴' : 'View More ▾'}
          </button>
        </div>
      )}
    </div>
  )
}

// Footer Links Section (non-expandable) - displayed in 3 columns side by side
const FooterLinksSection: React.FC<{ title: string; items: string[]; baseUrl?: string }> = ({ 
  title, 
  items, 
  baseUrl = '/' 
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-[14px] font-semibold text-[#0D0D0D] mb-4">
        {title}
      </h3>
      <div className="flex flex-col gap-y-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`${baseUrl}${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-[12px] text-[#4B5563] hover:underline transition-all duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function JobDirectory() {
  const findJobsItems = [
    "Jobs in Agra", "Jobs in Ajmer", "Jobs in Asansol", "Jobs in Belagavi", "Jobs in Bhilai",
    "Jobs in Bikaner", "Jobs in Coimbatore", "Jobs in Delhi-NCR", "Jobs in Gorakhpur",
    "Jobs in Gwalior", "Jobs in Indore", "Jobs in Jalandhar", "Jobs in Jodhpur", "Jobs in Kochi",
    "Jobs in Kota", "Jobs in Madurai", "Jobs in Meerut", "Jobs in Nagpur", "Jobs in Patna",
    "Jobs in Pune", "Jobs in Ranchi", "Jobs in Solapur", "Jobs in Tiruchirappalli",
    "Jobs in Vadodara", "Jobs in Visakhapatnam",
    "Jobs in Ahmedabad", "Jobs in Aligarh", "Jobs in Aurangabad", "Jobs in Bengaluru/Bangalore",
    "Jobs in Bhopal", "Jobs in Chandigarh", "Jobs in Cuttack", "Jobs in Dhanbad", "Jobs in Guntur",
    "Jobs in Hubli-Dharwad", "Jobs in Jabalpur", "Jobs in Jamnagar", "Jobs in Kannur",
    "Jobs in Kolhapur", "Jobs in Lucknow", "Jobs in Malappuram", "Jobs in Mumbai/Bombay",
    "Jobs in Nashik", "Jobs in Prayagraj/Allahabad", "Jobs in Raipur", "Jobs in Saharanpur",
    "Jobs in Surat", "Jobs in Udaipur", "Jobs in Varanasi", "Jobs in Warangal",
    "Jobs in Ahmednagar", "Jobs in Amritsar", "Jobs in Bareilly", "Jobs in Bhavnagar",
    "Jobs in Bhubaneswar", "Jobs in Chennai", "Jobs in Dehradun", "Jobs in Goa", "Jobs in Guwahati",
    "Jobs in Hyderabad", "Jobs in Jaipur", "Jobs in Jamshedpur", "Jobs in Kanpur",
    "Jobs in Kolkata/Calcutta", "Jobs in Ludhiana", "Jobs in Mangalore", "Jobs in Mysore/Mysuru",
    "Jobs in Panipat", "Jobs in Puducherry", "Jobs in Rajkot", "Jobs in Salem",
    "Jobs in Thiruvananthapuram", "Jobs in Ujjain", "Jobs in Vijayawada"
  ]

  const startHiringItems = [
    "Hire in Agra", "Hire in Ajmer", "Hire in Asansol", "Hire in Belagavi", "Hire in Bhilai",
    "Hire in Bikaner", "Hire in Coimbatore", "Hire in Delhi-NCR", "Hire in Gorakhpur",
    "Hire in Gwalior", "Hire in Indore", "Hire in Jalandhar", "Hire in Jodhpur", "Hire in Kochi",
    "Hire in Kota", "Hire in Madurai", "Hire in Meerut", "Hire in Nagpur", "Hire in Patna",
    "Hire in Pune", "Hire in Ranchi", "Hire in Solapur", "Hire in Tiruchirappalli",
    "Hire in Vadodara", "Hire in Visakhapatnam",
    "Hire in Ahmedabad", "Hire in Aligarh", "Hire in Aurangabad", "Hire in Bengaluru/Bangalore",
    "Hire in Bhopal", "Hire in Chandigarh", "Hire in Cuttack", "Hire in Dhanbad", "Hire in Guntur",
    "Hire in Hubli-Dharwad", "Hire in Jabalpur", "Hire in Jamnagar", "Hire in Kannur",
    "Hire in Kolhapur", "Hire in Lucknow", "Hire in Malappuram", "Hire in Mumbai/Bombay",
    "Hire in Nashik", "Hire in Prayagraj/Allahabad", "Hire in Raipur", "Hire in Saharanpur",
    "Hire in Surat", "Hire in Udaipur", "Hire in Varanasi", "Hire in Warangal",
    "Hire in Ahmednagar", "Hire in Amritsar", "Hire in Bareilly", "Hire in Bhavnagar",
    "Hire in Bhubaneswar", "Hire in Chennai", "Hire in Dehradun", "Hire in Goa", "Hire in Guwahati",
    "Hire in Hyderabad", "Hire in Jaipur", "Hire in Jamshedpur", "Hire in Kanpur",
    "Hire in Kolkata/Calcutta", "Hire in Ludhiana", "Hire in Mangalore", "Hire in Mysore/Mysuru",
    "Hire in Panipat", "Hire in Puducherry", "Hire in Rajkot", "Hire in Salem",
    "Hire in Thiruvananthapuram", "Hire in Ujjain", "Hire in Vijayawada"
  ]

  const popularJobsItems = [
    "Delivery Person Jobs", "Human Resource", "Telecaller / BPO", "Full Time Jobs",
    "Jobs for Women", "Accounts / Finance Jobs", "Backoffice Jobs", "Work from Home Jobs",
    "Night Shift Jobs", "Jobs for 10th pass", "Sales (Field Work)", "Business Development",
    "Part Time Jobs", "Freshers Jobs", "Jobs for 12th pass"
  ]

  const jobsByDepartmentItems = [
    "Admin / Back Office / Computer Operator Jobs", "Banking / Insurance / Financial Services Jobs",
    "Consulting Jobs", "Customer Support Jobs", "Domestic Worker Jobs",
    "Environment Health & Safety Jobs", "Healthcare / Doctor / Hospital Staff Jobs",
    "Legal & Regulatory Jobs", "Media Production & Entertainment Jobs",
    "Product Management Jobs", "Quality Assurance Jobs", "Retail & eCommerce Jobs",
    "Security Services Jobs", "Strategic & Top Management Jobs",
    "UX, Design & Architecture Jobs", "Advertising / Communication Jobs",
    "Beauty, Fitness & Personal Care Jobs", "Content, Editorial & Journalism Jobs",
    "Data Science & Analytics Jobs", "Energy & Mining Jobs", "Facility Management Jobs",
    "Human Resources Jobs", "Maintenance Services Jobs", "Operations Jobs",
    "Project & Program Management Jobs", "Research & Development Jobs",
    "Risk Management & Compliance Jobs", "Shipping & Maritime Jobs",
    "Tailoring, Apparel & Home Furnishing Jobs", "Aviation & Aerospace Jobs",
    "Construction & Site Engineering Jobs", "CSR & Social Service Jobs",
    "Delivery / Driver / Logistics Jobs", "Engineering – Hardware & Networks Jobs",
    "Finance & Accounting Jobs", "IT & Information Security Jobs",
    "Marketing / Brand / Digital Marketing Jobs", "Production / Manufacturing / Engineering Jobs",
    "Purchase & Supply Chain Jobs", "Restaurant / Hospitality / Tourism Jobs",
    "Sales & BD Jobs", "Software Engineering Jobs", "Teaching & Training Jobs"
  ]

  const footerLinksItems = {
    Links: [
      "Download Apna App",
      "Free Job Alerts",
      "Careers",
      "Contact Us",
      "Vulnerability Disclosure Policy"
    ],
    Legal: [
      "Privacy Policy",
      "User Terms & Conditions"
    ],
    Resources: [
      "Blog",
      "Sitemap"
    ]
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ExpandableListSection title="Find Jobs" items={findJobsItems} baseUrl="/jobs" />
        <ExpandableListSection title="Start Hiring" items={startHiringItems} baseUrl="/employer" />
        <ExpandableListSection title="Popular Jobs" items={popularJobsItems} baseUrl="/jobs" />
        <ExpandableListSection title="Jobs by Department" items={jobsByDepartmentItems} baseUrl="/jobs" />
        
        {/* Footer Links Section - 3 columns side by side */}
        <div className="border-t border-[#E5E7EB] pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <FooterLinksSection title="Links" items={footerLinksItems.Links} />
            <FooterLinksSection title="Legal" items={footerLinksItems.Legal} />
            <FooterLinksSection title="Resources" items={footerLinksItems.Resources} />
          </div>
        </div>
      </div>
    </section>
  )
}

