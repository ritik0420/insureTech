'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2B75FF] backdrop-blur-md shadow-lg font-dm-sans font-medium" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <nav className="max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-28 sm:h-28 md:h-32 lg:h-36 w-auto flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/logo (2).png"
                alt="insureTech Skills Logo"
                width={300}
                height={100}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <div className={`relative flex items-center bg-white/80 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-[#60a5fa] shadow-lg shadow-[#60a5fa]/20 bg-white' 
                  : 'border-[#d7f9ff]/50 hover:border-[#d7f9ff]'
              }`}>
                <svg 
                  className="w-5 h-5 text-[#2B75FF] ml-4" 
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
                  className="w-full px-4 py-3 bg-transparent text-[#0E1C36] placeholder:text-[#0E1C36]/60 focus:outline-none text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mr-3 p-1 rounded-lg hover:bg-[#d7f9ff]/20 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#0E1C36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/courses" 
              className="px-4 py-2 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Courses</span>
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About</span>
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Blog</span>
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium text-sm flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact</span>
            </Link>
            <Link
              href="/enroll"
              className="px-6 py-2.5 rounded-xl bg-[#0E1C36] text-white font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0E1C36]/40 transition-all duration-300 text-sm flex items-center space-x-2 group"
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
              className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
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
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className={`relative flex items-center bg-white/80 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-[#60a5fa] shadow-lg shadow-[#60a5fa]/20 bg-white' 
                  : 'border-[#d7f9ff]/50'
              }`}>
                <svg 
                  className="w-5 h-5 text-[#2B75FF] ml-4" 
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
                  className="w-full px-4 py-3 bg-transparent text-[#0E1C36] placeholder:text-[#0E1C36]/60 focus:outline-none text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mr-3 p-1 rounded-lg hover:bg-[#d7f9ff]/20 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#0E1C36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
            
            {/* Mobile Navigation Links */}
            <Link 
              href="/courses" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Courses</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About Us</span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Blog</span>
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:text-white hover:bg-white/20 transition-all duration-200 font-medium group"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </Link>
            <Link
              href="/enroll"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#0E1C36] text-white font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0E1C36]/40 transition-all duration-300 mt-2 group"
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

