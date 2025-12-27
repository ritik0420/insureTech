'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function FeaturesCarousel({ features }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(features.length / itemsPerView));
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

  const getVisibleFeatures = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    const visible = features.slice(start, end);
    
    // If we don't have enough items to fill the view, pad with items from the beginning
    if (visible.length < itemsPerView && features.length > 0) {
      const needed = itemsPerView - visible.length;
      return [...visible, ...features.slice(0, needed)];
    }
    
    return visible;
  };

  const featureIcons = {
    'Certified Trainers': (
      <Image
        src="/icon-removebg-preview.png"
        alt="ISO 9001 Certified"
        width={64}
        height={64}
        className="w-16 h-16 object-contain brightness-0 invert"
      />
    ),
    '1-on-1 Training': (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'Customized Curriculum': (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    'Flexible Schedule': (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'Business Solutions': (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    'Project Coach & Mentor': (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="why-insuretech-heading">
      {/* Soft Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,117,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,28,54,0.05)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/70 px-3 py-1 shadow-sm border border-white/80 backdrop-blur">
            <span className="w-2 h-2 bg-[#2B75FF] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#2B75FF] uppercase tracking-[0.18em]">
              Why Choose Us
            </span>
          </div>
          
          <h2 id="why-insuretech-heading" className="text-5xl font-bold mb-4 text-[#0E1C36]">
            Why InsureTech Skills?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2B75FF] to-[#0E1C36] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in IT training with our comprehensive learning solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-blue-100/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#2B75FF] hover:border-[#2B75FF] hover:shadow-2xl hover:shadow-[#2B75FF]/50 group"
                aria-label="Previous features"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-blue-100/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#2B75FF] hover:border-[#2B75FF] hover:shadow-2xl hover:shadow-[#2B75FF]/50 group"
                aria-label="Next features"
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
            </>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden mx-0 md:mx-16 py-2"
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {getVisibleFeatures().map((feature, index) => {
                  const globalIndex = currentIndex * itemsPerView + index;
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="h-full"
                      style={{ perspective: '1000px' }}
                    >
                      <div className="flip-card-container h-full min-h-[320px] cursor-pointer group">
                        <div className="flip-card-inner relative w-full h-full transition-all duration-[1200ms] ease-in-out transform-style-3d group-hover:rotate-y-180">
                          {/* Front Side */}
                          <div className="flip-card-front absolute w-full h-full backface-hidden">
                            <div className="bg-gradient-to-br from-blue-50/90 via-white/95 to-purple-50/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 h-full flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#2B75FF]/50 transition-all duration-1200">
                              {/* Energetic gradient mesh */}
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,117,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.08),transparent_50%)]"></div>
                              
                              {/* Animated light rays */}
                              <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/10 via-transparent to-purple-400/10 animate-pulse"></div>
                              </div>
                              
                              {/* Elegant corner accent line */}
                              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#2B75FF]/30 rounded-tr-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-1200"></div>
                              
                              {/* Icon - THE HERO */}
                              <div className="relative z-10 mb-8 group-hover:-translate-y-2 transition-all duration-1200">
                                {/* Mega Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF] to-[#0E1C36] rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 group-hover:blur-3xl transition-all duration-1200 scale-110 animate-pulse"></div>
                                <div className="absolute inset-0 bg-[#2B75FF] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-1200 scale-125"></div>
                                
                                {/* Icon Container - Bigger & Better */}
                                <div className="relative w-32 h-32 bg-gradient-to-br from-[#2B75FF] via-[#1a5ed6] to-[#0E1C36] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-1200 border-2 border-white/30 group-hover:border-white/50">
                                  <div className="scale-125">
                                    {featureIcons[feature.title]}
                                  </div>
                                  
                                  {/* Rotating ring effect */}
                                  <div className="absolute inset-0 rounded-3xl border-2 border-white/20 animate-spin-slow"></div>
                                </div>
                              </div>
                              
                              {/* Title - Bold & Confident */}
                              <h3 className="relative z-10 text-2xl font-black text-[#0E1C36] text-center mb-2 leading-tight tracking-tight">
                                {feature.title}
                              </h3>
                              
                              {/* NEW: Subtitle */}
                              <p className="relative z-10 text-sm text-gray-600 text-center mb-6 font-medium">
                                {feature.title === 'Certified Trainers' && 'Industry-certified professionals'}
                                {feature.title === '1-on-1 Training' && 'Personalized attention guaranteed'}
                                {feature.title === 'Customized Curriculum' && 'Tailored to your goals'}
                                {feature.title === 'Flexible Schedule' && 'Learn at your own pace'}
                                {feature.title === 'Business Solutions' && 'Enterprise-grade training'}
                                {feature.title === 'Project Coach & Mentor' && 'Expert guidance throughout'}
                              </p>
                              
                              {/* Pill-style Micro CTA */}
                              <div className="relative z-10 mt-auto">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2B75FF] to-[#1a5ed6] hover:from-[#1a5ed6] hover:to-[#0E1C36] text-white text-xs font-bold uppercase tracking-wide rounded-full group-hover:scale-105 transition-all duration-500 border border-white/20">
                                  <span>Explore</span>
                                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                              
                              {/* Enhanced bottom accent */}
                              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#2B75FF]/40 to-transparent group-hover:via-[#2B75FF]/60 transition-all duration-1200"></div>
                            </div>
                          </div>
                          
                          {/* Back Side */}
                          <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
                            <div className="bg-gradient-to-br from-[#0E1C36] via-[#1a3a5c] to-[#0d2847] backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full flex flex-col items-center justify-center relative overflow-hidden">
                              {/* Enhanced gradient overlay for depth */}
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,117,255,0.2),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.15),transparent_50%)]"></div>
                              
                              {/* Layered depth effect */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              
                              {/* Subtle grid pattern - more visible */}
                              <div className="absolute inset-0 opacity-[0.05]">
                                <div className="absolute inset-0" style={{
                                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                                  backgroundSize: '40px 40px'
                                }}></div>
                              </div>
                              
                              {/* Glowing orb effect for depth */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2B75FF]/10 rounded-full blur-3xl"></div>
                              
                              {/* Professional icon badge */}
                              <div className="relative z-10 mb-6">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 scale-110">
                                  <div className="scale-110">
                                    {featureIcons[feature.title]}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Title with professional styling */}
                              <h3 className="relative z-10 text-2xl font-extrabold text-white text-center mb-4 leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                {feature.title}
                              </h3>
                              
                              {/* Elegant divider line - more prominent */}
                              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-6 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                              
                              {/* Description with refined typography */}
                              <p className="relative z-10 text-white/95 text-center leading-relaxed text-[15px] px-4 font-normal max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                {feature.description}
                              </p>
                              
                              {/* Enhanced corner accents with glow */}
                              <div className="absolute top-0 left-0 w-24 h-24">
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/30 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/30 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                              </div>
                              <div className="absolute bottom-0 right-0 w-24 h-24">
                                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/30 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                                <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-white/30 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                              </div>
                              
                              {/* Bottom depth accent */}
                              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
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

        {/* Pagination Indicators */}
        {totalSlides > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#2B75FF] rounded-full shadow-lg shadow-[#2B75FF]/50'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

