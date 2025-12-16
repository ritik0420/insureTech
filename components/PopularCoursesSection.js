'use client';

import { motion } from 'framer-motion';
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
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#d7f9ff] via-[#e8fcff] to-[#d7f9ff] overflow-hidden"
      aria-labelledby="popular-courses-heading"
    >
      {/* Subtle background pattern echoing hero + category sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-10 w-80 h-80 bg-[#2B75FF]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-[26rem] h-[26rem] bg-[#0E1C36]/10 rounded-full blur-3xl" />
        <div className="absolute inset-x-10 top-32 h-40 bg-gradient-to-r from-white/60 via-white/30 to-white/60 rounded-[3rem] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-2xl">
            {/* Section eyebrow / badge */}
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/70 px-3 py-1 shadow-sm border border-white/80 backdrop-blur">
              <span className="w-2 h-2 bg-[#2B75FF] rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#2B75FF] uppercase tracking-[0.18em]">
                Most Popular
              </span>
            </div>

            <h2
              id="popular-courses-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#0E1C36] leading-tight"
            >
              Explore Our{' '}
              <span className="bg-gradient-to-r from-[#2B75FF] to-[#1e5acc] bg-clip-text text-transparent">
                Popular Courses
              </span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Exclusive and advanced learning paths crafted by industry experts, blending live mentoring,
              hands-on labs, and real-world projects so you can move from classroom to career with confidence.
            </p>

            {/* Inline stats reused from hero tone */}
            <div className="flex flex-nowrap gap-4 sm:gap-6 mt-6 overflow-x-auto">
              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 border border-[#d7f9ff] shadow-sm">
                <motion.div
                  className="relative h-8 w-8 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Image
                    src="/icons8-rank-48.png"
                    alt="Student success icon"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <span className="text-sm sm:text-base text-gray-700 whitespace-nowrap">
                  <span className="font-semibold text-[#0E1C36]">98% Success rate</span>
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 border border-[#d7f9ff] shadow-sm">
                <motion.div
                  className="relative h-8 w-8 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Image
                    src="/icons8-student-48.png"
                    alt="Ranked students icon"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <span className="text-sm sm:text-base text-gray-700 whitespace-nowrap">
                  <span className="font-semibold text-[#0E1C36]">20k+ Students trained</span>
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <Button
                href="/courses"
                variant="secondary"
                className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                View All Courses →
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Glassmorphism card strip for courses */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-[2rem] p-5 sm:p-6 lg:p-8 shadow-[0_22px_55px_rgba(15,35,52,0.12)] border border-white/80"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <motion.div
              className="flex flex-wrap gap-2 text-xs sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <span className="px-3 py-1 rounded-full bg-[#2B75FF]/10 text-[#2B75FF] font-semibold">
                Cloud &amp; DevOps
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0E1C36]/5 text-[#0E1C36] font-semibold">
                Data &amp; Analytics
              </span>
              <span className="px-3 py-1 rounded-full bg-[#2B75FF]/5 text-[#2B75FF] font-semibold">
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

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {popularCourses.map((course, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


