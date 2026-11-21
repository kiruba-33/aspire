import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BA49] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed';

  const variants: Record<NonNullable<CTAButtonProps['variant']>, string> = {
    primary: 'bg-[#001952] text-white hover:bg-[#002D7A] shadow-xs',
    gold: 'bg-[#F2BA49] text-[#001952] hover:bg-[#F8D77A] shadow-xs font-bold',
    secondary: 'bg-[#002D7A] text-white hover:bg-[#0A4FB3] shadow-xs',
    outline:
      'bg-white text-[#001952] border border-slate-300 hover:border-[#001952] hover:bg-[#F6F8FC]',
    ghost: 'bg-transparent text-[#002D7A] hover:bg-[#F6F8FC]',
  };

  const sizes: Record<NonNullable<CTAButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-sm sm:text-base',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
};
