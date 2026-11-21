import React from 'react';
import { Check, AlertCircle, ArrowLeft } from 'lucide-react';
import { visaServicesData, VisaServiceItem } from '../data/visaServices';
import { siteConfig } from '../config/siteConfig';
import { useAppContext } from '../context/RouterContext';
import { VisaCard } from '../components/VisaCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTAButton } from '../components/CTAButton';

export const VisaServicesHubPage: React.FC = () => {
  const { openConsultationModal } = useAppContext();

  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            {siteConfig.shortName} · Visa Advisory
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">
            Visa Solutions for Every Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Structured documentation support and consultation across Student, Tourist, Visit, Work,
            Business, Dependent, Family, Medical, Transit, Conference, and PR categories.
          </p>
          <div className="mt-7">
            <CTAButton
              variant="gold"
              size="lg"
              showArrow
              onClick={() => openConsultationModal({ source: 'Visa Services Hub' })}
            >
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visaServicesData.map((service) => (
              <VisaCard key={service.slug} service={service} />
            ))}
          </div>
          <p className="mt-10 text-xs sm:text-sm text-slate-500 text-center max-w-3xl mx-auto">
            {siteConfig.disclaimer.full}
          </p>
        </div>
      </section>
    </div>
  );
};

export const VisaServiceDetailPage: React.FC<{ service: VisaServiceItem }> = ({ service }) => {
  const { navigate, openConsultationModal } = useAppContext();

  const faqFormatted = service.faqs.map((f, idx) => ({
    id: `${service.slug}-faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/visa-services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>All Visa Services</span>
          </button>

          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            Visa Category · {service.title}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">
            {service.heroHeadline}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {service.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton
              variant="gold"
              size="lg"
              showArrow
              onClick={() =>
                openConsultationModal({
                  visaCategory: service.title,
                  source: `${service.title} Detail Page`,
                })
              }
            >
              Book Consultation for {service.title}
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => navigate('/#document-checklist')}
            >
              View Document Checklist
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#001952] mb-4">
                Who Is It For?
              </h2>
              <ul className="space-y-3">
                {service.whoIsItFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0A4FB3] shrink-0 mt-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#001952] mb-4">
                Key Requirements
              </h2>
              <ul className="space-y-3">
                {service.keyRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#F2BA49] shrink-0 mt-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#001952] mb-5">
              Guidance Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.applicationProcess.map((step, i) => (
                <div
                  key={step}
                  className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200/80 flex items-start gap-3"
                >
                  <span className="font-display text-xs font-bold bg-[#001952] text-[#F2BA49] w-6 h-6 rounded inline-flex items-center justify-center shrink-0 tabular-nums">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#001952]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7">
              <h2 className="font-display text-lg font-bold text-[#001952] mb-4">
                Common Documents
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {service.commonDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#002D7A] shrink-0 mt-1" aria-hidden="true" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7">
              <h2 className="font-display text-lg font-bold text-[#001952] mb-4">
                Common Challenges
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {service.commonChallenges.map((ch) => (
                  <li key={ch} className="flex items-start gap-2.5">
                    <AlertCircle
                      className="w-4 h-4 text-[#F2BA49] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#001952] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-white mb-4">How Aspire Helps</h2>
                <ul className="space-y-2.5 text-sm text-slate-200">
                  {service.howWeHelp.map((help) => (
                    <li key={help} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#F2BA49] shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{help}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <CTAButton
                  variant="gold"
                  size="md"
                  className="w-full"
                  onClick={() =>
                    openConsultationModal({
                      visaCategory: service.title,
                      source: `${service.title} How We Help`,
                    })
                  }
                >
                  Start Your Journey
                </CTAButton>
              </div>
            </div>
          </div>

          {faqFormatted.length > 0 && (
            <div className="max-w-3xl">
              <h2 className="font-display text-xl font-bold text-[#001952] mb-4">
                {service.title} FAQs
              </h2>
              <FAQAccordion items={faqFormatted} />
            </div>
          )}

          <p className="text-xs text-slate-500">{siteConfig.disclaimer.full}</p>
        </div>
      </section>
    </div>
  );
};
