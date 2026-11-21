import React, { useState } from 'react';
import { useAppContext } from '../context/RouterContext';
import { CTAButton } from './CTAButton';
import { HeroDestinationVisual } from './VisualArtwork';
import { JourneySelector } from './JourneySelector';

export const Hero: React.FC = () => {
  const { navigate, openConsultationModal } = useAppContext();
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');
  const [selectedPurpose, setSelectedPurpose] = useState('Study');

  return (
    <section className="relative overflow-hidden bg-[#001952] text-white">
      {/* Subtle gold curved route line connecting left headline zone toward destination visual */}
      <svg
        viewBox="0 0 1440 760"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="aspireHeroAura" cx="20%" cy="25%" r="60%">
            <stop offset="0%" stopColor="#0A4FB3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#001952" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="760" fill="url(#aspireHeroAura)" />
        <path
          d="M 80 540 C 380 430, 560 320, 860 220"
          fill="none"
          stroke="#F2BA49"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          opacity="0.7"
        />
        <circle cx="80" cy="540" r="4" fill="#F2BA49" opacity="0.85" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-14 lg:pb-16">
        {/* Asymmetric Split: Headline + Live-Reactive Destination Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block border border-[#F2BA49]/40 bg-[#07132F]/75 rounded-lg px-3.5 py-1.5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F8D77A]">
                Overseas &amp; Immigration Visa Consultancy · Sri Lanka
              </p>
            </div>

            <h1 className="font-display text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold tracking-tight leading-[1.06] text-white">
              Your Journey Abroad Starts With the Right Guidance.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              From study and travel to work and immigration, Aspire Visa Experts helps you navigate
              your international journey with clarity and confidence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <CTAButton
                variant="gold"
                size="lg"
                showArrow
                onClick={() => navigate('/#whats-your-journey')}
              >
                Start Your Journey
              </CTAButton>
              <button
                type="button"
                onClick={() =>
                  openConsultationModal({
                    destination: selectedCountry,
                    source: 'Hero Secondary CTA',
                  })
                }
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BA49]"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroDestinationVisual
              selectedCountry={selectedCountry}
              selectedPurpose={selectedPurpose}
            />
          </div>
        </div>

        {/* Integrated Live Journey Planner */}
        <div className="mt-10 lg:mt-12 relative z-20">
          <JourneySelector
            destination={selectedCountry}
            purpose={selectedPurpose}
            onDestinationChange={setSelectedCountry}
            onPurposeChange={setSelectedPurpose}
          />
        </div>
      </div>
    </section>
  );
};
