'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

export default function BlogSection({ blogPosts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse drag handlers
  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - clientX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="blog-heading">
      {/* Soft Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,117,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,28,54,0.05)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/70 px-3 py-1 shadow-sm border border-white/80 backdrop-blur">
            <span className="w-2 h-2 bg-[#1199B6] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#1199B6] uppercase tracking-[0.18em]">
              Latest Insights
            </span>
          </div>
          
          <h2 id="blog-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0C1A2B]">
            Our Comprehensive Blog
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1199B6] to-[#0C1A2B] mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Insights, Updates, and Expert Tips
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto px-4">
            Explore our blog for the latest trends, insights, and expert advice in IT and technology.
          </p>
        </div>
        
        {/* Mobile Carousel / Desktop Grid */}
        <div className="relative mb-12">
          {/* Mobile Carousel */}
          {isMobile ? (
            <>
              {/* Navigation Arrows - Mobile */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-xl border-2 border-[#1199B6]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] active:scale-95"
                aria-label="Previous blog post"
              >
                <svg
                  className="w-5 h-5 text-[#1199B6] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-xl border-2 border-[#1199B6]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] active:scale-95"
                aria-label="Next blog post"
              >
                <svg
                  className="w-5 h-5 text-[#1199B6] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="relative overflow-hidden mx-8"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="flex"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="w-full flex-shrink-0 px-2">
                      <article 
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 hover:shadow-2xl hover:shadow-[#1199B6]/20 transition-all duration-500"
                      >
                        {/* Image Container */}
                        <div className="relative aspect-video bg-gradient-to-br from-[#1199B6]/10 via-[#d7f9ff] to-[#1199B6]/20 overflow-hidden">
                          <Image
                            src={blogPosts[currentIndex].image}
                            alt={blogPosts[currentIndex].title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1199B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/80 shadow-sm z-10">
                            <span className="text-xs font-semibold text-[#1199B6]">{blogPosts[currentIndex].category || 'IT Insights'}</span>
                          </div>
                          {/* Hover overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <time className="text-sm text-gray-500 font-medium" dateTime={blogPosts[currentIndex].date}>
                              {blogPosts[currentIndex].date}
                            </time>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#0C1A2B] mb-3 group-hover:text-[#1199B6] transition-colors duration-300 leading-tight line-clamp-2">
                            {blogPosts[currentIndex].title}
                          </h3>
                          
                          {/* Read More Link */}
                          <div className="flex items-center gap-2 text-[#1199B6] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span>Read More</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1199B6]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </article>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Indicators - Mobile */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-[#1199B6] rounded-full shadow-lg shadow-[#1199B6]/50'
                        : 'w-2 h-2 bg-[#1199B6]/30 rounded-full hover:bg-[#1199B6]/50'
                    }`}
                    aria-label={`Go to blog post ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            /* Desktop Grid */
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-blue-100/50 hover:shadow-2xl hover:shadow-[#1199B6]/20 transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-video bg-gradient-to-br from-[#1199B6]/10 via-[#d7f9ff] to-[#1199B6]/20 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1199B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/80 shadow-sm z-10">
                      <span className="text-xs font-semibold text-[#1199B6]">{post.category || 'IT Insights'}</span>
                    </div>
                    {/* Hover overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <time className="text-sm text-gray-500 font-medium" dateTime={post.date}>
                        {post.date}
                      </time>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0C1A2B] mb-3 group-hover:text-[#1199B6] transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-[#1199B6] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Read More</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1199B6]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </article>
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center animate-fade-in-up animation-delay-400">
          <Button href="/blog" variant="secondary" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            View All Blogs →
          </Button>
        </div>
      </div>
    </section>
  );
}

