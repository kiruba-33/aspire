import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface AspireLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

/**
 * Official Aspire Visa Experts visual mark & lockup.
 * Employs the deep navy (#001952), royal blue (#002D7A), and metallic gold (#F2BA49 -> #F8D77A)
 * upward ascending wing/aircraft form paired with refined serif typography.
 * If siteConfig.logo.customImageSrc is set, renders that image directly without altering proportions.
 */
export const AspireLogo: React.FC<AspireLogoProps> = ({
  variant = 'light',
  compact = false,
}) => {
  if (siteConfig.logo.customImageSrc) {
    return (
      <img
        src={siteConfig.logo.customImageSrc}
        alt={siteConfig.logo.alt}
        referrerPolicy="no-referrer"
        className={`${compact ? 'h-9' : 'h-11'} w-auto object-contain shrink-0`}
      />
    );
  }

  const primaryText = variant === 'dark' ? '#FFFFFF' : '#001952';
  const secondaryText = variant === 'dark' ? '#F8D77A' : '#002D7A';
  const wingBlue = variant === 'dark' ? '#0A4FB3' : '#002D7A';
  const wingNavy = variant === 'dark' ? '#1E64CC' : '#001952';

  return (
    <span className="inline-flex items-center gap-2.5 shrink-0 select-none">
      {/* Upward Dynamic Emblem */}
      <svg
        viewBox="0 0 48 48"
        className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} shrink-0`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`aspireGold-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D99B26" />
            <stop offset="55%" stopColor="#F2BA49" />
            <stop offset="100%" stopColor="#F8D77A" />
          </linearGradient>
          <linearGradient id={`aspireBlue-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={wingNavy} />
            <stop offset="100%" stopColor={wingBlue} />
          </linearGradient>
        </defs>
        {/* Ascending Royal Wing */}
        <path
          d="M8 36 C16 26, 25 18, 39 9 L31 28 C25 30, 17 33, 8 36 Z"
          fill={`url(#aspireBlue-${variant})`}
        />
        {/* Dynamic Gold Flight Trajectory Arc */}
        <path
          d="M5 31 C15 30, 26 24, 42 10 C32 23, 21 32, 7 35 Z"
          fill={`url(#aspireGold-${variant})`}
        />
        {/* Destination Apex Marker */}
        <circle cx="40.5" cy="9.5" r="2.2" fill="#F2BA49" />
      </svg>

      {/* Refined Serif Typography Lockup */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif-brand font-bold tracking-[0.06em] ${
            compact ? 'text-[17px]' : 'text-[20px]'
          }`}
          style={{ color: primaryText }}
        >
          ASPIRE
        </span>
        <span
          className="text-[9px] font-semibold tracking-[0.22em] uppercase mt-0.5 whitespace-nowrap"
          style={{ color: secondaryText }}
        >
          VISA EXPERTS
        </span>
      </span>
    </span>
  );
};
