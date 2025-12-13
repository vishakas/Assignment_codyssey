import AnnouncementBanner from '@/components/employer/AnnouncementBanner'
import EmployerHero from '@/components/employer/EmployerHero'
import WhyChooseUs from '@/components/employer/WhyChooseUs'
import FeatureCards from '@/components/employer/FeatureCards'
import AICallingSection from '@/components/employer/AICallingSection'
import SmartJobPosting from '@/components/employer/SmartJobPosting'
import TestimonialGrid from '@/components/employer/TestimonialGrid'
import FAQSection from '@/components/employer/FAQSection'
import CTASection from '@/components/common/CTASection'
import FloatingCTA from '@/components/employer/FloatingCTA'

export default function EmployerPage() {
  return (
    <>
      <AnnouncementBanner />
      <EmployerHero />

      <WhyChooseUs />
      <FeatureCards />
      <AICallingSection />
      <SmartJobPosting />
      <TestimonialGrid />
      <FAQSection />

      <CTASection
        variant="primary"
        title="Ready to Find Your Next Great Hire?"
        description="Start posting jobs today and connect with top talent in minutes."
        primaryButton={{
          text: 'Post Your First Job',
          href: '/employer/post-job',
        }}
        secondaryButton={{
          text: 'Schedule a Demo',
          href: '#contact',
        }}
      />
      <FloatingCTA />
    </>
  )
}

