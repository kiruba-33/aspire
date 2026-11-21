import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { sampleTestimonials } from '../data/contentData';
import { ContactSection } from '../components/ContactSection';
import { ConsultationForm } from '../components/ConsultationForm';
import { JourneyTimeline } from '../components/JourneyTimeline';
import { DocumentChecklist } from '../components/DocumentChecklist';
import { TestimonialCard } from '../components/TestimonialCard';
import { CTAButton } from '../components/CTAButton';
import { useAppContext } from '../context/RouterContext';

export const ProcessPage: React.FC = () => {
  return (
    <div>
      <JourneyTimeline />
      <DocumentChecklist />
    </div>
  );
};

export const SuccessStoriesPage: React.FC = () => {
  const { openConsultationModal } = useAppContext();

  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            Client Stories
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">
            Journeys We’ve Helped Move Forward.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Illustrative applicant journeys from across Sri Lanka demonstrating our structured
            guidance across study, tourist, work, and family visit pathways.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleTestimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          <div className="bg-[#001952] text-white rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold">
                Start Preparing Your Own Journey
              </h2>
              <p className="text-sm text-slate-300 mt-1.5">{siteConfig.disclaimer.short}</p>
            </div>
            <CTAButton
              variant="gold"
              size="lg"
              showArrow
              onClick={() => openConsultationModal({ source: 'Success Stories Page' })}
            >
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            Contact Us
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let’s Talk About Your Journey.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Connect with {siteConfig.companyName} in Colombo, Sri Lanka via phone, WhatsApp, email,
            or our online enquiry form.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export const BookConsultationPage: React.FC = () => {
  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            Schedule Advisory Call
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Book a Consultation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Select a preferred date and time slot to speak with an Aspire consultant regarding your
            visa category and destination.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <ConsultationForm />
          </div>
          <p className="mt-6 text-xs text-slate-500 text-center">{siteConfig.disclaimer.full}</p>
        </div>
      </section>
    </div>
  );
};

const legalContent: Record<string, { title: string; updated: string; paragraphs: string[] }> = {
  disclaimer: {
    title: 'Disclaimer',
    updated: 'November 2026',
    paragraphs: [
      siteConfig.disclaimer.full,
      'This website prototype demonstrates the user experience and content architecture of Aspire Visa Experts (Pvt) Ltd. Sample metrics, team profiles, and client stories are illustrative placeholders.',
      'Applicants should verify official government fees, biometric appointments, and documentary rules published by the respective embassy, high commission, or immigration authority.',
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: 'November 2026',
    paragraphs: [
      `${siteConfig.companyName} respects applicant privacy. Initial enquiry details (such as name, phone number, email, visa category, and destination) are collected solely to arrange consultations and respond to questions.`,
      'Applicants must never submit passport numbers, passport scans, banking passwords, or payment card details through public website enquiry forms.',
      'In this interactive prototype, form submissions remain local to your browser session for demonstration purposes.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: 'November 2026',
    paragraphs: [
      `Advisory services provided by ${siteConfig.companyName} consist of general pathway guidance, checklist review, form preparation support, and appointment coordination.`,
      'We are not affiliated with any government, embassy, high commission, or consulate. Visa decisions, stay validity, and processing durations are determined exclusively by official authorities.',
      'Applicants remain solely responsible for the accuracy and authenticity of all information and documents submitted in support of any visa application.',
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    updated: 'November 2026',
    paragraphs: [
      'Essential browser storage may be used to maintain navigation state and display submission confirmation feedback during your session.',
      'No third-party advertising trackers are used on this prototype.',
    ],
  },
};

export const LegalPage: React.FC<{ policySlug: string }> = ({ policySlug }) => {
  const doc = legalContent[policySlug] || legalContent.disclaimer;

  return (
    <div className="py-14 sm:py-16 bg-[#F6F8FC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10">
          <p className="text-xs font-bold tracking-wider uppercase text-[#002D7A] mb-2">
            Legal &amp; Compliance · Updated {doc.updated}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#001952] mb-6">
            {doc.title}
          </h1>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {doc.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
