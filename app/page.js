import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CategoryCarousel from '@/components/CategoryCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import PopularCoursesSection from '@/components/PopularCoursesSection';
import PersonalizedLearningPath from '@/components/PersonalizedLearningPath';
import FeaturesCarousel from '@/components/FeaturesCarousel';
import BlogSection from '@/components/BlogSection';
import Image from 'next/image';

export const metadata = {
  title: 'Home',
  description: 'Transform your IT career with comprehensive training courses from InsureTech Skills. Learn AWS, Azure, DevOps, Cybersecurity, Data Science and more from industry experts. 98% placement rate, 20k+ students trained.',
  openGraph: {
    title: 'InsureTech Skills - Professional IT Training & Certification Courses',
    description: 'Transform your IT career with comprehensive training courses. Learn AWS, Azure, DevOps, Cybersecurity, Data Science and more from industry experts.',
    url: 'https://insuretechskills.com',
    siteName: 'InsureTech Skills',
    images: [
      {
        url: '/HeroSectionIcon/LightLogo.png',
        width: 1200,
        height: 630,
        alt: 'InsureTech Skills - IT Training & Certification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
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

  const popularCourses = [
    {
      title: 'AWS Solution Architect Training',
      description: 'Master AWS cloud architecture and design scalable solutions',
      mode: 'Online',
      duration: '20 Hours',
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
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
    },
  ];

  const blogPosts = [
    {
      title: 'Why 2024 Will Be The Year Of Cybersecurity Growth',
      date: '15 March, 2024',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80',
      category: 'Cybersecurity',
    },
    {
      title: 'Rapid Data Science Evolution In 2024',
      date: '15 March, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      category: 'Data Science',
    },
    {
      title: 'Multi-Cloud Strategy: Benefits, Challenges, and Best Practices',
      date: '15 March, 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
      category: 'Cloud Computing',
    },
  ];

  const features = [
    { 
      title: 'Certified Trainers', 
      description: 'Learn from industry-certified experts with proven track records in delivering top-quality training'
    },
    { 
      title: '1-on-1 Training', 
      description: 'Get personalized attention with dedicated one-on-one sessions tailored to your learning pace'
    },
    { 
      title: 'Customized Curriculum', 
      description: 'Flexible course content adapted to your specific goals and industry requirements'
    },
    { 
      title: 'Flexible Schedule', 
      description: 'Learn at your convenience with flexible timing that fits your busy lifestyle'
    },
    { 
      title: 'Business Solutions', 
      description: 'Comprehensive corporate training solutions designed to upskill your entire team'
    },
    { 
      title: 'Project Coach & Mentor', 
      description: 'Expert guidance and mentorship for your real-world projects and career growth'
    },
  ];

  const stats = [
    { value: '98%', label: 'Placement Rate' },
    { value: '20k+', label: 'Students' },
    { value: '95%', label: 'Learner Satisfaction' },
    { value: '50+', label: 'Programs Taught' },
  ];

  // Structured Data for Course Offerings
  const courseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: popularCourses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'InsureTech Skills',
          sameAs: 'https://insuretechskills.com',
        },
        courseMode: course.mode,
        timeRequired: course.duration,
        educationalLevel: 'Professional',
        inLanguage: 'en',
        url: `https://insuretechskills.com/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Structured Data for Courses */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseStructuredData) }}
      />
      
      <main>
        <HeroSection />
      
      {/* Course Categories */}
      <CategoryCarousel categories={categories} />

      <PopularCoursesSection popularCourses={popularCourses} />

      {/* What We Do */}
      <section
        className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="what-we-do-heading"
      >
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A2B] via-[#0C1A2B]/95 to-[#1199B6]/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,117,255,0.25)_0%,transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_40%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2
              id="what-we-do-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6"
            >
              We Don't Just Teach Skills.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1199B6] to-[#7DD3FC]">
                We Build Tech Careers.
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Industry-aligned training, real-world projects, and expert mentorship —
              designed to make you job-ready, not just certified.
            </p>
          </div>

          {/* Main Content - Single Column Layout */}
          <div className="space-y-12 lg:space-y-16">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {[
                ["50+", "Industry Courses"],
                ["20K+", "Learners Trained"],
                ["98%", "Career Success"],
                ["24/7", "Expert Support"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm lg:text-base">{label}</div>
                </div>
              ))}
            </div>

            {/* Value points */}
            <div className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto text-center">
              <p>
                Our programs are designed by industry experts to bridge the gap
                between traditional learning and real-world IT demands.
              </p>
              <p>
                From cloud and cybersecurity to DevOps and data science, every
                course includes hands-on labs, live mentorship, and career
                guidance tailored to you.
              </p>
            </div>

            {/* Certifications Section */}
            <div className="relative mt-12 lg:mt-16">
              {/* Background with gradient and abstract elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1199B6]/30 via-[#0C1A2B]/50 to-[#1199B6]/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,153,182,0.3)_0%,transparent_70%)]"></div>
                {/* Abstract decorative elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1199B6]/10 rounded-full blur-3xl"></div>
              </div>

              {/* Content Box */}
              <div className="relative bg-[#0C1A2B]/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                      Industry-Recognized Certifications
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base lg:text-lg">
                      Learn from certified experts. Get hired faster.
                    </p>
                  </div>
                  
                  {/* Icons */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection blogPosts={blogPosts} />

      {/* Personalized Learning Path */}
      <PersonalizedLearningPath />

      {/* Why insureTech */}
      <FeaturesCarousel features={features} />

      {/* Stats Section */}
      <section
  className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
  aria-labelledby="stats-heading"
>
  {/* Subtle premium background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#F6F9FF] via-white to-[#EEF3FF]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(43,117,255,0.08)_0%,transparent_40%),radial-gradient(circle_at_75%_70%,rgba(14,28,54,0.06)_0%,transparent_45%)]"></div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-6 sm:space-y-8">
        <h2
          id="stats-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C1A2B] leading-tight"
        >
          Why Organizations  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1199B6] to-[#0C1A2B]">
            Trust InsureTech Skills
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
          We partner with learners and organizations to deliver industry-ready
          talent through expert-led training, real-world exposure, and
          measurable outcomes.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1199B6]/10 text-[#1199B6] font-semibold">
          Proven. Trusted. Outcome-Driven.
        </div>
      </div>

      {/* Right Stats */}
      <div className="grid sm:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-lg border border-blue-100/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1199B6] to-[#0C1A2B] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icon */}
            <div className="w-10 h-10 mb-4 rounded-xl bg-[#1199B6]/10 flex items-center justify-center group-hover:bg-[#1199B6] transition-colors duration-300">
              <svg
                className="w-6 h-6 text-[#1199B6] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Value */}
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0C1A2B] mb-2 group-hover:text-[#1199B6] transition-colors duration-300">
              {stat.value}
            </div>

            {/* Label */}
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1199B6] text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Seize the Moment: Transform Your Future</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90">
            Don&apos;t miss out on the opportunity to advance your career. Enroll in our cutting-edge 
            IT courses today and unlock your full potential.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Now
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#0C1A2B]">Get In Touch</h2>
            <form className="space-y-6" aria-label="Contact form">
              <div className="grid md:grid-cols-2 gap-6">
                <label htmlFor="full-name" className="sr-only">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#1199B6] focus:border-transparent"
                />
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#1199B6] focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#1199B6] focus:border-transparent"
                />
                <label htmlFor="course-category" className="sr-only">Course Category</label>
                <select id="course-category" name="courseCategory" className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#1199B6] focus:border-transparent">
                  <option value="">Course Category</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-science">Data Science</option>
                  <option value="devops">DevOps</option>
                </select>
              </div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#1199B6] focus:border-transparent"
              ></textarea>
              <div className="text-center">
                <Button variant="purple" size="lg" className="w-full md:w-auto">
                  RESERVE YOUR SEAT NOW
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
