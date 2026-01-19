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
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

  const servicesCategories = [
    {
      title: 'Language Training',
      subcategories: ['English to Spanish', 'English to German']
    },
    {
      title: 'Digital Marketing',
      subcategories: ['SEO', 'Social Media Marketing', 'Paid Ads', 'Content Strategy']
    },
    {
      title: 'Web Development',
      subcategories: ['Frontend Development', 'Backend Development', 'Full-Stack Projects', 'Website Maintenance']
    },
    {
      title: 'IT Project Support',
      subcategories: ['Any IT Domain', 'Live Project Help', 'Assignment & Deadline Support', 'Real-world Project Guidance']
    }
  ];

  // Helper function to get icon for subcategory
  const getSubcategoryIcon = (categoryTitle, subcategory) => {
    if (categoryTitle === 'Language Training') {
      return (
        <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      );
    }

    if (categoryTitle === 'Digital Marketing') {
      if (subcategory === 'SEO') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      }
      if (subcategory === 'Social Media Marketing') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        );
      }
      if (subcategory === 'Paid Ads') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        );
      }
      if (subcategory === 'Content Strategy') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      }
    }

    if (categoryTitle === 'Web Development') {
      if (subcategory === 'Frontend Development') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      }
      if (subcategory === 'Backend Development') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      }
      if (subcategory === 'Full-Stack Projects') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      }
      if (subcategory === 'Website Maintenance') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      }
    }

    if (categoryTitle === 'IT Project Support') {
      if (subcategory === 'Any IT Domain') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      }
      if (subcategory === 'Live Project Help') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      }
      if (subcategory === 'Assignment & Deadline Support') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      }
      if (subcategory === 'Real-world Project Guidance') {
        return (
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      }
    }

    // Default icon
    return (
      <svg className="w-5 h-5 text-gray-500 group-hover:text-[#1199B6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );
  };

  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl font-dm-sans font-medium" style={{
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid rgba(0,0,0,0.08)'
    }}>
      <nav className="w-full pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Logo */}
            <div className="flex items-center"> 
              <Link href="/" className="flex items-center group ml-4">
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
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-sm mx-4">
              <form onSubmit={handleSearch} className="w-full relative">
                <div className={`relative flex items-center bg-gray-100 rounded-xl border transition-all duration-300 ${isSearchFocused
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
            <div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {/* Courses Dropdown */}
                <div
                  className="relative -ml-8"
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
                                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${hoveredCategory === index ? 'bg-[#1199B6]/10' : 'hover:bg-gray-50'
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

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setIsServicesDropdownOpen(true);
                    if (hoveredService === null) {
                      setHoveredService(0);
                    }
                  }}
                  onMouseLeave={() => {
                    setIsServicesDropdownOpen(false);
                    setHoveredService(null);
                  }}
                >
                  <Link
                    href="/services"
                    className="px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
                  >
                    <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Services Dropdown Menu */}
                  {isServicesDropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px] z-50"
                    >
                      <div
                        className="w-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        <div className="flex">
                          {/* Left Sidebar */}
                          <div className="w-[280px] border-r border-gray-200 max-h-[600px] overflow-y-auto">
                            {/* SERVICES Section */}
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SERVICES</h3>
                              </div>
                              <div className="space-y-1">
                                {servicesCategories.map((service, index) => (
                                  <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredService(index)}
                                  >
                                    <Link
                                      href={`/services?category=${encodeURIComponent(service.title)}`}
                                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${hoveredService === index ? 'bg-[#1199B6]/10' : 'hover:bg-gray-50'
                                        }`}
                                    >
                                      <div className="flex-1 min-w-0">
                                        <p className={`font-medium text-sm ${hoveredService === index ? 'text-[#1199B6]' : 'text-gray-900'} transition-colors truncate`}>
                                          {service.title}
                                        </p>
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
                          {hoveredService !== null && servicesCategories[hoveredService] && (
                            <div className="flex-1 p-6 max-h-[600px] overflow-y-auto">
                              <h3 className="text-lg font-semibold text-[#0C1A2B] mb-4">
                                {servicesCategories[hoveredService].title}
                              </h3>
                              <div className="grid grid-cols-1 gap-2">
                                {servicesCategories[hoveredService].subcategories.map((subcategory, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={`/services?category=${encodeURIComponent(servicesCategories[hoveredService].title)}&subcategory=${encodeURIComponent(subcategory)}`}
                                    className="flex items-center gap-3 text-gray-700 hover:text-[#1199B6] py-2 px-3 rounded-lg hover:bg-[#1199B6]/10 transition-colors text-sm font-medium group"
                                  >
                                    {getSubcategoryIcon(servicesCategories[hoveredService].title, subcategory)}
                                    <span>{subcategory}</span>
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
                <a
                  href={process.env.NEXT_PUBLIC_LMS_URL || "https://lms-insure-tech.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
                >
                  <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </a>
              </div>
            </div>
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
              <div className={`relative flex items-center bg-gray-100 rounded-xl border transition-all duration-300 ${isSearchFocused
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

            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium group"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Services</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  {servicesCategories.map((service, index) => (
                    <div key={index} className="space-y-1">
                      <Link
                        href={`/services?category=${encodeURIComponent(service.title)}`}
                        className="block px-4 py-2 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {service.subcategories.map((subcategory, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/services?category=${encodeURIComponent(service.title)}&subcategory=${encodeURIComponent(subcategory)}`}
                            className="flex items-center gap-3 px-4 py-1.5 rounded-lg text-gray-600 hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 text-sm group"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {getSubcategoryIcon(service.title, subcategory)}
                            <span>{subcategory}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
            <a
              href={process.env.NEXT_PUBLIC_LMS_URL || "https://lms.insuretechskills.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#0C1A2B] hover:text-[#1199B6] hover:bg-[#1199B6]/10 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Login</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

