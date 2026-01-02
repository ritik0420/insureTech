'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopularCoursesSection from '@/components/PopularCoursesSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getCourseBySlug } from '@/data/courses';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const course = getCourseBySlug(params?.slug);
  const [expandedModule, setExpandedModule] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedDescription, setExpandedDescription] = useState('overview');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    contactPreference: 'WhatsApp',
    program: ''
  });

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-[#2B75FF] hover:underline">
            Back to Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0E1C36] via-[#0E1C36] to-[#1a2d5a] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#2B75FF_1px,transparent_1px),linear-gradient(to_bottom,#2B75FF_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                {course.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90 mb-4 leading-relaxed"
              >
                {course.heroDescription}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-white"
              >
                {course.callToAction}
              </motion.p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-64 bg-[#0E1C36] rounded-2xl border-2 border-white/20 p-8 flex flex-col items-center justify-center">
                <div className="text-white text-4xl font-bold mb-2">aws</div>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-orange-500 text-xl font-bold">Solution Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Course Highlights */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C36] mb-6">
                COURSE <span className="text-[#2B75FF]">HIGHLIGHTS</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#2B75FF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Description */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C36] mb-6">
                Course <span className="text-[#2B75FF]">Description</span>
              </h2>
              <div className="space-y-4">
                {[
                  { key: 'overview', title: 'Overview', content: course.description.overview },
                  { key: 'whyChoose', title: 'Why choose AWS Solution Architect Training from InsureTech Skills?', content: course.description.whyChoose },
                  { key: 'keyFeatures', title: 'Key Features', content: course.description.keyFeatures, isList: true },
                  { key: 'whatYouWillLearn', title: 'What Will You Learn', content: course.description.whatYouWillLearn, isList: true },
                  { key: 'prerequisites', title: 'Pre-requisites', content: course.description.prerequisites, isList: true },
                  { key: 'whoCanJoin', title: 'Who Can Join This Course?', content: course.description.whoCanJoin, isList: true },
                  { key: 'distinctness', title: 'Our Distinctness', content: course.description.distinctness }
                ].map((section) => (
                  <div key={section.key} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedDescription(expandedDescription === section.key ? null : section.key)}
                      className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                    >
                      <span className="font-semibold text-[#0E1C36]">{section.title}</span>
                      <svg
                        className={`w-5 h-5 text-[#2B75FF] transition-transform ${expandedDescription === section.key ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedDescription === section.key && (
                      <div className="px-6 py-4 bg-white">
                        {section.isList ? (
                          <ul className="space-y-2 text-gray-700">
                            {section.content.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#2B75FF] mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700 leading-relaxed">{section.content}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Course Module */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C36] mb-6">
                Course <span className="text-[#2B75FF]">Module</span>
              </h2>
              <div className="bg-[#0E1C36] rounded-2xl p-6 space-y-4">
                {course.modules.map((module, index) => (
                  <div key={index} className="bg-white/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="font-semibold">{module.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${expandedModule === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedModule === index && (
                      <div className="px-6 py-4 bg-white/5">
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-white/90 flex items-start gap-2">
                              <span className="text-[#2B75FF] mt-1">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700 mb-4">Want the Full Course Syllabus?</p>
                <button className="bg-[#2B75FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e5acc] transition-colors">
                  DOWNLOAD SYLLABUS
                </button>
              </div>
            </section>

            {/* Learning Modes */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C36] mb-4 text-center">
                Choose Your Preferred Learning Mode
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Our inspiring and updated training program delivers a learning experience that will accelerate your career advancement.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {course.learningModes.map((mode, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#2B75FF] transition-colors">
                    <div className="text-4xl mb-4">{mode.icon}</div>
                    <h3 className="text-xl font-bold text-[#0E1C36] mb-3">{mode.title}</h3>
                    <p className="text-gray-600 mb-6">{mode.description}</p>
                    <button className="bg-[#2B75FF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1e5acc] transition-colors w-full">
                      {mode.buttonText}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-4">Looking for a customized training?</p>
                <button className="bg-[#2B75FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e5acc] transition-colors">
                  REQUEST A BATCH
                </button>
              </div>
            </section>

            {/* Why Insuretech Skills */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C36] mb-8 text-center">
                Why Insuretech Skills
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#2B75FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-[#0E1C36] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C36] mb-8">
                Frequently asked question
              </h2>
              <div className="space-y-4">
                {course.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                    >
                      <span className="font-semibold text-[#0E1C36] pr-4">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-[#2B75FF] flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-45' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Demo Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Demo Form */}
              <div className="bg-white border-2 border-[#2B75FF] rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0E1C36] mb-6 text-center">
                  GET A FREE DEMO CLASS
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B75FF]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B75FF]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B75FF]"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Your Phone No"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B75FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About number for WhatsApp?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="WhatsApp"
                          checked={formData.contactPreference === 'WhatsApp'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>WhatsApp</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="Call"
                          checked={formData.contactPreference === 'Call'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>Call</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B75FF]"
                    >
                      <option value="">Select Program</option>
                      <option value={course.title}>{course.title}</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2B75FF] text-white py-3 rounded-lg font-semibold hover:bg-[#1e5acc] transition-colors"
                  >
                    RESERVE YOUR SEAT NOW
                  </button>
                </form>
              </div>

              {/* Corporate Training Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#0E1C36] mb-2">Corporate Training</h3>
                <p className="text-gray-600 mb-4">Enterprise training for teams</p>
                <button className="w-full bg-[#2B75FF] text-white py-3 rounded-lg font-semibold hover:bg-[#1e5acc] transition-colors">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <PopularCoursesSection 
        popularCourses={[
          {
            title: 'AWS Solution Architect Training',
            description: 'Master AWS cloud architecture and design scalable solutions',
            mode: 'Online',
            duration: '20 Hours',
            href: '/courses/aws-solution-architect-training',
            icon: (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            ),
          },
          {
            title: 'AWS DevOps Engineer Training',
            description: 'Master AWS DevOps tools and practices',
            mode: 'Online',
            duration: '25 Hours',
            href: '/courses',
            icon: (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            ),
          },
          {
            title: 'Microsoft Azure Power BI Training',
            description: 'Transform data into insights with Power BI',
            mode: 'Online',
            duration: '20 Hours',
            href: '/courses',
            icon: (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            ),
          },
          {
            title: 'Cybersecurity Analyst Training',
            description: 'Protect organizations from cyber threats',
            mode: 'Online',
            duration: '40 Hours',
            href: '/courses',
            icon: (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
            ),
          },
        ]}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

