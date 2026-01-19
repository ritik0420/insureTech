'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CategoryCarousel({ categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Function to get Unsplash image based on category
  const getCategoryImage = (categoryTitle) => {
    const imageMap = {
      'Cloud Computing': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80',
      'IT Security': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop&q=80',
      'Data Science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80',
      'Project Management': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80',
      'Software Testing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80',
      'Web Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&q=80',
      'Salesforce': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80',
      'Networking': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80',
      'Cloud Security': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop&q=80',
      'Cyber Security': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop&q=80',
    };
    return imageMap[categoryTitle] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80';
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (width < 768) {
        setItemsPerView(2); // Small tablet: 2 items
      } else if (width < 1024) {
        setItemsPerView(3); // Tablet: 3 items
      } else if (width < 1280) {
        setItemsPerView(4); // Large tablet: 4 items
      } else {
        setItemsPerView(4); // Desktop: 4 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(categories.length / itemsPerView));
  const maxIndex = Math.max(0, totalSlides - 1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (totalSlides <= 1) return 0;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (totalSlides <= 1) return 0;
      return prev === maxIndex ? 0 : prev + 1;
    });
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

  const getVisibleCategories = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    const visible = categories.slice(start, end);
    
    // If we don't have enough items to fill the view, pad with items from the beginning
    if (visible.length < itemsPerView && categories.length > 0) {
      const needed = itemsPerView - visible.length;
      return [...visible, ...categories.slice(0, needed)];
    }
    
    return visible;
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="course-categories-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroSectionIcon/pexels-karola-g-6256102.jpg"
          alt="Education background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A2B]/85 via-[#0C1A2B]/80 to-[#0C1A2B]/85"></div>
        {/* Additional subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1199B6]/10 via-transparent to-[#1199B6]/10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#1199B6] rounded-full shadow-lg shadow-[#1199B6]/50'
                    : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60 backdrop-blur-sm'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="course-categories-heading"
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl"
            >
              Explore Our Course By Category
            </h2>
          </motion.div>
          <motion.p
            className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover comprehensive training programs across diverse IT domains
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-8 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] hover:shadow-2xl hover:shadow-[#1199B6]/50 group active:scale-95"
            aria-label="Previous categories"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1199B6] group-hover:text-white transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-4 lg:translate-x-8 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] hover:shadow-2xl hover:shadow-[#1199B6]/50 group active:scale-95"
            aria-label="Next categories"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1199B6] group-hover:text-white transition-colors"
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

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="relative overflow-visible mx-4 sm:mx-8 md:mx-16 py-2"
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
                className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {getVisibleCategories().map((category, index) => {
                  const globalIndex = currentIndex * itemsPerView + index;
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="group"
                    >
                      <div className="relative bg-white rounded-xl overflow-hidden cursor-pointer h-full shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Header Image with Unsplash */}
                        <div className="relative h-32 md:h-36 overflow-hidden">
                          {/* Unsplash Image */}
                          <Image
                            src={getCategoryImage(category.title)}
                            alt={category.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          {/* Dark overlay for better contrast */}
                          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A2B]/60 via-[#0C1A2B]/40 to-[#0C1A2B]/60"></div>
                          {/* Futuristic Grid Pattern Overlay */}
                          <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <pattern id={`grid-pattern-${globalIndex}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1199B6" strokeWidth="1"/>
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill={`url(#grid-pattern-${globalIndex})`} />
                            </svg>
                          </div>
                          {/* Additional horizontal and vertical lines */}
                          <div className="absolute inset-0">
                            <div className="absolute top-1/4 left-0 right-0 h-px bg-[#1199B6] opacity-30"></div>
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1199B6] opacity-30"></div>
                            <div className="absolute top-3/4 left-0 right-0 h-px bg-[#1199B6] opacity-30"></div>
                            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#1199B6] opacity-30"></div>
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1199B6] opacity-30"></div>
                            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#1199B6] opacity-30"></div>
                          </div>
                          
                          {/* Blue Square Icon with White Icon in bottom-left */}
                          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#1199B6] rounded flex items-center justify-center shadow-lg z-10">
                            <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                              <Image
                                src={category.icon}
                                alt={category.title}
                                width={24}
                                height={24}
                                className="w-4 h-4 sm:w-6 sm:h-6 object-contain filter brightness-0 invert"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-3 sm:p-4 md:p-5">
                          {/* Title - Large, Bold Blue */}
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1199B6] mb-1.5 sm:mb-2 leading-tight">
                            {category.title}
                          </h3>

                          {/* Description - Smaller Grey */}
                          {category.description && (
                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                              {category.description}
                            </p>
                          )}

                          {/* Program Type and Rating Row */}
                          <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                            {/* Program Type */}
                            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1199B6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-[10px] sm:text-xs font-semibold text-[#1199B6] uppercase tracking-wide truncate">
                                {category.courses || 'PROGRAM'}
                              </span>
                            </div>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 fill-orange-500 flex-shrink-0" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                              <span className="text-xs sm:text-sm font-semibold text-orange-500">4.6</span>
                            </div>
                          </div>

                          {/* Divider Line */}
                          <div className="border-t border-gray-200 my-2 sm:my-3"></div>

                          {/* Difficulty and Duration Row */}
                          <div className="flex items-center justify-between gap-2">
                            {/* Difficulty Level */}
                            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                              <span className="text-[10px] sm:text-xs text-gray-600 truncate">Intermediate</span>
                            </div>
                            
                            {/* Duration */}
                            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-[10px] sm:text-xs text-gray-600 truncate">62 hours</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Auto-play indicator (optional) - Mobile optimized */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-1 sm:gap-1.5 sm:gap-2 overflow-x-auto pb-2 px-2 max-w-full scrollbar-hide">
          <div className="flex items-center gap-1 sm:gap-1.5 sm:gap-2">
            {(() => {
              const buttons = [];
              const maxVisible = isMobile ? 5 : 7; // Show max 5 on mobile, 7 on desktop
              
              // Always show first page
              if (totalSlides > 0) {
                buttons.push(
                  <button
                    key={0}
                    onClick={() => goToSlide(0)}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm min-w-[1.75rem] sm:min-w-[2.5rem] ${
                      0 === currentIndex
                        ? 'bg-[#1199B6] text-white shadow-lg shadow-[#1199B6]/50'
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}
                    aria-label="Go to slide 1"
                  >
                    1
                  </button>
                );
              }
              
              // Show ellipsis if current is far from start
              if (currentIndex > 2 && totalSlides > maxVisible) {
                buttons.push(
                  <span key="ellipsis-start" className="text-white/40 text-xs px-1">...</span>
                );
              }
              
              // Show pages around current
              const start = Math.max(1, currentIndex - (isMobile ? 1 : 2));
              const end = Math.min(totalSlides - 2, currentIndex + (isMobile ? 1 : 2));
              
              for (let i = start; i <= end; i++) {
                if (i > 0 && i < totalSlides - 1) {
                  buttons.push(
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm min-w-[1.75rem] sm:min-w-[2.5rem] ${
                        i === currentIndex
                          ? 'bg-[#1199B6] text-white shadow-lg shadow-[#1199B6]/50'
                          : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  );
                }
              }
              
              // Show ellipsis if current is far from end
              if (currentIndex < totalSlides - 3 && totalSlides > maxVisible) {
                buttons.push(
                  <span key="ellipsis-end" className="text-white/40 text-xs px-1">...</span>
                );
              }
              
              // Always show last page (if more than 1 page)
              if (totalSlides > 1) {
                buttons.push(
                  <button
                    key={totalSlides - 1}
                    onClick={() => goToSlide(totalSlides - 1)}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm min-w-[1.75rem] sm:min-w-[2.5rem] ${
                      totalSlides - 1 === currentIndex
                        ? 'bg-[#1199B6] text-white shadow-lg shadow-[#1199B6]/50'
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}
                    aria-label={`Go to slide ${totalSlides}`}
                  >
                    {totalSlides}
                  </button>
                );
              }
              
              return buttons;
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
