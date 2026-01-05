'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Button from '@/components/Button';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ServicesPageContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get('category') || null;
  const selectedSubcategory = searchParams?.get('subcategory') || null;
  const [expandedCategory, setExpandedCategory] = useState(selectedCategory || null);

  // Auto-expand category if selected via searchParams
  useEffect(() => {
    if (selectedCategory) {
      setExpandedCategory(selectedCategory);
      // Scroll to the category section
      setTimeout(() => {
        const element = document.getElementById(`category-${selectedCategory.replace(/\s+/g, '-')}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [selectedCategory]);

  const servicesCategories = [
    {
      title: 'Language Training',
      description: 'Master new languages with our comprehensive, immersive training programs designed for professionals. Learn from certified native speaker instructors and achieve fluency through structured curriculum, real-world practice scenarios, and personalized learning paths tailored to your career goals.',
      longDescription: 'Our language training programs combine traditional learning methods with modern interactive techniques. Whether you\'re preparing for international business, academic pursuits, or personal enrichment, our expert instructors provide one-on-one attention and flexible scheduling to fit your busy lifestyle.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      color: 'from-[#1199B6] to-[#0e7a8f]',
      benefits: ['Industry-Recognized Certifications', 'Career Advancement Opportunities', 'Cultural Immersion', 'Flexible Learning Schedule'],
      subcategories: [
        {
          title: 'English to Spanish',
          description: 'Comprehensive English to Spanish translation and language training program designed for business professionals, students, and travelers. Master conversational Spanish, business terminology, and cultural nuances through interactive sessions with native speakers.',
          detailedDescription: 'Our English to Spanish program covers grammar fundamentals, vocabulary building, pronunciation practice, and real-world conversation scenarios. Learn business Spanish for professional settings, academic Spanish for educational purposes, or conversational Spanish for travel and daily communication.',
          features: ['Interactive Learning Sessions', 'Native Speaker Instructors', 'Real-world Practice Scenarios', 'Flexible Schedule Options', 'Business Spanish Modules', 'Cultural Context Training', 'Progress Tracking & Assessments'],
          outcomes: ['Achieve conversational fluency', 'Master business terminology', 'Understand cultural nuances', 'Prepare for certification exams']
        },
        {
          title: 'English to German',
          description: 'Master German language skills with structured English to German training program. Perfect for professionals working with German-speaking markets, students pursuing German studies, or individuals planning to relocate to German-speaking countries.',
          detailedDescription: 'Our German language program focuses on grammar mastery, vocabulary expansion, conversation skills, and cultural understanding. From beginner to advanced levels, our curriculum is designed to help you communicate effectively in professional, academic, and social contexts.',
          features: ['Grammar-Focused Curriculum', 'Conversation Practice Sessions', 'Cultural Context Integration', 'Certification Preparation', 'Business German Training', 'Pronunciation Coaching', 'Exam Readiness Support'],
          outcomes: ['Achieve proficiency levels', 'Pass certification exams', 'Communicate in professional settings', 'Understand German culture']
        }
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Elevate your brand\'s digital presence with our comprehensive digital marketing services. From search engine optimization to social media management, we help businesses reach their target audience, increase engagement, and drive measurable results through data-driven strategies.',
      longDescription: 'In today\'s digital landscape, effective marketing is crucial for business success. Our digital marketing services combine strategic planning, creative execution, and analytical insights to help you build a strong online presence, generate qualified leads, and maximize your return on investment across all digital channels.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'from-[#0C1A2B] to-[#1199B6]',
      benefits: ['Increased Brand Visibility', 'Higher Conversion Rates', 'Better ROI on Marketing Spend', 'Data-Driven Decision Making'],
      subcategories: [
        {
          title: 'SEO',
          description: 'Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO services. Our proven strategies help businesses appear at the top of search results, attracting qualified visitors and generating sustainable growth.',
          detailedDescription: 'Our SEO services include comprehensive website audits, keyword research and strategy, on-page and technical optimization, link building campaigns, and ongoing performance monitoring. We use the latest SEO best practices and tools to ensure your website ranks well for relevant search queries.',
          features: ['Comprehensive Keyword Research', 'On-Page & Technical Optimization', 'Strategic Link Building', 'Analytics & Performance Reporting', 'Local SEO Optimization', 'Content Optimization', 'Competitor Analysis'],
          outcomes: ['Higher search engine rankings', 'Increased organic traffic', 'Better user experience', 'Improved conversion rates']
        },
        {
          title: 'Social Media Marketing',
          description: 'Build your brand presence and engage with your audience on social media platforms. Our social media marketing services help you create compelling content, grow your following, and drive meaningful engagement that converts followers into customers.',
          detailedDescription: 'We manage your social media presence across all major platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok. Our team creates engaging content, manages community interactions, runs targeted ad campaigns, and provides detailed analytics to measure your social media ROI.',
          features: ['Multi-Platform Content Strategy', 'Community Management & Engagement', 'Performance Tracking & Analytics', 'Influencer Partnership Programs', 'Social Media Advertising', 'Content Calendar Management', 'Crisis Management Support'],
          outcomes: ['Increased brand awareness', 'Higher engagement rates', 'More qualified leads', 'Stronger customer relationships']
        },
        {
          title: 'Paid Ads',
          description: 'Maximize your return on investment with targeted advertising campaigns across Google, Facebook, Instagram, LinkedIn, and other platforms. Our paid advertising services help you reach the right audience at the right time with compelling ad creatives and optimized campaigns.',
          detailedDescription: 'Our paid advertising experts design, launch, and optimize campaigns that drive results. We handle everything from campaign strategy and ad creation to budget management, A/B testing, and conversion tracking. Our data-driven approach ensures your ad spend delivers maximum ROI.',
          features: ['Campaign Strategy & Setup', 'Creative Ad Design & Copywriting', 'Budget Optimization & Bidding', 'Conversion Tracking & Analytics', 'A/B Testing & Optimization', 'Multi-Channel Campaign Management', 'Retargeting Campaigns'],
          outcomes: ['Higher conversion rates', 'Lower cost per acquisition', 'Increased brand visibility', 'Better targeting precision']
        },
        {
          title: 'Content Strategy',
          description: 'Develop compelling content that resonates with your audience and drives conversions. Our content strategy services help you create a cohesive content plan that attracts, engages, and converts your target audience across all digital touchpoints.',
          detailedDescription: 'We develop comprehensive content strategies that align with your business goals and audience needs. Our services include content planning, SEO-optimized writing, visual content creation, content calendar development, and performance measurement to ensure your content delivers measurable results.',
          features: ['Strategic Content Planning', 'SEO-Optimized Writing', 'Visual Content Creation', 'Content Calendar Development', 'Blog & Article Writing', 'Video Content Strategy', 'Content Performance Analysis'],
          outcomes: ['Improved search rankings', 'Higher engagement rates', 'More qualified leads', 'Stronger brand authority']
        }
      ]
    },
    {
      title: 'Web Development',
      description: 'Transform your ideas into powerful, scalable web applications with our full-stack development services. From responsive frontend interfaces to robust backend systems, we deliver complete web solutions that drive business growth and provide exceptional user experiences.',
      longDescription: 'Our web development team specializes in creating modern, high-performance websites and web applications using cutting-edge technologies. We follow industry best practices for code quality, security, performance, and scalability to ensure your web presence stands out in today\'s competitive digital landscape.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-[#1199B6] to-[#0C1A2B]',
      benefits: ['Modern Technology Stack', 'Scalable Architecture', 'Mobile-Responsive Design', 'Fast Performance'],
      subcategories: [
        {
          title: 'Frontend Development',
          description: 'Create stunning, responsive user interfaces with modern frontend technologies. Our frontend development services focus on creating intuitive, fast, and visually appealing user experiences that engage visitors and drive conversions.',
          detailedDescription: 'We build frontend applications using React, Next.js, Vue.js, and other modern frameworks. Our development process includes UI/UX design implementation, responsive design for all devices, performance optimization, accessibility compliance, and cross-browser compatibility testing.',
          features: ['React/Next.js Development', 'Responsive & Mobile-First Design', 'UI/UX Optimization', 'Performance Tuning & Optimization', 'Progressive Web Apps (PWA)', 'Component Library Development', 'Cross-Browser Compatibility'],
          outcomes: ['Faster page load times', 'Better user experience', 'Higher conversion rates', 'Mobile-friendly design']
        },
        {
          title: 'Backend Development',
          description: 'Build robust server-side applications and APIs with scalable architecture. Our backend development services ensure your web applications have reliable, secure, and performant server infrastructure that can handle growth and scale with your business.',
          detailedDescription: 'We develop secure, scalable backend systems using Node.js, Python, Java, and other server-side technologies. Our services include RESTful API development, database design and optimization, server configuration, authentication systems, and cloud infrastructure setup.',
          features: ['RESTful API Development', 'Database Design & Optimization', 'Server Configuration & Deployment', 'Security Implementation & Best Practices', 'Microservices Architecture', 'Cloud Infrastructure Setup', 'Third-Party Integration'],
          outcomes: ['Secure and reliable systems', 'Scalable architecture', 'Fast API responses', 'Easy maintenance']
        },
        {
          title: 'Full-Stack Projects',
          description: 'End-to-end web development solutions from concept to deployment. Our full-stack development services provide complete web solutions, handling everything from initial planning and design to development, testing, and ongoing maintenance.',
          detailedDescription: 'We deliver complete full-stack web applications that integrate seamlessly from frontend to backend. Our comprehensive approach includes project planning, architecture design, frontend and backend development, database setup, testing, deployment, and post-launch support.',
          features: ['Complete End-to-End Solutions', 'Modern Technology Stack', 'Scalable Architecture Design', 'Deployment & DevOps Support', 'Quality Assurance & Testing', 'Documentation & Training', 'Ongoing Maintenance'],
          outcomes: ['Complete web solutions', 'Faster time to market', 'Reduced development costs', 'Ongoing support']
        },
        {
          title: 'Website Maintenance',
          description: 'Keep your website running smoothly with regular updates, security patches, and performance monitoring. Our website maintenance services ensure your site remains secure, fast, and up-to-date with the latest technologies and best practices.',
          detailedDescription: 'Regular maintenance is essential for website security, performance, and reliability. Our maintenance services include security updates, performance monitoring, backup management, content updates, bug fixes, and technical support to keep your website operating at peak performance.',
          features: ['Regular Security Updates', 'Performance Monitoring & Optimization', 'Automated Backup & Recovery', 'Content Updates & Management', 'Bug Fixes & Troubleshooting', 'SSL Certificate Management', 'Uptime Monitoring'],
          outcomes: ['Improved security', 'Better performance', 'Reduced downtime', 'Peace of mind']
        }
      ]
    },
    {
      title: 'IT Project Support',
      description: 'Get expert guidance and comprehensive support for your IT projects from planning to execution. Whether you\'re working on assignments, live projects, or building your portfolio, our experienced IT professionals provide the expertise and mentorship you need to succeed.',
      longDescription: 'Our IT project support services are designed to help students, professionals, and businesses overcome technical challenges and achieve their project goals. We provide hands-on assistance, code reviews, architecture guidance, and mentorship to ensure your projects meet industry standards and best practices.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-[#0e7a8f] to-[#0C1A2B]',
      benefits: ['Expert Technical Guidance', 'Faster Project Completion', 'Industry Best Practices', 'Career Development'],
      subcategories: [
        {
          title: 'Any IT Domain',
          description: 'Comprehensive support across all IT domains and technologies. Our team has expertise in cloud computing, cybersecurity, data science, web development, DevOps, networking, and more. No matter your technology stack or domain, we provide expert guidance.',
          detailedDescription: 'We offer support across a wide range of IT domains including cloud platforms (AWS, Azure, GCP), cybersecurity, data science and analytics, web and mobile development, DevOps and CI/CD, networking, database management, and emerging technologies. Our technology-agnostic approach ensures you get the right solution for your specific needs.',
          features: ['Multi-Domain Technical Expertise', 'Technology-Agnostic Solutions', 'Industry Best Practices Implementation', 'Compliance with Industry Standards', 'Architecture Design & Review', 'Technology Stack Recommendations', 'Cross-Platform Support'],
          outcomes: ['Expert guidance in any domain', 'Best practice implementation', 'Technology-agnostic solutions', 'Industry-standard results']
        },
        {
          title: 'Live Project Help',
          description: 'Real-time assistance for your ongoing IT projects and technical challenges. Get immediate help when you\'re stuck, need code reviews, or require expert consultation to move your project forward efficiently.',
          detailedDescription: 'Our live project support provides real-time assistance for active development projects. We help troubleshoot issues, review code, optimize performance, implement features, and provide guidance on architecture decisions. Available when you need it most, we ensure your project stays on track.',
          features: ['24/7 Expert Support Availability', 'Real-Time Consultation & Guidance', 'Problem Solving & Troubleshooting', 'Quick Turnaround Times', 'Code Review & Optimization', 'Architecture Guidance', 'Emergency Technical Support'],
          outcomes: ['Faster problem resolution', 'Reduced project delays', 'Better code quality', 'Improved project outcomes']
        },
        {
          title: 'Assignment & Deadline Support',
          description: 'Meet your deadlines with professional assignment help and guidance. Our team provides comprehensive support for academic assignments, coding projects, and technical documentation, ensuring timely delivery and high-quality results.',
          detailedDescription: 'We understand the pressure of deadlines and the importance of quality work. Our assignment support services include code development, documentation writing, testing, debugging, and quality assurance. We help you understand concepts while ensuring your assignments meet academic and professional standards.',
          features: ['Timely Delivery Guarantee', 'Quality Assurance & Testing', 'Comprehensive Code Review', 'Detailed Documentation', 'Concept Explanation & Learning', 'Plagiarism-Free Solutions', 'Revision Support'],
          outcomes: ['On-time submission', 'High-quality deliverables', 'Better understanding of concepts', 'Improved grades']
        },
        {
          title: 'Real-world Project Guidance',
          description: 'Learn from real-world projects and gain practical industry experience. Our mentorship program helps you build portfolio-worthy projects, understand industry practices, and develop the skills needed to advance your IT career.',
          detailedDescription: 'Our real-world project guidance connects you with industry professionals who mentor you through complete project lifecycles. Learn project planning, architecture design, development best practices, testing strategies, deployment processes, and portfolio presentation. Build projects that showcase your skills to potential employers.',
          features: ['Project Mentorship & Coaching', 'Industry Best Practices Training', 'Portfolio Building Support', 'Career Guidance & Advice', 'Project Architecture Design', 'Code Quality Standards', 'Deployment & DevOps Training'],
          outcomes: ['Portfolio-ready projects', 'Industry experience', 'Career advancement', 'Professional network']
        }
      ]
    }
  ];

  // Helper function to get icon for subcategory
  const getSubcategoryIcon = (categoryTitle, subcategoryTitle) => {
    if (categoryTitle === 'Language Training') {
      return (
        <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      );
    }
    
    if (categoryTitle === 'Digital Marketing') {
      if (subcategoryTitle === 'SEO') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Social Media Marketing') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Paid Ads') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Content Strategy') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      }
    }
    
    if (categoryTitle === 'Web Development') {
      if (subcategoryTitle === 'Frontend Development') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Backend Development') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Full-Stack Projects') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Website Maintenance') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      }
    }
    
    if (categoryTitle === 'IT Project Support') {
      if (subcategoryTitle === 'Any IT Domain') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Live Project Help') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Assignment & Deadline Support') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      }
      if (subcategoryTitle === 'Real-world Project Guidance') {
        return (
          <svg className="w-6 h-6 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      }
    }
    
    return null;
  };

  const filteredCategories = selectedCategory 
    ? servicesCategories.filter(cat => cat.title === selectedCategory)
    : servicesCategories;

  const filteredSubcategories = (category) => {
    if (selectedSubcategory) {
      return category.subcategories.filter(sub => sub.title === selectedSubcategory);
    }
    return category.subcategories;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0C1A2B] via-[#1199B6] to-[#0e7a8f] py-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-white tracking-wide uppercase">
                  Professional Services
                </span>
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              >
                Expert Services to
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-yellow-300 bg-clip-text text-transparent">
                  Accelerate Your Success
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                From language training to IT project support, we provide comprehensive, expert-led services 
                tailored to your needs. Get professional guidance, industry best practices, and achieve your goals faster 
                with our proven methodologies and experienced team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button
                  href="/enroll"
                  size="lg"
                  className="bg-[#0C1A2B] text-white hover:bg-[#0C1A2B]/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-bold"
                >
                  Get Started
                </Button>

                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Categories Section */}
        <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,153,182,0.03)_0%,transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#1199B6]/10 border border-[#1199B6]/20">
                <span className="w-2 h-2 bg-[#1199B6] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#1199B6] tracking-wide uppercase">
                  Professional Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Services for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1199B6] to-[#0C1A2B]">
                  Your Success
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of professional services designed to help you succeed. 
                Each service is backed by industry expertise, proven methodologies, and a commitment to delivering 
                measurable results that drive your growth.
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  id={`category-${category.title.replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Category Header */}
                  <div
                    className={`bg-gradient-to-r ${category.color} p-8 cursor-pointer hover:shadow-xl transition-all duration-300`}
                    onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-6 flex-1">
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-white mb-3">
                            {category.title}
                          </h3>
                          <p className="text-white/95 text-base leading-relaxed mb-4">
                            {category.description}
                          </p>
                          {category.longDescription && (
                            <p className="text-white/85 text-sm leading-relaxed mb-4">
                              {category.longDescription}
                            </p>
                          )}
                          {category.benefits && category.benefits.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {category.benefits.map((benefit, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm text-white text-xs font-medium border border-white/20"
                                >
                                  <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <button className="text-white hover:text-[#D4AF37] transition-colors flex-shrink-0 mt-2">
                        <svg
                          className={`w-7 h-7 transition-transform duration-300 ${expandedCategory === category.title ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Subcategories */}
                  {expandedCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-8 bg-gradient-to-br from-gray-50 to-white"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredSubcategories(category).map((subcategory, subIndex) => (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: subIndex * 0.1 }}
                            className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#1199B6] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                          >
                            {/* Decorative gradient overlay */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1199B6]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10">
                              <div className="flex items-start gap-4 mb-5">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1199B6]/10 to-[#1199B6]/5 group-hover:from-[#1199B6] group-hover:to-[#0e7a8f] flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md group-hover:shadow-lg">
                                  {getSubcategoryIcon(category.title, subcategory.title)}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1199B6] transition-colors">
                                    {subcategory.title}
                                  </h4>
                                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                    {subcategory.description}
                                  </p>
                                  {subcategory.detailedDescription && (
                                    <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                                      {subcategory.detailedDescription}
                                    </p>
                                  )}
                                </div>
                              </div>
                              
                              <div className="mb-5">
                                <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <svg className="w-4 h-4 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Key Features
                                </h5>
                                <ul className="space-y-2.5">
                                  {subcategory.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2.5 text-sm text-gray-700">
                                      <svg className="w-4 h-4 text-[#1199B6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span className="leading-relaxed">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {subcategory.outcomes && subcategory.outcomes.length > 0 && (
                                <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-[#1199B6]/5 to-[#0C1A2B]/5 border border-[#1199B6]/10">
                                  <h5 className="text-sm font-semibold text-[#0C1A2B] mb-2.5 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#1199B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    Expected Outcomes
                                  </h5>
                                  <ul className="space-y-1.5">
                                    {subcategory.outcomes.map((outcome, outcomeIndex) => (
                                      <li key={outcomeIndex} className="flex items-center gap-2 text-xs text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1199B6] flex-shrink-0"></span>
                                        <span>{outcome}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <Link
                                href={`/services?category=${encodeURIComponent(category.title)}&subcategory=${encodeURIComponent(subcategory.title)}`}
                                className="inline-flex items-center gap-2 text-[#1199B6] hover:text-[#0e7a8f] font-semibold text-sm group-hover:gap-3 transition-all mt-4"
                              >
                                Learn More
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#1199B6] via-[#0e7a8f] to-[#0C1A2B] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-white tracking-wide uppercase">
                  Get Started Today
                </span>
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-300">
                  Career or Business?
                </span>
              </h2>
              <p className="text-xl text-white/95 mb-4 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss how our comprehensive services can help you achieve your goals.
              </p>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                Our expert team is ready to provide personalized guidance and support tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/enroll"
                  size="lg"
                  className="bg-[#0C1A2B] text-white hover:bg-[#0C1A2B]/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-bold px-8 py-4"
                >
                  Enroll Now
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 font-semibold px-8 py-4 backdrop-blur-sm"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ServicesPageContent />
    </Suspense>
  );
}

