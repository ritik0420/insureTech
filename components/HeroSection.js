'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { useState, useEffect } from 'react';

// Stable particle configurations to prevent hydration mismatches
// Particles float upward, so endY is less than initial y (smaller % = higher)
const PARTICLE_CONFIGS = [
  { x: 25, y: 80, duration: 3.5, delay: 0.2, endY: 20 },
  { x: 70, y: 75, duration: 4.2, delay: 0.8, endY: 15 },
  { x: 45, y: 90, duration: 3.8, delay: 1.3, endY: 10 },
  { x: 15, y: 85, duration: 4.5, delay: 0.5, endY: 5 },
  { x: 80, y: 70, duration: 3.2, delay: 1.0, endY: 12 },
  { x: 55, y: 88, duration: 4.0, delay: 0.3, endY: 8 },
];

// Custom hook for typewriter effect
function useTypewriter(text, speed = 100, delay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(startTyping, speed);
      } else {
        setIsTyping(false);
      }
    };

    const initialTimeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayedText, isTyping };
}

// Custom hook for cycling typewriter effect
function useCyclingTypewriter(texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000, initialDelay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted && initialDelay > 0) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, initialDelay);
      return () => clearTimeout(startTimeout);
    }
    if (!hasStarted) {
      setHasStarted(true);
      return;
    }

    let timeoutId;
    const currentText = texts[currentTextIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayedText === currentText) {
      // Finished typing, pause then start deleting
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else if (isDeleting) {
      // Deleting characters
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, speed);
    } else {
      // Typing characters
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, speed);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayedText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration, initialDelay, hasStarted]);

  return { displayedText, isTyping: !isDeleting };
}

// Custom hook for count-up animation
function useCountUp(targetValue, duration = 2000, delay = 0, suffix = '') {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
    if (!hasStarted) {
      setHasStarted(true);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;
    const endValue = targetValue;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, delay, hasStarted]);

  return count;
}

export default function HeroSection() {
  const { displayedText, isTyping } = useTypewriter('Upskill your IT career', 80, 1000);
  
  // Cycling texts for the heading
  const headingTexts = [
    'Lead Tomorrow',
    'Excel Tomorrow',
    'Succeed Tomorrow',
    'Innovate Tomorrow',
    'Transform Tomorrow'
  ];
  const { displayedText: cyclingText, isTyping: isCyclingTyping } = useCyclingTypewriter(
    headingTexts,
    80,
    40,
    2500,
    800
  );

  // Count-up animations for stats
  const placementRate = useCountUp(98, 2000, 1500);
  const attendees = useCountUp(20, 2000, 1600);
  const learnerSatisfaction = useCountUp(95, 2000, 1700);
  const programOffered = useCountUp(50, 2000, 1800);
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white" aria-label="Hero section">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#AFCBFF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#0E1C36]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#AFCBFF]/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              <motion.span
                className="inline-block text-[#0E1C36]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Learn Today,
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-[#2B75FF]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {cyclingText}
                <motion.span
                  className="inline-block w-1 h-8 lg:h-10 bg-[#2B75FF] ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
            </h1>
            <motion.p
              className="text-xl text-[#2B75FF] mb-2 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {displayedText}
              {isTyping && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-[#2B75FF] ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.p>
            <motion.p
              className="text-[#0E1C36] mb-4 leading-relaxed max-w-[65ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Comprehensive courses from industry experts designed to transform your career. 
              Get hands-on experience with real-world projects and industry-recognized certifications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/courses" size="lg" variant="outline" className="relative overflow-visible group">
                {/* Decorative background elements inside button */}
                <motion.div
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 opacity-20 pointer-events-none"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#2B75FF] group-hover:text-white transition-colors duration-300">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 opacity-20 pointer-events-none"
                  animate={{
                    rotate: [0, -15, 15, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#2B75FF] group-hover:text-white transition-colors duration-300">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 11l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <span className="relative z-10">Explore Courses</span>
              </Button>
            </motion.div>

            {/* Compact Trust Building Stats */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <p className="text-sm font-semibold text-[#0E1C36] mb-4">Why partner With insureTech?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#2B75FF]">
                    {placementRate}%
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Placement Rate</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#2B75FF]">
                    {attendees}k+
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Attendees</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#2B75FF]">
                    {learnerSatisfaction}%
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Learner Satisfaction</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#2B75FF]">
                    {programOffered}+
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Program Offered</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative min-h-[500px]"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Abstract decorative shapes in background */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 bg-orange-200/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-20 right-8 w-16 h-16 bg-blue-200/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-1/4 w-20 h-20 bg-green-200/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Grid layout for three images in KnowledgeHut style */}
            <div className="relative grid grid-cols-2 gap-8">
              {/* First Image - Top Left */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex flex-col items-start">
                  {/* Circular image with colored background */}
                  <motion.div
                    className="relative w-44 h-44 mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0,
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <div className="absolute inset-0 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src="/images/brooke-cagle-g1Kr4Ozfoac-unsplash-removebg-preview.png"
                        alt="Team collaborating and learning together"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>
                  {/* Information card */}
                  <motion.div
                    className="bg-white rounded-xl p-4 shadow-lg w-full max-w-[220px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Business Development</p>
                    <p className="text-sm font-semibold text-gray-800">To Project Manager</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Second Image - Top Right */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex flex-col items-end">
                  {/* Circular image with colored background */}
                  <motion.div
                    className="relative w-44 h-44 mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <div className="absolute inset-0 bg-blue-400 rounded-full shadow-lg"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src="/images/julio-lopez-bwcO8pN7MS8-unsplash-removebg-preview.png"
                        alt="Person working on laptop"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>
                  {/* Information card */}
                  <motion.div
                    className="bg-white rounded-xl p-4 shadow-lg w-full max-w-[200px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs text-gray-500">150% Salary Hike</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Be a creator of your own destiny</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Third Image - Bottom Center */}
              <motion.div
                className="col-span-2 flex justify-center"
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="flex flex-col items-center">
                  {/* Circular image with colored background */}
                  <motion.div
                    className="relative w-44 h-44 mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.6,
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <div className="absolute inset-0 bg-green-400 rounded-full shadow-lg"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src="/images/surface-sAsAxFPXwEg-unsplash-removebg-preview.png"
                        alt="Hands typing on laptop"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>
                  {/* Information card */}
                  <motion.div
                    className="bg-white rounded-xl p-4 shadow-lg w-full max-w-[240px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Data Analyst</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-800">To Data Engineer</p>
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* AI Learning Trends Carousel */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-center text-xl md:text-2xl font-bold text-[#0E1C36] mb-3">
            Discover Latest AI-Powered Learning Trends & Insights
          </h3>
          <p className="text-center text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay ahead with cutting-edge AI technologies transforming education and professional development
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient fade on left */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <div className="flex animate-slide">
              {/* First set of logos */}
              <div className="flex items-center gap-6 md:gap-12 px-4 md:px-8 flex-shrink-0">
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/AWS.png"
                    alt="AWS"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/google (1).png"
                    alt="Google"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/cisco.png"
                    alt="Cisco"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/salesforce.png"
                    alt="Salesforce"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/microsoft.png"
                    alt="Microsoft"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/Comptia.svg"
                    alt="CompTIA"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-6 md:gap-12 px-4 md:px-8 flex-shrink-0">
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/AWS.png"
                    alt="AWS"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/google (1).png"
                    alt="Google"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/cisco.png"
                    alt="Cisco"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/salesforce.png"
                    alt="Salesforce"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/microsoft.png"
                    alt="Microsoft"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src="/images/Comptia.svg"
                    alt="CompTIA"
                    width={120}
                    height={40}
                    className="object-contain w-auto h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

