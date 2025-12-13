import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import JobSearchBar from '@/components/home/JobSearchBar'
import JobPrepBanner from '@/components/home/JobPrepBanner'
import TrendingJobRoles from '@/components/home/TrendingJobRoles'
import PopularSearches from '@/components/home/PopularSearches'
import TopCompanies from '@/components/home/TopCompanies'
import JobCategories from '@/components/home/JobCategories'
import CommunitySection from '@/components/home/CommunitySection'
import SupportSection from '@/components/home/SupportSection'
import AppDownloadWidget from '@/components/home/AppDownloadWidget'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JobSearchBar />
      <JobPrepBanner />
      <TrendingJobRoles />
      <PopularSearches />
      <TopCompanies />
      <JobCategories />
      <CommunitySection />
      <SupportSection />
      <AppDownloadWidget />
    </>
  )
}


