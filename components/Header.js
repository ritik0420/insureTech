'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const courseCategories = [
    { title: 'Cloud Computing', icon: '/images/categoryIcons/computer.png', courses: '12+ Courses', subcategories: ['AWS Solution Architect Training', 'AWS DevOps Engineer Training', 'AWS SysOps Administrator Training', 'AZ-900: Microsoft Azure Fundamental Training', 'Microsoft Azure Administrator Training', 'Microsoft Azure SQL Solution Training', 'MS Azure Infrastructure Solution Training', 'Terraform Associate Training', 'Azure DevOps Engineer Training', 'Kubernetes Administrator (CKA) Training', 'Google Professional Cloud Architect Training', 'Multi-Cloud DevOps with Generative AI Training'] },
    { title: 'IT Security', icon: '/images/categoryIcons/encrypted.png', courses: '11+ Courses', subcategories: ['Microsoft Azure Security Engineer Training', 'Certified Ethical Hacker (CEH) Training', 'Certified Cloud Security Professional Training', 'AWS Security Specialty Training', 'CompTIA Cloud+ Training', 'CompTIA Security+ Training', 'SOC Analyst Training', 'GRC Training', 'Cybersecurity Analyst Training', 'Certified Information Systems Security Professional Training', 'AI-powered CEH v13 Hands-on Training'] },
    { title: 'Data Science', icon: '/images/categoryIcons/data-science.png', courses: '4+ Courses', subcategories: ['Microsoft Azure Data Fundamental Training', 'Microsoft Azure Data Scientist Training', 'Microsoft Azure Power BI Training', 'Tableau Certified Data Analyst Training'] },
    { title: 'Project Management', icon: '/images/categoryIcons/mangement.png', courses: '5+ Courses', subcategories: ['PMP Training', 'Jira Training', 'Leading SAFe 6.0 Agilist Certification Training', 'Certified Scrum Master (CSM) Training', 'PRINCE2 Foundation and Practitioner Training'] },
    { title: 'Software Testing', icon: '/images/categoryIcons/test.png', courses: '2+ Courses', subcategories: ['Selenium (Java) Training', 'Manual Testing Training'] },
    { title: 'Web Development', icon: '/images/categoryIcons/code.png', courses: '4+ Courses', subcategories: ['React Js Training', 'Python Training', 'Java Training', 'Angular Training'] },
    { title: 'Salesforce', icon: '/HeroSectionIcon/salesforce.png', courses: '3+ Courses', subcategories: ['Salesforce Administrator Training', 'Salesforce Platform App Builder Training', 'Salesforce Developer Training'] },
    { title: 'Networking', icon: '/images/categoryIcons/computer.png', courses: '2+ Courses', subcategories: ['CompTIA Network+ Training', 'CISCO CCNA Training'] },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl font-dm-sans font-medium" style={{ 
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid rgba(0,0,0,0.08)'
    }}>
      <nav className="max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-28 sm:h-28 md:h-32 lg:h-36 w-auto flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <Image
                src="/HeroSectionIcon/insuretech logo (1).png"
                alt="insureTech Skills Logo"
                width={300}
                height={100}
                className="h-full w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <div className={`relative flex items-center bg-gray-100 rounded-xl border transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-gray-300 shadow-md bg-gray-50' 
                  : 'border-gray-200 hover:border-gray-300 shadow-sm'
              }`}>
                <svg 
                  className="w-5 h-5 text-gray-500 ml-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-4 py-3 bg-transparent text-[#0C1A2B] placeholder:text-[#0C1A2B]/60 focus:outline-none text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mr-3 p-1 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#0C1A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setIsCoursesDropdownOpen(true);
                if (hoveredCategory === null) {
                  setHoveredCategory(0);
                }
              }}
              onMouseLeave={() => {
                setIsCoursesDropdownOpen(false);
                setHoveredCategory(null);
              }}
            >
              <Link 
                href="/courses" 
                className="px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
              >
                <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Explore Courses</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              {isCoursesDropdownOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px] z-50"
                >
                  <div 
                    className="w-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                  <div className="flex">
                    {/* Left Sidebar */}
                    <div className="w-[280px] border-r border-gray-200 max-h-[600px] overflow-y-auto">
                      {/* COURSE CATEGORIES Section */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">COURSE CATEGORIES</h3>
                          <Link href="/courses" className="text-sm font-medium text-[#1199B6] hover:text-[#0e7a8f]">
                            View All Free Courses
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {courseCategories.map((category, index) => (
                            <div
                              key={index}
                              className="relative"
                              onMouseEnter={() => setHoveredCategory(index)}
                            >
                              <Link
                                href={`/courses?category=${encodeURIComponent(category.title)}`}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                                  hoveredCategory === index ? 'bg-[#1199B6]/10' : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                  <Image
                                    src={category.icon}
                                    alt={category.title}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className={`font-medium text-sm ${hoveredCategory === index ? 'text-[#1199B6]' : 'text-gray-900'} transition-colors truncate`}>
                                    {category.title}
                                  </p>
                                  <p className="text-xs text-gray-500">({category.courses})</p>
                                </div>
                                <svg 
                                  className="w-4 h-4 text-gray-400 flex-shrink-0" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Subcategories */}
                    {hoveredCategory !== null && courseCategories[hoveredCategory] && (
                      <div className="flex-1 p-6 max-h-[600px] overflow-y-auto">
                        <h3 className="text-lg font-semibold text-[#0C1A2B] mb-4">
                          View Top {courseCategories[hoveredCategory].title} Courses
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {courseCategories[hoveredCategory].subcategories.map((subcategory, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`/courses?category=${encodeURIComponent(courseCategories[hoveredCategory].title)}&subcategory=${encodeURIComponent(subcategory)}`}
                              className="text-gray-700 hover:text-[#1199B6] py-2 px-3 rounded-lg hover:bg-[#1199B6]/10 transition-colors text-sm font-medium"
                            >
                              {subcategory}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  </div>
                </div>
              )}
            </div>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About</span>
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Blog</span>
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact</span>
            </Link>
            <Link
              href="/enroll"
              className="px-6 py-2.5 rounded-xl bg-[#0C1A2B] text-white font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0C1A2B]/40 transition-all duration-300 text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span>Enroll Now</span>
            </Link>
          </div>

          {/* Mobile Search & Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-[#0C1A2B] hover:bg-[#1199B6]/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200/50">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className={`relative flex items-center bg-gray-100 rounded-xl border transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-gray-300 shadow-md bg-gray-50' 
                  : 'border-gray-200 shadow-sm'
              }`}>
                <svg 
                  className="w-5 h-5 text-gray-500 ml-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-4 py-3 bg-transparent text-[#0C1A2B] placeholder:text-[#0C1A2B]/60 focus:outline-none text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mr-3 p-1 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#0C1A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
            
            {/* Mobile Navigation Links */}
            <Link 
              href="/courses" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Courses</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About Us</span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Blog</span>
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#0C1A2B] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </Link>
            <Link
              href="/enroll"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#0C1A2B] text-white font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0C1A2B]/40 transition-all duration-300 mt-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span>Enroll Now</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

