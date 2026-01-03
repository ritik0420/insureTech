'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function PersonalizedLearningPath() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate particle positions once using useMemo to ensure consistency
  const particlePositions = useMemo(() => {
    return [...Array(12)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
  }, []);

  const learningSteps = [
    {
      id: 1,
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of your current skill level',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'One-on-One Mentoring',
      description: 'Personal guidance from industry experts',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Career Focused Roadmap',
      description: 'Custom learning path aligned with your goals',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Customized Projects',
      description: 'Hands-on experience with real-world scenarios',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 5,
      title: 'Job Interview Prep',
      description: 'Master the art of technical interviews',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      title: 'Mock Interviews',
      description: 'Practice with realistic interview scenarios',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
      aria-labelledby="learning-path-heading"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#1199B6]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/70 px-4 py-2 shadow-md border border-white/80 backdrop-blur"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <motion.span 
              className="w-2 h-2 bg-[#1199B6] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-[#1199B6] uppercase tracking-wider">
              Your Success Journey
            </span>
          </motion.div>

          <motion.h2 
            id="learning-path-heading" 
            className="text-5xl md:text-6xl font-bold mb-6 text-[#0C1A2B]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Personalized Learning Path
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[#1199B6] to-purple-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your career with a custom roadmap from 45+ courses, expert support, and industry-recognized certifications.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image with 3D Effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1199B6]/20 to-purple-500/20">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=1500&fit=crop&q=90"
                  alt="Professional team collaborating on personalized learning journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2B]/80 via-[#0C1A2B]/40 to-transparent" />
                </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-[#1199B6]/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1.3, 1, 1.3],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Learning Steps with Creative Cards */}
          <div className="relative space-y-6">
            {learningSteps.map((step, index) => (
              <LearningStepCard 
                key={step.id} 
                step={step} 
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="relative bg-gradient-to-br from-[#1199B6] to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating Particles Animation - Only render on client to avoid hydration issues */}
          {isMounted && particlePositions.map((pos, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (pos.left % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Animated Rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/10 rounded-full"
            style={{ x: '-50%', y: '-50%' }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 border border-white/10 rounded-full"
            style={{ x: '-50%', y: '-50%' }}
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.1, 0.3, 0.1],
              rotate: -360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Wave Lines */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
                transform: 'skewY(-10deg)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2.5,
              }}
            />
          ))}

          {/* Pulsing Glow Spots */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/10 rounded-full blur-2xl"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="relative z-10 text-center text-white">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              Ready to Start Your Learning Journey?
            </motion.h3>
            <motion.p 
              className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              Get a free personalized roadmap consultation from our expert mentors
            </motion.p>
            <motion.button
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-lg transition-all bg-white rounded-xl group shadow-lg mx-auto"
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.1 }}
            >
              {/* Top Right Corner Decoration */}
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#1199B6] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              
              {/* Bottom Left Corner Decoration */}
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#1199B6] rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              
              {/* Sliding Background */}
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gradient-to-r from-[#1199B6] to-[#0e7a8f] rounded-xl group-hover:translate-x-0"></span>
              
              {/* Button Text with Arrow */}
              <span className="relative w-full text-center text-[#1199B6] transition-colors duration-300 ease-in-out group-hover:text-white flex items-center justify-center gap-3">
                Get Your Free Roadmap
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </div>

          {/* Enhanced Decorative Blobs */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl"
            animate={{
              x: [-20, 20, -20],
              y: [-20, 20, -20],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// Learning Step Card Component with Universal Animations
function LearningStepCard({ step, index, isInView }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: 0.8 + index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 overflow-hidden cursor-pointer"
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 40px rgba(43, 117, 255, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          animate={isHovered ? { x: [-100, 100] } : {}}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />

        <div className="relative z-10 flex items-start gap-4">
          {/* Icon with Float Animation */}
          <motion.div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
            animate={{
              y: isHovered ? [-5, 5, -5] : 0,
              rotate: isHovered ? [0, 5, -5, 0] : 0,
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            whileHover={{ scale: 1.1 }}
          >
            {step.icon}
          </motion.div>

          <div className="flex-1">
            <motion.h3 
              className="text-xl font-bold text-[#0C1A2B] mb-2 group-hover:text-[#1199B6] transition-colors"
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {step.title}
            </motion.h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        {/* Bottom Progress Line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color}`}
          initial={{ width: 0 }}
          animate={isHovered ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Connection Line to Next Card */}
      {index < 5 && (
        <motion.div
          className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-[#1199B6] to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
        />
      )}
    </motion.div>
  );
}

