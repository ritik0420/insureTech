'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import CourseCard from './CourseCard';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardsContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

export default function PopularCoursesSection({ popularCourses = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 768) {
        setItemsPerView(2); // Small tablet: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 items
      } else {
        setItemsPerView(4); // Desktop: 4 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(popularCourses.length / itemsPerView));
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

  const getVisibleCourses = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    const visible = popularCourses.slice(start, end);
    
    if (visible.length < itemsPerView && popularCourses.length > 0) {
      const needed = itemsPerView - visible.length;
      return [...visible, ...popularCourses.slice(0, needed)];
    }
    
    return visible;
  };

  return (
    <div
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      aria-labelledby="popular-courses-heading"
    >
      {/* Subtle background pattern echoing hero + category sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-10 w-80 h-80 bg-[#1199B6]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-[26rem] h-[26rem] bg-[#0C1A2B]/10 rounded-full blur-3xl" />
        <div className="absolute inset-x-10 top-32 h-40 bg-gradient-to-r from-white/60 via-white/30 to-white/60 rounded-[3rem] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-2xl w-full">
            {/* Section eyebrow / badge */}
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/70 px-3 py-1 shadow-sm border border-white/80 backdrop-blur">
              <span className="w-2 h-2 bg-[#1199B6] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#1199B6] uppercase tracking-[0.18em]">
                Most Popular
              </span>
            </div>

            <h2
              id="popular-courses-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-[#0C1A2B] leading-tight"
            >
              Explore Our{' '}
              <span className="bg-gradient-to-r from-[#1199B6] to-[#0e7a8f] bg-clip-text text-transparent">
                Popular Courses
              </span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Exclusive and advanced learning paths crafted by industry experts, blending live mentoring,
              hands-on labs, and real-world projects so you can move from classroom to career with confidence.
            </p>

            {/* Inline stats reused from hero tone */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6">
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl bg-white/80 border border-[#d7f9ff] shadow-sm flex-shrink-0">
                <motion.div
                  className="relative h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Image
                    src="/icons8-rank-48.png"
                    alt="Student success icon"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </motion.div>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 whitespace-nowrap">
                  <span className="font-semibold text-[#0C1A2B]">98% Success rate</span>
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl bg-white/80 border border-[#d7f9ff] shadow-sm flex-shrink-0">
                <motion.div
                  className="relative h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Image
                    src="/icons8-student-48.png"
                    alt="Ranked students icon"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </motion.div>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 whitespace-nowrap">
                  <span className="font-semibold text-[#0C1A2B]">20k+ Students trained</span>
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <Button
                href="/courses"
                variant="secondary"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
              >
                View All Courses →
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Glassmorphism card strip for courses */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-[2rem] p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_22px_55px_rgba(15,35,52,0.12)] border border-white/80"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <motion.div
              className="flex flex-wrap gap-2 text-xs sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#1199B6]/10 text-[#1199B6] font-semibold whitespace-nowrap">
                Cloud &amp; DevOps
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#0C1A2B]/5 text-[#0C1A2B] font-semibold whitespace-nowrap">
                Data &amp; Analytics
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#1199B6]/5 text-[#1199B6] font-semibold whitespace-nowrap">
                Security
              </span>
            </motion.div>
            <motion.span
              className="hidden md:inline text-xs font-medium text-gray-500"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
            >
              Curated tracks aligned with real hiring trends
            </motion.span>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Only show on mobile/tablet when needed */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-8 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-md shadow-xl sm:shadow-2xl border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] hover:shadow-2xl hover:shadow-[#1199B6]/50 group"
                  aria-label="Previous courses"
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
                  className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-2 md:translate-x-4 lg:translate-x-8 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-md shadow-xl sm:shadow-2xl border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] hover:shadow-2xl hover:shadow-[#1199B6]/50 group"
                  aria-label="Next courses"
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
              </>
            )}

            <div
              ref={carouselRef}
              className="relative overflow-visible mx-0 sm:mx-4 md:mx-8 lg:mx-16 py-2"
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
                  variants={cardsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {getVisibleCourses().map((course, index) => {
                    const globalIndex = currentIndex * itemsPerView + index;
                    return (
                      <motion.div
                        key={globalIndex}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      >
                        <CourseCard {...course} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Indicators */}
          {totalSlides > 1 && (
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-[#1199B6] rounded-full shadow-lg shadow-[#1199B6]/50'
                      : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}


