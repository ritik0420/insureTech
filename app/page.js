import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import CourseCard from '@/components/CourseCard';
import CategoryCarousel from '@/components/CategoryCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
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
        url: '/images/logo (2).png',
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
      image: '/blog-1.jpg',
    },
    {
      title: 'Rapid Data Science Evolution In 2024',
      date: '15 March, 2024',
      image: '/blog-2.jpg',
    },
    {
      title: 'Multi-Cloud Strategy: Benefits, Challenges, and Best Practices',
      date: '15 March, 2024',
      image: '/blog-3.jpg',
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

      {/* Popular Courses */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#d7f9ff] via-[#e8fcff] to-[#d7f9ff]" aria-labelledby="popular-courses-heading">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#2B75FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0E1C36] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-6 md:mb-0">
              {/* Modern badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#2B75FF] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#2B75FF] uppercase tracking-wider">Most Popular</span>
              </div>
              
              <h2 id="popular-courses-heading" className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0E1C36] leading-tight">
                Explore Our <span className="bg-gradient-to-r from-[#2B75FF] to-[#1e5acc] bg-clip-text text-transparent">Popular Courses</span>
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl leading-relaxed">
                Exclusive and advanced courses designed to accelerate your career growth 
                with hands-on experience and industry expertise.
              </p>
              
              {/* Modern stats inline */}
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#2B75FF]">98%</span>
                  <span className="text-sm text-gray-600">Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#2B75FF]">20k+</span>
                  <span className="text-sm text-gray-600">Students</span>
                </div>
              </div>
            </div>
            <Button href="/courses" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-300">
              View All Courses →
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course, index) => (
              <div key={index} className="transform transition-all duration-300 hover:scale-105">
                <CourseCard {...course} popular={index < 2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="what-we-do-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="what-we-do-heading" className="text-4xl font-bold mb-6 text-[#0E1C36]">What we do</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At insureTech Skills, we are committed to empowering IT professionals 
                  with comprehensive training and certification courses. Our mission is to 
                  bridge the gap between industry requirements and professional skills, 
                  ensuring our learners are equipped with the latest knowledge and practical 
                  expertise.
                </p>
                <p>
                  We offer a wide range of courses covering cloud computing, cybersecurity, 
                  data science, DevOps, and more. Each course is designed by industry experts 
                  and includes hands-on labs, real-world projects, and personalized mentorship 
                  to help you succeed in your career.
                </p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="aspect-video rounded-2xl bg-[#d7f9ff] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🛣️</div>
                  <p className="text-[#0E1C36] font-semibold">Career Pathways</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="blog-heading" className="text-4xl font-bold mb-4 text-[#0E1C36]">
              Our Comprehensive Blog
            </h2>
            <p className="text-gray-600 text-lg">
              Insights, Updates, and Expert Tips
            </p>
            <p className="text-gray-600 mt-2">
              Explore our blog for the latest trends, insights, and expert advice in IT and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-[#d7f9ff] flex items-center justify-center">
                  <div className="text-4xl">📰</div>
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500 mb-2" dateTime={post.date}>{post.date}</time>
                  <h3 className="text-xl font-bold text-[#0E1C36] mb-2 hover:text-[#2B75FF] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Button href="/blog">View All Blogs</Button>
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
