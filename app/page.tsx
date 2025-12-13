import Hero from '@/components/common/Hero'
import FeatureCard from '@/components/common/FeatureCard'
import CTASection from '@/components/common/CTASection'
import Card from '@/components/ui/Card'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Find Your Dream Job Today"
        subtitle="Connect with top employers and discover opportunities that match your skills. Join millions of job seekers building their careers on Apna."
        primaryCTA={{
          text: 'Browse Jobs',
          href: '#jobs',
        }}
        secondaryCTA={{
          text: 'Create Profile',
          href: '#signup',
        }}
        image="/hero-image.png"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Apna?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make job searching simple, fast, and effective for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔍"
              title="Easy Job Search"
              description="Search through thousands of verified job listings across multiple industries and locations."
            />
            <FeatureCard
              icon="📱"
              title="Mobile First"
              description="Access job opportunities on the go with our mobile-optimized platform designed for convenience."
            />
            <FeatureCard
              icon="✅"
              title="Verified Employers"
              description="Connect with trusted employers and verified companies looking for talented professionals."
            />
            <FeatureCard
              icon="⚡"
              title="Quick Applications"
              description="Apply to multiple jobs with just a few clicks. Save time and focus on what matters."
            />
            <FeatureCard
              icon="🎯"
              title="Personalized Matches"
              description="Get job recommendations tailored to your skills, experience, and career goals."
            />
            <FeatureCard
              icon="💼"
              title="Career Growth"
              description="Access resources, tips, and guidance to advance your career and reach your goals."
            />
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Job Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore opportunities in your field
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sales & Marketing', count: '12,345+ jobs' },
              { title: 'IT & Software', count: '8,234+ jobs' },
              { title: 'Customer Service', count: '5,678+ jobs' },
              { title: 'Operations', count: '4,567+ jobs' },
              { title: 'Finance & Accounting', count: '3,456+ jobs' },
              { title: 'HR & Recruitment', count: '2,345+ jobs' },
              { title: 'Design & Creative', count: '1,890+ jobs' },
              { title: 'Healthcare', count: '1,234+ jobs' },
            ].map((category, index) => (
              <Card key={index} hover className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Create Your Profile
                </h3>
                <p className="text-gray-600">
                  Sign up and build your professional profile in minutes. Add your skills, experience, and career preferences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Browse & Search
                </h3>
                <p className="text-gray-600">
                  Explore thousands of job listings. Use filters to find positions that match your skills and location.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Apply & Get Hired
                </h3>
                <p className="text-gray-600">
                  Apply to jobs with one click. Connect with employers and start your new career journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Job Search?"
        description="Join millions of professionals finding their next opportunity on Apna."
        primaryButton={{
          text: 'Get Started Free',
          href: '#signup',
        }}
        secondaryButton={{
          text: 'Browse Jobs',
          href: '#jobs',
        }}
      />
    </>
  )
}


