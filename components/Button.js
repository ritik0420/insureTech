import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) {
  const baseStyles = 'font-roboto font-semibold rounded-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center relative';
  
  const variants = {
    primary: 'bg-[#1199B6] text-white hover:bg-[#0C1A2B] hover:shadow-lg',
    secondary: 'bg-white text-[#1199B6] border-2 border-[#d7f9ff] hover:border-[#1199B6] hover:bg-[#1199B6] hover:text-white',
    purple: 'bg-[#0C1A2B] text-white hover:shadow-lg hover:bg-[#0C1A2B]/90',
    outline: 'bg-transparent text-[#1199B6] border-2 border-[#1199B6] hover:bg-[#1199B6] hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

