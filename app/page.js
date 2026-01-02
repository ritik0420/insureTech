import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CategoryCarousel from '@/components/CategoryCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import PopularCoursesSection from '@/components/PopularCoursesSection';
import PersonalizedLearningPath from '@/components/PersonalizedLearningPath';
import FeaturesCarousel from '@/components/FeaturesCarousel';
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
  className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
  aria-labelledby="what-we-do-heading"
>
  {/* Premium background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0E1C36] via-[#0E1C36]/95 to-[#2B75FF]/20"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,117,255,0.25)_0%,transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_40%)]"></div>

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-20">
      <h2
        id="what-we-do-heading"
        className="text-5xl sm:text-6xl font-extrabold text-white mb-6"
      >
        We Don’t Just Teach Skills.  
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2B75FF] to-white">
          We Build Tech Careers.
        </span>
      </h2>

      <p className="text-xl text-white/80 max-w-3xl mx-auto">
        Industry-aligned training, real-world projects, and expert mentorship —
        designed to make you job-ready, not just certified.
      </p>
    </div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      {/* Left */}
      <div className="space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            ["50+", "Industry Courses"],
            ["20K+", "Learners Trained"],
            ["98%", "Career Success"],
            ["24/7", "Expert Support"],
          ].map(([value, label], i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {value}
              </div>
              <div className="text-white/70 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Value points */}
        <div className="space-y-6 text-white/80 text-lg leading-relaxed">
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
      </div>

      {/* Right – Visual */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#2B75FF] to-[#0E1C36] opacity-40 blur-3xl rounded-3xl"></div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:scale-[1.03] transition-all duration-500">
          <Image
            src="/banner.png"
            alt="InsureTech Skills Career Transformation"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />

          <div className="absolute bottom-6 left-6 right-6 bg-[#0E1C36]/80 backdrop-blur-lg rounded-xl p-5 border border-white/10">
            <p className="text-white font-semibold text-lg">
              Industry-Recognized Certifications
            </p>
            <p className="text-white/70 text-sm">
              Learn from certified experts. Get hired faster.
            </p>
          </div>
        </div>
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
      <PersonalizedLearningPath />

      {/* Why insureTech */}
      <FeaturesCarousel features={features} />

      {/* Stats Section */}
      <section
  className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
  aria-labelledby="stats-heading"
>
  {/* Subtle premium background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#F6F9FF] via-white to-[#EEF3FF]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(43,117,255,0.08)_0%,transparent_40%),radial-gradient(circle_at_75%_70%,rgba(14,28,54,0.06)_0%,transparent_45%)]"></div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-8">
        <h2
          id="stats-heading"
          className="text-5xl font-extrabold text-[#0E1C36] leading-tight"
        >
          Why Organizations  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2B75FF] to-[#0E1C36]">
            Trust InsureTech Skills
          </span>
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
          We partner with learners and organizations to deliver industry-ready
          talent through expert-led training, real-world exposure, and
          measurable outcomes.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#2B75FF]/10 text-[#2B75FF] font-semibold">
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
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#2B75FF] to-[#0E1C36] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icon */}
            <div className="w-10 h-10 mb-4 rounded-xl bg-[#2B75FF]/10 flex items-center justify-center group-hover:bg-[#2B75FF] transition-colors duration-300">
              <svg
                className="w-6 h-6 text-[#2B75FF] group-hover:text-white transition-colors duration-300"
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
            <div className="text-4xl font-extrabold text-[#0E1C36] mb-2 group-hover:text-[#2B75FF] transition-colors duration-300">
              {stat.value}
            </div>

            {/* Label */}
            <p className="text-gray-600 text-lg font-medium leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
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
