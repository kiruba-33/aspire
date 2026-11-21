import React, { useState } from 'react';
import { Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/RouterContext';
import { CTAButton } from './CTAButton';

const countries = [
  'United Kingdom',
  'Australia',
  'Canada',
  'USA',
  'New Zealand',
  'Germany',
  'Ireland',
  'UAE',
  'Europe',
  'Singapore',
  'Malaysia',
  'Other',
];

const purposes = ['Study', 'Travel', 'Work', 'Business', 'Family', 'Immigration'];

const countryToSlug: Record<string, string> = {
  'United Kingdom': '/destinations/uk',
  Australia: '/destinations/australia',
  Canada: '/destinations/canada',
  USA: '/destinations/usa',
  'New Zealand': '/destinations/new-zealand',
  Germany: '/destinations/germany',
  Ireland: '/destinations/ireland',
  UAE: '/destinations/uae',
  Europe: '/destinations/schengen',
  Singapore: '/destinations/singapore',
  Malaysia: '/destinations/malaysia',
};

const purposeToSlug: Record<string, string> = {
  Study: '/visa-services/student-visa',
  Travel: '/visa-services/tourist-visa',
  Work: '/visa-services/work-visa',
  Business: '/visa-services/business-visa',
  Family: '/visa-services/family-visa',
  Immigration: '/visa-services/immigration',
};

interface JourneySelectorProps {
  destination: string;
  purpose: string;
  onDestinationChange: (value: string) => void;
  onPurposeChange: (value: string) => void;
}

export const JourneySelector: React.FC<JourneySelectorProps> = ({
  destination,
  purpose,
  onDestinationChange,
  onPurposeChange,
}) => {
  const { navigate, openConsultationModal } = useAppContext();
  const [explored, setExplored] = useState(false);

  const handleExplore = (e: React.FormEvent) => {
    e.preventDefault();
    setExplored(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 sm:p-6 lg:p-7 text-[#172033]">
      <form onSubmit={handleExplore} className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
        {/* Step 1: Destination */}
        <div className="lg:col-span-4">
          <label
            htmlFor="journey-country"
            className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#002D7A] mb-2"
          >
            <Compass className="w-3.5 h-3.5 text-[#F2BA49]" aria-hidden="true" />
            <span>Where Do You Want To Go?</span>
          </label>
          <select
            id="journey-country"
            value={destination}
            onChange={(e) => {
              onDestinationChange(e.target.value);
              setExplored(false);
            }}
            className="w-full px-4 py-3 text-sm font-semibold text-[#001952] rounded-xl border border-slate-300 bg-[#F6F8FC] focus:outline-none focus:ring-2 focus:ring-[#F2BA49]"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Step 2: Purpose */}
        <div className="lg:col-span-5">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#002D7A] mb-2">
            What Is Your Purpose?
          </p>
          <div className="flex flex-wrap gap-1.5">
            {purposes.map((p) => {
              const active = purpose === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    onPurposeChange(p);
                    setExplored(false);
                  }}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#001952] text-[#F8D77A] border-[#001952]'
                      : 'bg-[#F6F8FC] text-[#172033] border-slate-200 hover:border-[#002D7A]'
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="lg:col-span-3">
          <CTAButton type="submit" variant="gold" size="lg" className="w-full" showArrow>
            Explore My Options
          </CTAButton>
        </div>
      </form>

      {/* Tailored Pathway Preview */}
      {explored && (
        <div className="mt-5 pt-5 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F6F8FC] rounded-xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0A4FB3] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-[#001952]">
                Selected Route: {purpose} Visa · {destination}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Review destination-specific requirements or book an advisory session in Colombo or
                online.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {countryToSlug[destination] && (
              <button
                type="button"
                onClick={() => navigate(countryToSlug[destination])}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-[#001952] hover:border-[#001952] cursor-pointer whitespace-nowrap"
              >
                <span>{destination} Guide</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={() => navigate(purposeToSlug[purpose] || '/visa-services')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-[#001952] hover:border-[#001952] cursor-pointer whitespace-nowrap"
            >
              <span>{purpose} Pathway</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <CTAButton
              variant="primary"
              size="sm"
              onClick={() =>
                openConsultationModal({
                  visaCategory:
                    purpose === 'Study'
                      ? 'Student Visa'
                      : purpose === 'Travel'
                        ? 'Tourist Visa'
                        : purpose === 'Immigration'
                          ? 'Immigration / PR Consultancy'
                          : `${purpose} Visa`,
                  destination,
                  source: 'Hero Journey Selector',
                })
              }
            >
              Book Consultation
            </CTAButton>
          </div>
        </div>
      )}
    </div>
  );
};
