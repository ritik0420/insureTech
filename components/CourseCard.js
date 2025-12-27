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
      <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-[#2B75FF]/40 overflow-hidden">
        {/* Depth shadow layer */}
        <div className="absolute inset-0 rounded-3xl shadow-[0_8px_30px_rgba(15,35,52,0.08)] group-hover:shadow-[0_12px_40px_rgba(43,117,255,0.15)] transition-all duration-300 pointer-events-none"></div>
        {/* Modern gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B75FF]/0 to-[#2B75FF]/0 group-hover:from-[#2B75FF]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none z-0"></div>
        <div className="flex items-start space-x-4 mb-4 relative z-10">
          {icon && (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B75FF] to-[#1e5acc] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#2B75FF]/30 group-hover:shadow-xl group-hover:shadow-[#2B75FF]/40 group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
          )}
          {image && (
            <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#d7f9ff] to-[#b8f0ff] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl">{image}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-[#0E1C36] mb-2 group-hover:text-[#2B75FF] transition-colors relative z-10">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed relative z-10">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 relative z-10 pt-4 border-t border-gray-100">
          <span className="flex items-center space-x-1.5">
            <svg className="w-4 h-4 text-[#2B75FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{mode}</span>
          </span>
          {duration && (
            <span className="flex items-center space-x-1.5">
              <svg className="w-4 h-4 text-[#2B75FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

