import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';
import { journeyTimelineStages } from '../data/contentData';
import { siteConfig } from '../config/siteConfig';

const stageGuidanceMap: Record<string, { applicantRole: string; aspireRole: string }> = {
  '01': {
    applicantRole: 'Share your intended destination, travel purpose, and preferred dates.',
    aspireRole: 'Outline relevant visa categories and initial preparation timelines.',
  },
  '02': {
    applicantRole: 'Discuss academic, employment, or family travel background openly.',
    aspireRole: 'Evaluate realistic options and clarify official requirements.',
  },
  '03': {
    applicantRole: 'Provide existing academic, work, or past travel records for review.',
    aspireRole: 'Identify potential documentation gaps before any fees are paid.',
  },
  '04': {
    applicantRole: 'Gather bank statements, employment letters, or admission records.',
    aspireRole: 'Issue a tailored checklist and verify financial & sponsor consistency.',
  },
  '05': {
    applicantRole: 'Review prepared forms and confirm factual accuracy prior to filing.',
    aspireRole: 'Compile cover letters, organize file order, and assist with lodgement.',
  },
  '06': {
    applicantRole: 'Attend scheduled VFS / Embassy biometrics or consular interview.',
    aspireRole: 'Coordinate appointment scheduling and run mock interview coaching.',
  },
  '07': {
    applicantRole: 'Remain reachable if authorities request supplementary clarification.',
    aspireRole: 'Monitor portal updates and coordinate prompt responses if instructed.',
  },
  '08': {
    applicantRole: 'Collect passport or eVisa confirmation issued by official authorities.',
    aspireRole: 'Provide arrival, insurance, and pre-departure orientation guidance.',
  },
};

export const JourneyTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = journeyTimelineStages[activeIndex];
  const progressRatio = (activeIndex + 1) / journeyTimelineStages.length;
  const roles = stageGuidanceMap[activeStage.number];

  return (
    <section id="our-process" className="py-16 sm:py-20 bg-[#07132F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
            How We Guide You
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-white">
            From First Conversation to Final Decision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Follow our eight-stage guidance route from initial conversation to authority decision.
            Select any destination marker to inspect what you prepare and how Aspire guides you.
          </p>
        </div>

        {/* Interactive Curved Gold Route Map (Desktop) */}
        <div className="relative mb-8">
          <svg
            viewBox="0 0 1200 110"
            className="hidden lg:block w-full h-24 pointer-events-none"
            aria-hidden="true"
          >
            {/* Base Route Track */}
            <path
              d="M 45 55 C 220 15, 380 95, 600 55 C 820 15, 980 95, 1155 55"
              fill="none"
              stroke="rgba(242,186,73,0.22)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            {/* Active Progressive Gold Route */}
            <motion.path
              d="M 45 55 C 220 15, 380 95, 600 55 C 820 15, 980 95, 1155 55"
              fill="none"
              stroke="#F2BA49"
              strokeWidth="2.8"
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: progressRatio }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          {/* Interactive Stage Markers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 lg:-mt-16 relative z-10">
            {journeyTimelineStages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              const isReached = idx <= activeIndex;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`group text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#002D7A] border-[#F2BA49] shadow-lg -translate-y-1'
                      : isReached
                        ? 'bg-[#001952] border-[#F2BA49]/40'
                        : 'bg-[#001952]/75 border-white/10 hover:border-[#F2BA49]/45'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                        isActive
                          ? 'bg-[#F2BA49] border-[#F8D77A]'
                          : isReached
                            ? 'bg-[#F2BA49]/70 border-[#F2BA49]'
                            : 'bg-[#07132F] border-[#F2BA49]/50'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="font-display text-xs font-bold text-[#F2BA49] tabular-nums">
                      {stage.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#F8D77A]">
                      {stage.label}
                    </p>
                    <p className="text-xs font-semibold text-white mt-1 leading-snug">
                      {stage.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Split Detail Card */}
        <motion.div
          key={activeStage.number}
          initial={{ opacity: 0.4, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl bg-[#001952] border border-white/15 p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#F2BA49] tabular-nums">
                Stage {activeStage.number} · {activeStage.label}
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                {activeStage.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 mt-1.5 max-w-2xl leading-relaxed">
                {activeStage.detail}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((p) => Math.max(0, p - 1))}
                className="px-4 py-2 rounded-lg border border-white/20 text-xs font-semibold text-white hover:bg-white/10 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Previous Stage
              </button>
              <button
                type="button"
                disabled={activeIndex === journeyTimelineStages.length - 1}
                onClick={() =>
                  setActiveIndex((p) => Math.min(journeyTimelineStages.length - 1, p + 1))
                }
                className="px-4 py-2 rounded-lg bg-[#F2BA49] text-[#001952] text-xs font-bold hover:bg-[#F8D77A] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next Stage
              </button>
            </div>
          </div>

          {roles && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#07132F]/70 border border-white/10 p-4">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400">
                  Your Step
                </p>
                <p className="text-sm text-slate-100 mt-1 leading-relaxed">{roles.applicantRole}</p>
              </div>
              <div className="rounded-xl bg-[#07132F]/70 border border-[#F2BA49]/25 p-4">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F2BA49]">
                  Aspire Guidance
                </p>
                <p className="text-sm text-slate-100 mt-1 leading-relaxed">{roles.aspireRole}</p>
              </div>
            </div>
          )}
        </motion.div>

        <div className="mt-6 rounded-xl bg-white/5 border border-white/10 px-5 py-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#F2BA49] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {siteConfig.disclaimer.short}
          </p>
        </div>
      </div>
    </section>
  );
};
