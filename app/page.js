import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CategoryCarousel from '@/components/CategoryCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import PopularCoursesSection from '@/components/PopularCoursesSection';
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
        url: '/HeroSectionIcon/logo (2).png',
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
    { title: 'Certified Trainer', icon: '👥' },
    { title: '1-on-1 Training', icon: '💻' },
    { title: 'Customized Curriculum Training', icon: '📚' },
    { title: 'Flexible Schedule', icon: '⏰' },
    { title: 'Business Solutions Provider', icon: '🏢' },
    { title: 'Project Coach & Mentor', icon: '🎯' },
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="what-we-do-heading">
        {/* Soft Background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,117,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,28,54,0.05)_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 id="what-we-do-heading" className="text-5xl font-bold mb-4 text-[#0E1C36]">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2B75FF] to-[#0E1C36] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering IT Careers in Insurance Technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6 animate-fade-in-left animation-delay-200">
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p className="text-xl font-semibold text-[#0E1C36] mb-2">
                  Comprehensive IT Training & Certification
                </p>
                <p>
                  At InsureTech Skills, we are committed to empowering IT professionals 
                  with comprehensive training and certification courses. Our mission is to 
                  bridge the gap between industry requirements and professional skills, 
                  ensuring our learners are equipped with the latest knowledge and practical 
                  expertise needed to excel in today&apos;s competitive technology landscape.
                </p>
                <p>
                  We offer a wide range of courses covering cloud computing, cybersecurity, 
                  data science, DevOps, and more. Each course is designed by industry experts 
                  and includes hands-on labs, real-world projects, and personalized mentorship 
                  to help you succeed in your career.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-300">
                  <div className="text-2xl font-bold text-[#2B75FF] mb-1">50+</div>
                  <div className="text-sm text-gray-600">Expert Courses</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-400">
                  <div className="text-2xl font-bold text-[#2B75FF] mb-1">20k+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-500">
                  <div className="text-2xl font-bold text-[#2B75FF] mb-1">98%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-600">
                  <div className="text-2xl font-bold text-[#2B75FF] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right animation-delay-300">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/10 to-[#0E1C36]/10 rounded-2xl"></div>
                <Image
                  src="/banner.png"
                  alt="InsureTech Skills - Empowering IT Careers in Insurance Technology"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl relative z-10"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1C36]/90 via-[#0E1C36]/70 to-transparent p-6 rounded-b-2xl z-20 animate-fade-in animation-delay-500">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 animate-scale-in animation-delay-600">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Certified Expert Program</p>
                      <p className="text-white/80 text-sm">Industry-Recognized Certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-400 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B75FF] to-[#0E1C36] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1C36] mb-2">Expert-Led Training</h3>
              <p className="text-gray-600">
                Learn from industry-certified professionals with years of real-world experience in insurance technology.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-500 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B75FF] to-[#0E1C36] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1C36] mb-2">Career-Focused Curriculum</h3>
              <p className="text-gray-600">
                Our courses are designed to align with current industry demands and help you land your dream IT role.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-600 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B75FF] to-[#0E1C36] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1C36] mb-2">Personalized Mentorship</h3>
              <p className="text-gray-600">
                Get one-on-one guidance from experienced mentors who understand your career goals and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="blog-heading">
        {/* Soft Background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,117,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,28,54,0.05)_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/70 px-3 py-1 shadow-sm border border-white/80 backdrop-blur">
              <span className="w-2 h-2 bg-[#2B75FF] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#2B75FF] uppercase tracking-[0.18em]">
                Latest Insights
              </span>
            </div>
            
            <h2 id="blog-heading" className="text-5xl font-bold mb-4 text-[#0E1C36]">
              Our Comprehensive Blog
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2B75FF] to-[#0E1C36] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, Updates, and Expert Tips
            </p>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Explore our blog for the latest trends, insights, and expert advice in IT and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 hover:shadow-2xl hover:shadow-[#2B75FF]/20 transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-video bg-gradient-to-br from-[#2B75FF]/10 via-[#d7f9ff] to-[#AFCBFF]/20 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/80 shadow-sm z-10">
                    <span className="text-xs font-semibold text-[#2B75FF]">{post.category || 'IT Insights'}</span>
                  </div>
                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C36]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-[#2B75FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time className="text-sm text-gray-500 font-medium" dateTime={post.date}>
                      {post.date}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0E1C36] mb-3 group-hover:text-[#2B75FF] transition-colors duration-300 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-[#2B75FF] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Read More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2B75FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up animation-delay-400">
            <Button href="/blog" variant="secondary" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              View All Blogs →
            </Button>
          </div>
        </div>
      </section>

      {/* Personalized Learning Path */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#d7f9ff]" aria-labelledby="learning-path-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="learning-path-heading" className="text-4xl font-bold mb-4 text-[#0E1C36]">
              Personalized Learning Path
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn from it with a custom roadmap from 45+ courses, expert support, and certifications.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg max-w-4xl mx-auto">
              <div className="aspect-square rounded-2xl bg-[#d7f9ff] flex items-center justify-center mb-8">
                <div className="text-7xl">🌐</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {['Skill Assessment', 'One-on-One Mentoring', 'Career Focused Roadmap', 
                  'Job Interview Prep', 'Customized Projects', 'Mock Interviews'].map((item, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <p className="font-semibold text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trends Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#d7f9ff]" aria-labelledby="ai-trends-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="aspect-video rounded-2xl bg-white flex items-center justify-center">
                <div className="text-5xl">👥</div>
              </div>
            </div>
            <div>
              <h2 id="ai-trends-heading" className="text-4xl font-bold mb-8 text-[#0E1C36]">
                Discover The Latest Learning With AI Trends and Insights
              </h2>
              <div className="space-y-6">
                {['Data Science', 'Cloud Computing', 'Cyber Security', 'Web Development'].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">{skill}</span>
                      <span className="text-gray-600">{85 + index * 5}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-[#2B75FF]"
                        style={{ width: `${85 + index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['AWS', 'Azure', 'CompTIA', 'Red Hat', 'Cisco', 'VMware', 'Google'].map((partner, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-semibold text-gray-700">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why insureTech */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="why-insuretech-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="why-insuretech-heading" className="text-4xl font-bold text-center mb-12 text-[#0E1C36]">
            Why insureTech?
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#d7f9ff]" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="stats-heading" className="text-4xl font-bold text-center mb-12 text-[#0E1C36]">
            Why partner With insureTech?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2 text-[#2B75FF]">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2B75FF] text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-4">Seize the Moment: Transform Your Future</h2>
          <p className="text-xl mb-8 text-white/90">
            Don&apos;t miss out on the opportunity to advance your career. Enroll in our cutting-edge 
            IT courses today and unlock your full potential.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Now
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 id="contact-heading" className="text-4xl font-bold text-center mb-8 text-[#0E1C36]">Get In Touch</h2>
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
                  className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#2B75FF] focus:border-transparent"
                />
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#2B75FF] focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#2B75FF] focus:border-transparent"
                />
                <label htmlFor="course-category" className="sr-only">Course Category</label>
                <select id="course-category" name="courseCategory" className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#2B75FF] focus:border-transparent">
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
                className="w-full px-4 py-3 rounded-2xl border border-[#d7f9ff] focus:outline-none focus:ring-2 focus:ring-[#2B75FF] focus:border-transparent"
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
