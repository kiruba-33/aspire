import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { destinationsData, DestinationItem } from '../data/destinations';
import { siteConfig } from '../config/siteConfig';
import { useAppContext } from '../context/RouterContext';
import { DestinationCard } from '../components/DestinationCard';
import { CountrySelector } from '../components/CountrySelector';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTAButton } from '../components/CTAButton';
import { DestinationLandmarkBanner } from '../components/VisualArtwork';

export const DestinationsHubPage: React.FC = () => {
  const [region, setRegion] = useState('All');
  const [search, setSearch] = useState('');

  const regions = ['All', 'Europe', 'North America', 'Oceania', 'Asia', 'Middle East'];

  const filtered = destinationsData.filter((d) => {
    const matchesRegion = region === 'All' || d.region === region;
    const matchesSearch =
      !search.trim() ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.shortName.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            Global Visa &amp; Study Corridors
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">
            Explore International Destinations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Review visa types, entry checklists, and Sri Lankan submission guidance across 11 global
            destinations.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <CountrySelector
            regions={regions}
            selectedRegion={region}
            onSelectRegion={setRegion}
            searchQuery={search}
            onSearchChange={setSearch}
          />

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
              <p className="text-base font-semibold text-[#001952]">
                No destinations matched your filter.
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Try clearing your search or selecting All regions.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((dest) => (
                <DestinationCard key={dest.slug} destination={dest} />
              ))}
            </div>
          )}

          <p className="text-xs text-slate-500 pt-4">{siteConfig.disclaimer.full}</p>
        </div>
      </section>
    </div>
  );
};

export const DestinationDetailPage: React.FC<{ destination: DestinationItem }> = ({
  destination,
}) => {
  const { navigate, openConsultationModal } = useAppContext();

  const faqFormatted = destination.faqs.map((f, idx) => ({
    id: `${destination.slug}-faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  const visaSections = [
    {
      title: 'Student Visa',
      desc: `Academic offer confirmation, financial audit, and student filing guidance for ${destination.name}.`,
      slug: '/visa-services/student-visa',
    },
    {
      title: 'Tourist Visa',
      desc: `${destination.touristDescriptor} pathways with structured travel itineraries and financial readiness.`,
      slug: '/visa-services/tourist-visa',
    },
    {
      title: 'Business Visa',
      desc: `Corporate dispatch letters, host invitation checks, and commercial trip preparation for ${destination.shortName}.`,
      slug: '/visa-services/business-visa',
    },
    {
      title: 'Work Visa',
      desc: `Employer sponsorship checklists, credential verification, and PCC planning for ${destination.shortName}.`,
      slug: '/visa-services/work-visa',
    },
  ];

  return (
    <div>
      <section className="bg-[#001952] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <button
            type="button"
            onClick={() => navigate('/destinations')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>All Destinations</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
                {destination.region} · Destination Guide
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Study &amp; Travel to {destination.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {destination.shortDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton
                  variant="gold"
                  size="lg"
                  showArrow
                  onClick={() =>
                    openConsultationModal({
                      destination: destination.name,
                      source: `${destination.name} Detail Page`,
                    })
                  }
                >
                  Explore {destination.shortName} Visa Options
                </CTAButton>
                <CTAButton variant="outline" size="lg" onClick={() => navigate('/contact')}>
                  Contact Colombo Office
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <DestinationLandmarkBanner
                countryName={destination.name}
                region={destination.region}
                flagCode={destination.flagCode}
                cityHighlight={destination.cityHighlight}
                slug={destination.slug}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#001952] mb-3">Overview</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
              {destination.overview}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#001952] mb-5">
              Popular Visa Categories for {destination.shortName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visaSections.map((vs) => (
                <div
                  key={vs.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display text-base font-bold text-[#001952]">{vs.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{vs.desc}</p>
                  </div>
                  <a
                    href={vs.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(vs.slug);
                    }}
                    className="mt-4 inline-block text-xs font-bold text-[#002D7A] hover:underline"
                  >
                    Explore {vs.title} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#001952] mb-4">
                Basic Requirements
              </h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {destination.basicRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#F2BA49] shrink-0 mt-1" aria-hidden="true" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#001952] mb-4">
                Common Documents
              </h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {destination.commonDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#002D7A] shrink-0 mt-1" aria-hidden="true" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#001952] mb-5">
              Application Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {destination.applicationProcess.map((step, i) => (
                <div
                  key={step}
                  className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200/80"
                >
                  <span className="font-display text-xs font-bold text-[#F2BA49] bg-[#001952] px-2 py-0.5 rounded tabular-nums inline-block mb-2">
                    0{i + 1}
                  </span>
                  <p className="text-sm font-medium text-[#172033]">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {faqFormatted.length > 0 && (
            <div className="max-w-3xl">
              <h2 className="font-display text-xl font-bold text-[#001952] mb-4">
                {destination.shortName} Visa FAQs
              </h2>
              <FAQAccordion items={faqFormatted} />
            </div>
          )}

          <div className="bg-[#001952] text-white rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold">
                Ready to Plan Your {destination.shortName} Journey?
              </h2>
              <p className="text-sm text-slate-300 mt-1.5">{siteConfig.disclaimer.short}</p>
            </div>
            <CTAButton
              variant="gold"
              size="lg"
              showArrow
              onClick={() =>
                openConsultationModal({
                  destination: destination.name,
                  source: `${destination.name} Footer CTA`,
                })
              }
            >
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};
