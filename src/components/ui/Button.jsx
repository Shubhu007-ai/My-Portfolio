import React from 'react';
import { Link } from 'react-router-dom';

export function Button({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon, 
  onClick,
  ...props 
}) {
  const baseStyles = "group inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";
  
  const variants = {
    primary: "bg-[#4F46E5] hover:bg-[#3730A3] text-white shadow-sm hover:shadow-md border border-transparent hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-white hover:bg-[#EEF2FF] text-[#171717] border border-[#E4E1D9] hover:border-[#4F46E5] hover:text-[#4F46E5] shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0",
    outline: "bg-transparent hover:bg-white text-[#171717] hover:text-[#4F46E5] border border-[#E4E1D9] hover:border-[#4F46E5] hover:-translate-y-0.5 active:translate-y-0",
    ghost: "bg-transparent text-[#666666] hover:text-[#171717] hover:bg-[#EFEDE7]"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isMailto = href.startsWith('mailto:');
    return (
      <a
        href={href}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

