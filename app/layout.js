import './globals.css'
import { DM_Sans, Poppins, Inter, Roboto } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://insuretechskills.com'),
  title: {
    default: 'InsureTech Skills - Professional IT Training & Certification Courses',
    template: '%s | InsureTech Skills'
  },
  description: 'Transform your IT career with comprehensive training courses. Learn AWS, Azure, DevOps, Cybersecurity, Data Science and more from industry experts. 98% placement rate, 20k+ students trained.',
  keywords: ['IT training', 'cloud computing', 'AWS certification', 'Azure training', 'DevOps courses', 'cybersecurity training', 'data science courses', 'IT certification', 'professional IT training', 'career advancement', 'insureTech skills'],
  authors: [{ name: 'InsureTech Skills' }],
  creator: 'InsureTech Skills',
  publisher: 'InsureTech Skills',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://insuretechskills.com',
    siteName: 'InsureTech Skills',
    title: 'InsureTech Skills - Professional IT Training & Certification Courses',
    description: 'Transform your IT career with comprehensive training courses. Learn AWS, Azure, DevOps, Cybersecurity, Data Science and more from industry experts.',
    images: [
      {
        url: '/images/logo (2).png',
        width: 1200,
        height: 630,
        alt: 'InsureTech Skills - IT Training & Certification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsureTech Skills - Professional IT Training & Certification Courses',
    description: 'Transform your IT career with comprehensive training courses. Learn AWS, Azure, DevOps, Cybersecurity, Data Science and more.',
    images: ['/images/logo (2).png'],
    creator: '@insuretechskills',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://insuretechskills.com',
  },
  category: 'Education',
}

export default function RootLayout({ children }) {
  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'InsureTech Skills',
    url: 'https://insuretechskills.com',
    logo: 'https://insuretechskills.com/images/logo (2).png',
    description: 'Professional IT training and certification courses provider. Transform your IT career with comprehensive training in AWS, Azure, DevOps, Cybersecurity, Data Science and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '444, IT Park, Sahastradhara Road',
      addressLocality: 'Dehradun',
      addressRegion: 'Uttarakhand',
      postalCode: '248001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7982291373',
      contactType: 'Customer Service',
      email: 'support@insuretechskills.com',
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://www.facebook.com/insuretechskills',
      // 'https://www.instagram.com/insuretechskills',
      // 'https://www.linkedin.com/company/insuretechskills',
      // 'https://www.youtube.com/@insuretechskills',
    ],
  };

  // Structured Data for Course Catalog
  const courseCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'IT Training & Certification Courses',
    description: 'Comprehensive IT training courses including AWS, Azure, DevOps, Cybersecurity, Data Science, and more.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'InsureTech Skills',
      sameAs: 'https://insuretechskills.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
    },
  };

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${poppins.variable} ${inter.variable} ${roboto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseCatalogSchema) }}
        />
        {children}
      </body>
    </html>
  )
}

