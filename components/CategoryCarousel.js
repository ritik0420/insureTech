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

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 items
      } else if (window.innerWidth < 768) {
        setItemsPerView(3); // Small tablet: 3 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4); // Tablet: 4 items
      } else if (window.innerWidth < 1280) {
        setItemsPerView(5); // Large tablet: 5 items
      } else {
        setItemsPerView(5); // Desktop: 5 items
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="course-categories-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pexels-karola-g-6256102.jpg"
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
        <div className="text-center mb-12">
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
                className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 z-0"
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
                      <div className="relative bg-white/85 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer h-full min-h-[260px] md:min-h-[280px] border border-white/30 shadow-sm hover:shadow-2xl hover:shadow-[#2B75FF]/20 transition-all duration-500 overflow-hidden">
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/5 via-transparent to-[#AFCBFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Course count badge */}
                        {category.courses && (
                          <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-[#2B75FF]/10 backdrop-blur-sm rounded-full border border-[#2B75FF]/20 group-hover:bg-[#2B75FF]/20 group-hover:border-[#2B75FF]/40 transition-all duration-300">
                            <span className="text-[10px] font-semibold text-[#2B75FF]">{category.courses}</span>
                          </div>
                        )}
                        
                        {/* Icon Container with modern styling */}
                        <div className="relative z-10 mb-4 flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/20 to-[#AFCBFF]/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-0 group-hover:scale-100"></div>
                          <div className="relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Image
                              src={category.icon}
                              alt={category.title}
                              width={80}
                              height={80}
                              className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            />
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="relative z-10 text-base md:text-lg font-bold text-[#0E1C36] text-center mb-2 group-hover:text-[#2B75FF] transition-colors duration-300 leading-tight">
                          {category.title}
                        </h3>

                        {/* Description */}
                        {category.description && (
                          <p className="relative z-10 text-sm md:text-base text-gray-600 text-center mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed px-2">
                            {category.description}
                          </p>
                        )}

                        {/* Learn More Indicator */}
                        <div className="relative z-10 mt-auto flex items-center gap-1.5 text-[#2B75FF] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-[10px] font-semibold uppercase tracking-wide">Explore</span>
                          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#2B75FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#AFCBFF]/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
