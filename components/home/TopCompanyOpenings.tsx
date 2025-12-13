import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const companies = [
  {
    name: "Bajaj Allianz Life Insurance",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fbajaj.png&w=3840&q=75",
    description: "Provider of life insurance and financial services.",
    link: "/jobs/company/bajaj-allianz-life-insurance"
  },
  {
    name: "Paytm Service Pvt. Ltd.",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fpaytm.png&w=3840&q=75",
    description: "Digital payment and e-commerce facilitator.",
    link: "/jobs/company/paytm-service-pvt-ltd"
  },
  {
    name: "Zomato",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fzomato.png&w=3840&q=75",
    description: "Online food delivery marketplace.",
    link: "/jobs/company/zomato"
  },
  {
    name: "Swiggy",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fswiggy.png&w=3840&q=75",
    description: "Food delivery and online ordering platform.",
    link: "/jobs/company/swiggy"
  },
  {
    name: "Kotak Mahindra Bank",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fkotak.png&w=3840&q=75",
    description: "Leading banking and financial services company.",
    link: "/jobs/company/kotak-mahindra-bank"
  },
  {
    name: "HDFC Bank",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fhdfc.png&w=3840&q=75",
    description: "Top private sector bank in India.",
    link: "/jobs/company/hdfc-bank"
  },
  {
    name: "Tata Consultancy Services",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Ftcs.png&w=3840&q=75",
    description: "Global IT services and consulting company.",
    link: "/jobs/company/tata-consultancy-services"
  },
  {
    name: "Infosys",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Finfosys.png&w=3840&q=75",
    description: "Leader in consulting, technology, and outsourcing solutions.",
    link: "/jobs/company/infosys"
  },
  {
    name: "Amazon",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Famazon.png&w=3840&q=75",
    description: "E-commerce and technology giant.",
    link: "/jobs/company/amazon"
  },
  {
    name: "Flipkart",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fflipkart.png&w=3840&q=75",
    description: "One of India's largest e-commerce platforms.",
    link: "/jobs/company/flipkart"
  },
  {
    name: "Reliance Jio",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fjio.png&w=3840&q=75",
    description: "India's largest telecom operator.",
    link: "/jobs/company/jio"
  },
  {
    name: "Teleperformance",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fteleperformance.png&w=3840&q=75",
    description: "Customer experience management company.",
    link: "/jobs/company/teleperformance"
  },
  {
    name: "ICICI Bank",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Ficici.png&w=3840&q=75",
    description: "Major private sector bank in India.",
    link: "/jobs/company/icici-bank"
  },
  {
    name: "Concentrix",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fconcentrix.png&w=3840&q=75",
    description: "Global customer engagement and business performance company.",
    link: "/jobs/company/concentrix"
  },
  {
    name: "Yes Bank",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fyes-bank.png&w=3840&q=75",
    description: "Indian private sector bank offering financial services.",
    link: "/jobs/company/yes-bank"
  },
  {
    name: "Vodafone Idea",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fvi.png&w=3840&q=75",
    description: "Telecom service provider across India.",
    link: "/jobs/company/vodafone-idea"
  },
  {
    name: "BYJU'S",
    logo: "https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fbyjus.png&w=3840&q=75",
    description: "India's leading Ed-Tech platform.",
    link: "/jobs/company/byjus"
  }
]

export default function TopCompanyOpenings() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <h2 
          className="text-center text-[32px] font-bold mb-10"
          style={{ color: '#1A1A1A' }}
        >
          Job Openings in Top companies
        </h2>

        {/* Horizontal Scrollable Card Slider */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="snap-start min-w-[320px] bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
              >
                {/* Logo */}
                <div className="mb-3 flex items-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={200}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </div>

                {/* Company Name */}
                <h3 className="font-semibold text-[18px] mb-2" style={{ color: '#1A1A1A' }}>
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-[15px] mb-4" style={{ color: '#4B5563' }}>
                  {company.description}
                </p>

                {/* View Jobs Button */}
                <Link
                  href={company.link}
                  className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-[#1F8268] text-[#1F8268] font-medium hover:bg-[#1F8268] hover:text-white transition-all duration-200 w-fit"
                >
                  View jobs
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-[#1F8268] text-[#1F8268] font-medium hover:bg-[#1F8268] hover:text-white transition-all duration-200"
            style={{ width: '180px' }}
          >
            View all
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

