'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopularCoursesSection from '@/components/PopularCoursesSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Button from '@/components/Button';
import CourseCard from '@/components/CourseCard';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get('category') || null;
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

  const categories = [
    {
      title: 'Cloud Computing',
      icon: '/images/categoryIcons/computer.png',
      description: 'Master the fundamentals and advanced concepts of cloud computing, enabling you to deploy, manage, and secure hands-on experience with industry leading cloud platforms.',
      courses: '12+ Courses',
      color: 'from-[#1199B6] to-[#0e7a8f]'
    },
    {
      title: 'IT Security',
      icon: '/images/categoryIcons/encrypted.png',
      description: 'Master the art of safeguarding digital assets with our comprehensive IT Security course. Equip yourself with the latest techniques to defend against cyber threats.',
      courses: '11+ Courses',
      color: 'from-[#0C1A2B] to-[#1199B6]'
    },
    {
      title: 'Data Science',
      icon: '/images/categoryIcons/data-science.png',
      description: 'Dive into the world of Data Science and uncover hidden insights from data. Learn to analyze, visualize, and leverage data to drive strategic decisions.',
      courses: '4+ Courses',
      color: 'from-[#1199B6] to-[#0C1A2B]'
    },
    {
      title: 'Project Management',
      icon: '/images/categoryIcons/mangement.png',
      description: 'Transform your leadership skills with our Project Management course. Learn to plan, execute, and deliver projects on time and within budget.',
      courses: '5+ Courses',
      color: 'from-[#0e7a8f] to-[#0C1A2B]'
    },
    {
      title: 'Software Testing',
      icon: '/images/categoryIcons/test.png',
      description: 'Ensure software excellence with our Software Testing course. Master techniques to identify bugs and improve the quality of your applications.',
      courses: '2+ Courses',
      color: 'from-[#1199B6] to-[#0e7a8f]'
    },
    {
      title: 'Web Development',
      icon: '/images/categoryIcons/code.png',
      description: 'Unleash your creativity with our Web Development course. Gain the skills to build dynamic and responsive websites from scratch.',
      courses: '4+ Courses',
      color: 'from-[#0C1A2B] to-[#1199B6]'
    },
    {
      title: 'Salesforce',
      icon: '/HeroSectionIcon/salesforce.png',
      description: 'Unlock the full potential of CRM with our Salesforce course. Learn to manage customer relationships and drive business growth efficiently.',
      courses: '3+ Courses',
      color: 'from-[#1199B6] to-[#0e7a8f]'
    },
    {
      title: 'Networking',
      icon: '/images/categoryIcons/computer.png',
      description: 'A networking course covers the principles of computer networks, including protocols, architecture, and security, to build, maintain, and troubleshoot network systems.',
      courses: '2+ Courses',
      color: 'from-[#0C1A2B] to-[#0e7a8f]'
    },
  ];

  // Complete course data organized by category
  const coursesByCategory = {
    'Cloud Computing': [
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
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'AWS SysOps Administrator Training',
        description: 'Learn to manage and operate AWS systems',
        mode: 'Online',
        duration: '30 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Microsoft Azure Fundamentals Course (AZ-900)',
        description: 'Learn the fundamentals of Microsoft Azure',
        mode: 'Online',
        duration: '15 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Microsoft Azure Administrator Training',
        description: 'Become a certified Azure Administrator',
        mode: 'Online',
        duration: '35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Microsoft Azure SQL Solution Training',
        description: 'Master Azure SQL database solutions',
        mode: 'Online',
        duration: '25 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'MS Azure Infrastructure Solution Training',
        description: 'Design and implement Azure infrastructure solutions',
        mode: 'Online',
        duration: '30 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Terraform Associate Training',
        description: 'Learn infrastructure as code with Terraform',
        mode: 'Online',
        duration: '20 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Azure DevOps Engineer Training',
        description: 'Learn CI/CD pipelines and Azure DevOps best practices',
        mode: 'Online',
        duration: '30-35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Kubernetes Administrator (CKA) Training',
        description: 'Master Kubernetes container orchestration',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Google Professional Cloud Architect Training',
        description: 'Become a certified GCP Cloud Architect',
        mode: 'Online',
        duration: '35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
    ],
    'IT Security': [
      {
        title: 'Microsoft Azure Security Engineer Training',
        description: 'Secure Azure cloud environments',
        mode: 'Online',
        duration: '35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'Certified Ethical Hacker (CEH) Training',
        description: 'Learn ethical hacking and penetration testing',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'Certified Cloud Security Professional Training',
        description: 'Master cloud security best practices',
        mode: 'Online',
        duration: '45 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'AWS Security Specialty Training',
        description: 'Specialize in AWS security solutions',
        mode: 'Online',
        duration: '30 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'CompTIA Cloud+ Training',
        description: 'Comprehensive cloud security certification',
        mode: 'Online',
        duration: '25 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'CompTIA Security+ Training',
        description: 'Foundation of cybersecurity knowledge',
        mode: 'Online',
        duration: '30 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'SOC Analyst Training',
        description: 'Security Operations Center analyst skills',
        mode: 'Online',
        duration: '35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'GRC Training',
        description: 'Governance, Risk, and Compliance training',
        mode: 'Online',
        duration: '25 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'Cybersecurity Analyst Training',
        description: 'Protect organizations from cyber threats',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
      {
        title: 'Certified Information Systems Security Professional Training (CISSP)',
        description: 'Advanced cybersecurity certification',
        mode: 'Online',
        duration: '50 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
      },
    ],
    'Data Science': [
      {
        title: 'Microsoft Azure Data Fundamental Training',
        description: 'Learn Azure data fundamentals',
        mode: 'Online',
        duration: '20 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
        ),
      },
      {
        title: 'Microsoft Azure Power BI Training',
        description: 'Transform data into insights with Power BI',
        mode: 'Online',
        duration: '20 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
        ),
      },
      {
        title: 'Microsoft Azure Data Scientist Training',
        description: 'Become a certified Azure Data Scientist',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
        ),
      },
      {
        title: 'Tableau Certified Data Analyst Training',
        description: 'Master data visualization with Tableau',
        mode: 'Online',
        duration: '25 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
        ),
      },
    ],
    'Project Management': [
      {
        title: 'PMP Training',
        description: 'Project Management Professional certification',
        mode: 'Online',
        duration: '35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11.24V7.5a2.5 2.5 0 015 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
          </svg>
        ),
      },
      {
        title: 'Jira Training',
        description: 'Master project management with Jira',
        mode: 'Online',
        duration: '15 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11.24V7.5a2.5 2.5 0 015 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
          </svg>
        ),
      },
      {
        title: 'Leading SAFe® 6.0 Agilist Certification Training',
        description: 'Scaled Agile Framework certification',
        mode: 'Online',
        duration: '16 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11.24V7.5a2.5 2.5 0 015 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
          </svg>
        ),
      },
      {
        title: 'PRINCE2® Foundation and Practitioner Training',
        description: 'PRINCE2 project management methodology',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11.24V7.5a2.5 2.5 0 015 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
          </svg>
        ),
      },
      {
        title: 'Certified Scrum Master (CSM) Training',
        description: 'Agile Scrum Master certification',
        mode: 'Online',
        duration: '16 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11.24V7.5a2.5 2.5 0 015 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
          </svg>
        ),
      },
    ],
    'Software Testing': [
      {
        title: 'Selenium (Java) Training',
        description: 'Master automated testing with Selenium',
        mode: 'Online',
        duration: '30 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        ),
      },
      {
        title: 'Manual Testing Training',
        description: 'Learn comprehensive manual testing techniques',
        mode: 'Online',
        duration: '25 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        ),
      },
    ],
    'Web Development': [
      {
        title: 'React Js Training',
        description: 'Build modern web applications with React',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Python Training',
        description: 'Master Python programming from basics to advanced',
        mode: 'Online',
        duration: '50 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Java Training',
        description: 'Comprehensive Java development training',
        mode: 'Online',
        duration: '60 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Angular Training',
        description: 'Build scalable applications with Angular',
        mode: 'Online',
        duration: '45 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
    ],
    'Salesforce': [
      {
        title: 'Salesforce Administrator Training',
        description: 'Become a certified Salesforce Administrator',
        mode: 'Online',
        duration: '30 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Salesforce Platform App Builder Training',
        description: 'Build custom applications on Salesforce platform',
        mode: 'Online',
        duration: '35 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'Salesforce Developer Training',
        description: 'Advanced Salesforce development skills',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
    ],
    'Networking': [
      {
        title: 'CompTIA Network+ Training',
        description: 'Comprehensive network infrastructure training',
        mode: 'Online',
        duration: '40 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'CISCO CCNA Training',
        description: 'Cisco Certified Network Associate certification',
        mode: 'Online',
        duration: '50 Hours',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
    ],
  };

  // Filter categories if selected
  const displayCategories = selectedCategory
    ? categories.filter(cat => cat.title === selectedCategory)
    : categories;

  // CourseCarousel Component for mobile responsiveness
  function CourseCarousel({ courses }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);
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

    const totalSlides = Math.max(1, Math.ceil(courses.length / itemsPerView));
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
      return courses.slice(start, end);
    };

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Navigation Arrows - Only show on mobile/tablet when needed */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] hover:shadow-2xl hover:shadow-[#1199B6]/50 group"
              aria-label="Previous courses"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[#1199B6] group-hover:text-white transition-colors"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#1199B6] hover:border-[#1199B6] hover:shadow-2xl hover:shadow-[#1199B6]/50 group"
              aria-label="Next courses"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[#1199B6] group-hover:text-white transition-colors"
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
          className="relative overflow-visible mx-8 md:mx-0 py-2"
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getVisibleCourses().map((course, courseIndex) => {
                const globalIndex = currentIndex * itemsPerView + courseIndex;
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: courseIndex * 0.05 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Indicators */}
        {totalSlides > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#1199B6] rounded-full shadow-lg shadow-[#1199B6]/50'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0C1A2B] via-[#0C1A2B] to-[#0a1625] overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#1199B6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1199B6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1199B6]/5 rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1199B6_1px,transparent_1px),linear-gradient(to_bottom,#1199B6_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
              >
                <span className="w-2 h-2 bg-[#1199B6] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">Explore Our Wide Range of Courses</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  Discover a Variety of
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block bg-gradient-to-r from-[#1199B6] to-[#1199B6] bg-clip-text text-transparent"
                >
                  Professional Courses
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
              >
                Discover a variety of courses across different fields designed to help you learn new skills, expand your knowledge, and achieve your career goals. Whether you&apos;re looking to dive deep into programming, master business strategies, explore creative arts, or hone your technical expertise, we have something for everyone.
              </motion.p>

              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
                >
                  <span className="text-white font-semibold">Filtered by: {selectedCategory}</span>
                  <Link
                    href="/courses"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Clear filter"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Link>
                </motion.div>
              )}

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
              >
                {[
                  { value: '50+', label: 'Courses' },
                  { value: '98%', label: 'Success Rate' },
                  { value: '20k+', label: 'Students' },
                  { value: '95%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#1199B6] mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Sections with Courses */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#d7f9ff]">
          <div className="max-w-7xl mx-auto">
            {displayCategories.map((category, categoryIndex) => {
              const categoryCourses = coursesByCategory[category.title] || [];
              const isExpanded = expandedCategory === category.title;

              return (
                <motion.div
                  key={category.title}
                  id={`category-${category.title.replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-16 last:mb-0"
                >
                  {/* Category Header */}
                  <div
                    className="relative overflow-hidden rounded-2xl mb-8 cursor-pointer group"
                    onClick={() => setExpandedCategory(isExpanded ? null : category.title)}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

                    <div className="relative z-10 p-8 md:p-12">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <Image
                                src={category.icon}
                                alt={category.title}
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain filter brightness-0 invert"
                              />
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                              {category.title}
                            </h2>
                          </div>
                          <p className="text-white/90 text-lg md:text-xl mb-4 max-w-3xl leading-relaxed">
                            {category.description}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
                              {category.courses}
                            </span>
                            <button className="flex items-center gap-2 text-white font-semibold hover:underline">
                              <span>{isExpanded ? 'Hide Courses' : 'View All Courses'}</span>
                              <svg
                                className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Courses Carousel/Grid */}
                  {isExpanded && (
                    <CourseCarousel courses={categoryCourses} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F0F7FF] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1199B6]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1199B6]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1199B6]/3 rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1199B6_1px,transparent_1px),linear-gradient(to_bottom,#1199B6_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#1199B6]/10 to-[#1199B6]/10 border border-[#1199B6]/20 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 bg-[#1199B6] rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-[#1199B6] tracking-wide uppercase">
                    CAREER-READY LEARNING
                  </span>
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                >
                  Learn skills that actually
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-[#1199B6] to-[#0C1A2B] bg-clip-text text-transparent">
                    move your career forward.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed"
                >
                  Practical courses designed with industry mentors.
                  No fluff. No outdated theory. Just real-world skills you can use.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    href="/enroll"
                    size="lg"
                    className="bg-gradient-to-r from-[#1199B6] to-[#0e7a8f] text-white hover:from-[#0e7a8f] hover:to-[#0a5d6f] transition-all duration-300 shadow-lg shadow-[#1199B6]/25 hover:shadow-xl hover:shadow-[#1199B6]/30 hover:scale-105"
                  >
                    Get Started
                  </Button>

                  <Button
                    href="/courses"
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-800 hover:border-[#1199B6] hover:text-[#1199B6] hover:bg-[#1199B6]/5 transition-all duration-300 hover:scale-105"
                  >
                    View Courses
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Visual / Proof */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                {/* Decorative Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1199B6] to-[#1199B6] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-xl shadow-[#1199B6]/10 hover:shadow-2xl hover:shadow-[#1199B6]/15 transition-all duration-300">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1199B6] to-[#0e7a8f] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1199B6]/25">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Students trained</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-[#1199B6] to-[#0C1A2B] bg-clip-text text-transparent">25,000+</p>
                      </div>
                    </motion.div>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-400/25">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Average rating</p>
                        <p className="text-3xl font-bold text-gray-900">4.8 <span className="text-amber-400">★</span></p>
                      </div>
                    </motion.div>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-sm text-gray-600 leading-relaxed pl-16"
                    >
                      Trusted by learners transitioning into tech, upskilling professionals,
                      and fresh graduates building strong foundations.
                    </motion.p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <CoursesPageContent />
    </Suspense>
  );
}
