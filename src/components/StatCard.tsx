import React, { useEffect, useRef, useState } from 'react';
import { StatItem } from '../config/siteConfig';

export const StatCard: React.FC<{ stat: StatItem; dark?: boolean }> = ({
  stat,
  dark = false,
}) => {
  const [displayValue, setDisplayValue] = useState(stat.value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || hasAnimated) return;

    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimated(true);
          const duration = 700;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(eased * stat.value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl p-6 border transition-colors ${
        dark
          ? 'bg-white/5 border-white/15 text-white'
          : 'bg-white border-slate-200 text-[#172033]'
      }`}
    >
      <div
        className={`font-display text-3xl sm:text-4xl font-extrabold tabular-nums tracking-tight ${
          dark ? 'text-[#F2BA49]' : 'text-[#001952]'
        }`}
      >
        {displayValue}
        {stat.suffix}
      </div>
      <div
        className={`text-xs font-bold tracking-[0.14em] uppercase mt-2 ${
          dark ? 'text-white' : 'text-[#002D7A]'
        }`}
      >
        {stat.label}
      </div>
      <p className={`text-xs mt-1.5 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
        {stat.detail}
      </p>
    </div>
  );
};
