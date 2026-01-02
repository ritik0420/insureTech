'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CategoryCarousel({ categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 items
      } else if (window.innerWidth < 768) {
        setItemsPerView(3); // Small tablet: 3 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4); // Tablet: 4 items
      } else if (window.innerWidth < 1280) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C36]/85 via-[#0E1C36]/80 to-[#0E1C36]/85"></div>
        {/* Additional subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/10 via-transparent to-[#AFCBFF]/10"></div>
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
                    ? 'w-8 h-2 bg-[#2B75FF] rounded-full shadow-lg shadow-[#2B75FF]/50'
                    : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60 backdrop-blur-sm'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/space.png"
                alt="Space exploration icon"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-2xl"
              />
            </motion.div>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#2B75FF] hover:border-[#2B75FF] hover:shadow-2xl hover:shadow-[#2B75FF]/50 group"
            aria-label="Previous categories"
          >
            <svg
              className="w-6 h-6 text-[#2B75FF] group-hover:text-white transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#2B75FF] hover:border-[#2B75FF] hover:shadow-2xl hover:shadow-[#2B75FF]/50 group"
            aria-label="Next categories"
          >
            <svg
              className="w-6 h-6 text-[#2B75FF] group-hover:text-white transition-colors"
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
            className="relative overflow-visible mx-8 md:mx-16 py-2"
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
                className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 z-0"
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
                          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C36]/60 via-[#0E1C36]/40 to-[#0E1C36]/60"></div>
                          {/* Futuristic Grid Pattern Overlay */}
                          <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <pattern id={`grid-pattern-${globalIndex}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2B75FF" strokeWidth="1"/>
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill={`url(#grid-pattern-${globalIndex})`} />
                            </svg>
                          </div>
                          {/* Additional horizontal and vertical lines */}
                          <div className="absolute inset-0">
                            <div className="absolute top-1/4 left-0 right-0 h-px bg-[#2B75FF] opacity-30"></div>
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#2B75FF] opacity-30"></div>
                            <div className="absolute top-3/4 left-0 right-0 h-px bg-[#2B75FF] opacity-30"></div>
                            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#2B75FF] opacity-30"></div>
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#2B75FF] opacity-30"></div>
                            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#2B75FF] opacity-30"></div>
                          </div>
                          
                          {/* Blue Square Icon with White Icon in bottom-left */}
                          <div className="absolute bottom-3 left-3 w-10 h-10 bg-[#2B75FF] rounded flex items-center justify-center shadow-lg z-10">
                            <div className="relative w-6 h-6">
                              <Image
                                src={category.icon}
                                alt={category.title}
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain filter brightness-0 invert"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4 md:p-5">
                          {/* Title - Large, Bold Blue */}
                          <h3 className="text-xl md:text-2xl font-bold text-[#2B75FF] mb-2 leading-tight">
                            {category.title}
                          </h3>

                          {/* Description - Smaller Grey */}
                          {category.description && (
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                              {category.description}
                            </p>
                          )}

                          {/* Program Type and Rating Row */}
                          <div className="flex items-center justify-between mb-3">
                            {/* Program Type */}
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-[#2B75FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-xs font-semibold text-[#2B75FF] uppercase tracking-wide">
                                {category.courses || 'PROGRAM'}
                              </span>
                            </div>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-orange-500 fill-orange-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                              <span className="text-sm font-semibold text-orange-500">4.6</span>
                            </div>
                          </div>

                          {/* Divider Line */}
                          <div className="border-t border-gray-200 my-3"></div>

                          {/* Difficulty and Duration Row */}
                          <div className="flex items-center justify-between">
                            {/* Difficulty Level */}
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                              <span className="text-xs text-gray-600">Intermediate</span>
                            </div>
                            
                            {/* Duration */}
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-xs text-gray-600">62 hours</span>
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

        {/* Auto-play indicator (optional) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                index === currentIndex
                  ? 'bg-[#2B75FF] text-white shadow-lg shadow-[#2B75FF]/50'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
