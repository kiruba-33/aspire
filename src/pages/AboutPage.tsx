import React from 'react';
import { Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useAppContext } from '../context/RouterContext';
import { StatCard } from '../components/StatCard';
import { CTAButton } from '../components/CTAButton';
import { AdvisoryVisualCard } from '../components/VisualArtwork';

export const AboutPage: React.FC = () => {
  const { openConsultationModal } = useAppContext();

  return (
    <div>
      <section className="bg-[#001952] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            About {siteConfig.companyName}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">
            More Than a Visa Application.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#001952]">
                Our Story, Mission &amp; Advisory Approach
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                International travel, education, and immigration decisions can be complex. Based in
                Colombo, Sri Lanka, Aspire Visa Experts (Pvt) Ltd provides structured guidance
                designed around each applicant’s goals, financial profile, and target destination.
              </p>
              <ul className="space-y-3 text-sm text-[#172033]">
                {[
                  'Dedicated Sri Lankan advisory desk in Colombo & online',
                  'Category-specific checklists built around embassy rules',
                  'Honest pathway guidance with zero exaggerated guarantees',
                  'Clear end-to-end communication from consultation to decision',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F2BA49] shrink-0 mt-1" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <CTAButton
                  variant="gold"
                  size="lg"
                  showArrow
                  onClick={() => openConsultationModal({ source: 'About Page' })}
                >
                  Book a Consultation
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AdvisoryVisualCard />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#001952] mb-6">
              Meet the People Behind Your Journey.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {siteConfig.teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#001952] text-[#F2BA49] font-display font-bold flex items-center justify-center mb-4">
                      {member.initials}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#001952]">{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A4FB3] mt-1">
                      {member.designation}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>
                  <p className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    {member.experienceNote}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-500">{siteConfig.disclaimer.full}</p>
        </div>
      </section>
    </div>
  );
};
