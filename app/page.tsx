import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import JobPrepBanner from '@/components/home/JobPrepBanner'
import JobPrepSection from '@/components/home/JobPrepSection'
import TrendingJobRoles from '@/components/home/TrendingJobRoles'
import PopularSearches from '@/components/home/PopularSearches'
import TopCompanyOpenings from '@/components/home/TopCompanyOpenings'
import TopCompanies from '@/components/home/TopCompanies'
import CommunitySection from '@/components/home/CommunitySection'
import AppDownloadWidget from '@/components/home/AppDownloadWidget'
import DownloadApnaApp from '@/components/home/DownloadApnaApp'
import HireCTASection from '@/components/home/HireCTASection'
import JobDirectory from '@/components/home/JobDirectory'

export default function HomePage() {
  return (
    <>
      <JobPrepBanner />
      <HeroSection />
      <JobPrepSection />
      <PopularSearches />
      <TopCompanyOpenings />
      <TrendingJobRoles />
      <TopCompanies />
      <CommunitySection />
      <AppDownloadWidget />
      <DownloadApnaApp />
      <HireCTASection />
      <JobDirectory />
    </>
  )
}
