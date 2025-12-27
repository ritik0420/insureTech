import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCarousel from '@/components/CategoryCarousel';
import PopularCoursesSection from '@/components/PopularCoursesSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Button from '@/components/Button';

export const metadata = {
  title: 'Courses - InsureTech Skills',
  description: 'Explore comprehensive IT training courses including Cloud Computing, AWS, Azure, DevOps, Cybersecurity, Data Science, and more. Industry-certified programs with 98% placement rate.',
  openGraph: {
    title: 'Courses - InsureTech Skills',
    description: 'Explore comprehensive IT training courses including Cloud Computing, AWS, Azure, DevOps, Cybersecurity, Data Science, and more.',
    url: 'https://insuretechskills.com/courses',
    siteName: 'InsureTech Skills',
    type: 'website',
  },
};

export default function CoursesPage({ searchParams }) {
  const selectedCategory = searchParams?.category || null;

  const categories = [
    { 
      title: 'Cloud Computing', 
      icon: '/images/categoryIcons/computer.png',
      description: 'Master AWS, Azure & cloud platforms',
      courses: '12+ Courses'
    },
    { 
      title: 'IT Security', 
      icon: '/images/categoryIcons/encrypted.png',
      description: 'Protect systems & networks',
      courses: '8+ Courses'
    },
    { 
      title: 'Data Science', 
      icon: '/images/categoryIcons/data-science.png',
      description: 'Analytics, ML & AI expertise',
      courses: '10+ Courses'
    },
    { 
      title: 'Project Management', 
      icon: '/images/categoryIcons/mangement.png',
      description: 'Agile, Scrum & PMP certified',
      courses: '6+ Courses'
    },
    { 
      title: 'Software Testing', 
      icon: '/images/categoryIcons/test.png',
      description: 'QA, automation & testing tools',
      courses: '7+ Courses'
    },
    { 
      title: 'Web Development', 
      icon: '/images/categoryIcons/code.png',
      description: 'Full-stack & modern frameworks',
      courses: '15+ Courses'
    },
    { 
      title: 'Salesforce', 
      icon: '/HeroSectionIcon/salesforce.png',
      description: 'CRM, Admin & Developer paths',
      courses: '9+ Courses'
    },
    { 
      title: 'Networking', 
      icon: '/images/categoryIcons/computer.png',
      description: 'CCNA, network infrastructure',
      courses: '5+ Courses'
    },
    { 
      title: 'Cloud Security', 
      icon: '/images/categoryIcons/password.png',
      description: 'Secure cloud architectures',
      courses: '6+ Courses'
    },
    { 
      title: 'Cyber Security', 
      icon: '/images/categoryIcons/cyber-criminal.png',
      description: 'Ethical hacking & defense',
      courses: '11+ Courses'
    },
  ];

  const allCourses = [
    {
      title: 'AWS Solution Architect Training',
      description: 'Master AWS cloud architecture and design scalable solutions',
      mode: 'Online',
      duration: '20 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'Azure DevOps Engineer Training',
      description: 'Learn CI/CD pipelines and Azure DevOps best practices',
      mode: 'Online',
      duration: '30-35 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'Microsoft Azure Power BI Training',
      description: 'Transform data into insights with Power BI',
      mode: 'Online',
      duration: '20 Hours',
      category: 'Data Science',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'Cybersecurity Analyst Training',
      description: 'Protect organizations from cyber threats',
      mode: 'Online',
      duration: '40 Hours',
      category: 'IT Security',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
    },
    {
      title: 'Multi-Cloud Security Training AWS, Azure & GCP',
      description: 'Comprehensive security across multiple cloud platforms',
      mode: 'Online',
      duration: '35 Hours',
      category: 'Cloud Security',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
    },
    {
      title: 'Multi-Cloud DevOps with Generative AI Training',
      description: 'Advanced DevOps practices with AI integration',
      mode: 'Online',
      duration: '40 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'AWS DevOps Engineer Training',
      description: 'Master AWS DevOps tools and practices',
      mode: 'Online',
      duration: '25 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'Azure Infrastructure Solution Training',
      description: 'Design and implement Azure infrastructure solutions',
      mode: 'Online',
      duration: '30 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'Microsoft Azure Fundamental Training',
      description: 'Learn the fundamentals of Microsoft Azure',
      mode: 'Online',
      duration: '15 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      title: 'Microsoft Azure Administrator Training',
      description: 'Become a certified Azure Administrator',
      mode: 'Online',
      duration: '35 Hours',
      category: 'Cloud Computing',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
  ];

  // Filter courses by category if selected
  const filteredCourses = selectedCategory 
    ? allCourses.filter(course => course.category === selectedCategory)
    : allCourses;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0E1C36] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(43,117,255,0.15)_0%,transparent_60%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Explore Our
              <span className="block text-[#2B75FF]">
                Comprehensive Courses
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Industry-aligned training programs designed to make you job-ready, not just certified.
            </p>
            {selectedCategory && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-semibold">Filtered by: {selectedCategory}</span>
                <a 
                  href="/courses" 
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Clear filter"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Course Categories */}
        <CategoryCarousel categories={categories} />

        {/* Transition Section */}
        <div className="h-16 bg-gradient-to-b from-[#0E1C36] via-[#0E1C36]/80 to-[#d7f9ff]"></div>

        {/* All Courses Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#d7f9ff]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E1C36] mb-4">
                {selectedCategory ? `${selectedCategory} Courses` : 'All Courses'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {selectedCategory 
                  ? `Explore all courses in ${selectedCategory}`
                  : 'Browse through our complete catalog of professional IT training programs'
                }
              </p>
            </div>

            <PopularCoursesSection popularCourses={filteredCourses} />
          </div>
        </section>

        {/* CTA Transition */}
        <div className="h-20 bg-gradient-to-b from-[#d7f9ff] via-[#2B75FF]/30 to-[#2B75FF]"></div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2B75FF] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of students who have transformed their careers with our expert-led training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/enroll" variant="secondary" size="lg">
                Enroll Now
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#2B75FF]">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

