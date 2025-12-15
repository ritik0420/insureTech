import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ title, icon, description, href = '/courses' }) {
  return (
    <Link href={href}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
        {/* Image Section - Dark blue with pattern */}
        <div className="relative h-48 bg-gradient-to-br from-[#0E1C36] to-[#1a2f5a] overflow-hidden">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80 L50 80 L50 140 L20 140 Z" fill="#AFCBFF" opacity="0.3"/>
              <path d="M60 60 L90 60 L90 140 L60 140 Z" fill="#AFCBFF" opacity="0.3"/>
              <path d="M100 70 L130 70 L130 140 L100 140 Z" fill="#AFCBFF" opacity="0.3"/>
              <path d="M140 50 L170 50 L170 140 L140 140 Z" fill="#AFCBFF" opacity="0.3"/>
              <line x1="20" y1="80" x2="170" y2="80" stroke="#AFCBFF" strokeWidth="1" opacity="0.4"/>
              <line x1="20" y1="140" x2="170" y2="140" stroke="#AFCBFF" strokeWidth="1" opacity="0.4"/>
            </svg>
          </div>
          {/* Icon in center */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {typeof icon === 'string' ? (
              <Image
                src={icon}
                alt={title}
                width={64}
                height={64}
                className="w-16 h-16 object-contain opacity-80"
              />
            ) : (
              <div className="text-4xl opacity-80">
                {icon}
              </div>
            )}
          </div>
          {/* Logo badge in bottom left */}
          <div className="absolute bottom-3 left-3 w-7 h-7 bg-[#AFCBFF] rounded flex items-center justify-center shadow-lg">
            <span className="text-[#0E1C36] font-bold text-xs">U</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-base font-bold text-[#0E1C36] mb-2 group-hover:text-[#2B75FF] transition-colors line-clamp-2">
            {title}
          </h3>
          
          {/* Description */}
          {description && (
            <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Badge and Rating - Same line */}
          <div className="flex items-center justify-between mb-3">
            {/* NANODEGREE PROGRAM Badge */}
            <div className="flex items-center gap-1 bg-transparent">
              <svg className="w-3 h-3 text-[#2B75FF]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              <span className="text-[10px] font-semibold text-[#2B75FF] uppercase tracking-wide">NANODEGREE PROGRAM</span>
            </div>
            
            {/* Rating - Gold accent */}
            <div className="flex items-center gap-0.5">
              <svg className="w-3.5 h-3.5 text-[#D4AF37] fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span className="text-xs font-bold text-[#D4AF37]">4.6</span>
            </div>
          </div>
          
          {/* Footer - Difficulty and Duration */}
          <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-[10px]">
            {/* Difficulty */}
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="font-medium">Intermediate</span>
            </div>
            
            {/* Duration */}
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">62 hours</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

