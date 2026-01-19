import Link from 'next/link';

export default function CourseCard({ 
  title, 
  description, 
  image, 
  icon, 
  mode = 'Online', 
  duration, 
  href = '/courses' 
}) {
  return (
    <Link href={href}>
      <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-[#1199B6]/40 overflow-hidden h-full">
        {/* Depth shadow layer */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(15,35,52,0.08)] group-hover:shadow-[0_12px_40px_rgba(43,117,255,0.15)] transition-all duration-300 pointer-events-none"></div>
        {/* Modern gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1199B6]/0 to-[#1199B6]/0 group-hover:from-[#1199B6]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none z-0"></div>
        <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4 relative z-10">
          {icon && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1199B6] to-[#0e7a8f] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1199B6]/30 group-hover:shadow-xl group-hover:shadow-[#1199B6]/40 group-hover:scale-110 transition-all duration-300">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                {icon}
              </div>
            </div>
          )}
          {image && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#d7f9ff] to-[#b8f0ff] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-xl sm:text-2xl">{image}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-[#0C1A2B] mb-2 group-hover:text-[#1199B6] transition-colors relative z-10 leading-tight">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed relative z-10">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-gray-500 relative z-10 pt-3 sm:pt-4 border-t border-gray-100">
          <span className="flex items-center space-x-1.5">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1199B6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{mode}</span>
          </span>
          {duration && (
            <span className="flex items-center space-x-1.5">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1199B6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{duration}</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

