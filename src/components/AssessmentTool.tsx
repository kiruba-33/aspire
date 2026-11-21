import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, RotateCcw, ClipboardCheck } from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { useAppContext } from '../context/RouterContext';
import { CTAButton } from './CTAButton';

interface AssessmentState {
  purpose: string;
  destination: string;
  status: string;
  duration: string;
}

const initialState: AssessmentState = {
  purpose: '',
  destination: '',
  status: '',
  duration: '',
};

const steps = [
  {
    key: 'purpose' as const,
    label: 'Step 1 of 4 · Purpose',
    question: 'What is the main purpose of your journey?',
    options: ['Study', 'Travel', 'Work', 'Business', 'Family', 'Immigration'],
  },
  {
    key: 'destination' as const,
    label: 'Step 2 of 4 · Destination',
    question: 'Which destination are you considering?',
    options: [
      ...destinationsData.slice(0, 8).map((d) => d.shortName),
      'Europe / Schengen',
      'Other Country',
    ],
  },
  {
    key: 'status' as const,
    label: 'Step 3 of 4 · Current Status',
    question: 'What best describes your current status?',
    options: ['Student', 'Employed', 'Business Owner', 'Self-employed', 'Family', 'Other'],
  },
  {
    key: 'duration' as const,
    label: 'Step 4 of 4 · Travel Duration',
    question: 'What is your expected travel duration?',
    options: ['Short Term', 'Long Term'],
  },
];

export const AssessmentTool: React.FC = () => {
  const { openConsultationModal } = useAppContext();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentState>(initialState);
  const [completed, setCompleted] = useState(false);

  const currentStep = steps[stepIndex];

  const handleSelect = (val: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep.key]: val }));
    if (stepIndex < steps.length - 1) {
      setStepIndex((p) => p + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers(initialState);
    setStepIndex(0);
    setCompleted(false);
  };

  return (
    <section id="visa-assessment" className="py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#002D7A] mb-2">
            Interactive Pathway Check
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#001952] tracking-tight leading-tight">
            Not Sure Which Visa Is Right For You?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Complete four brief steps so our advisors can understand your destination and travel
            context before your consultation.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F6F8FC] p-6 sm:p-8 lg:p-10">
          {!completed ? (
            <motion.div
              key={currentStep.key}
              initial={{ opacity: 0.4, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#002D7A] mb-3">
                <span>{currentStep.label}</span>
                <span className="tabular-nums">
                  {Math.round(((stepIndex + 1) / steps.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-7">
                <div
                  className="h-full bg-[#F2BA49] transition-all duration-200"
                  style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
                />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#001952] mb-6">
                {currentStep.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentStep.options.map((opt) => {
                  const selected = answers[currentStep.key] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(opt)}
                      className={`text-left px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        selected
                          ? 'bg-[#001952] text-[#F8D77A] border-[#001952]'
                          : 'bg-white text-[#172033] border-slate-200 hover:border-[#002D7A]'
                      }`}
                    >
                      <span>{opt}</span>
                      <ArrowRight className="w-4 h-4 text-[#F2BA49] shrink-0" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  disabled={stepIndex === 0}
                  onClick={() => setStepIndex((p) => Math.max(0, p - 1))}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#001952] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[#001952] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0.5, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#001952] text-[#F2BA49] flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#001952]">
                    Based on the information provided, a professional consultation is recommended.
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Visa eligibility depends on official government rules, financial proofs, and
                    your complete profile. No consultancy can promise or guarantee approval.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200">
                  <span className="text-slate-500 block">Purpose</span>
                  <span className="font-bold text-[#001952] mt-0.5 block">{answers.purpose}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200">
                  <span className="text-slate-500 block">Destination</span>
                  <span className="font-bold text-[#001952] mt-0.5 block">
                    {answers.destination}
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200">
                  <span className="text-slate-500 block">Current Status</span>
                  <span className="font-bold text-[#001952] mt-0.5 block">{answers.status}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200">
                  <span className="text-slate-500 block">Travel Duration</span>
                  <span className="font-bold text-[#001952] mt-0.5 block">{answers.duration}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <CTAButton
                  variant="gold"
                  size="lg"
                  showArrow
                  onClick={() =>
                    openConsultationModal({
                      visaCategory:
                        answers.purpose === 'Study'
                          ? 'Student Visa'
                          : answers.purpose === 'Travel'
                            ? 'Tourist Visa'
                            : answers.purpose === 'Immigration'
                              ? 'Immigration / PR Consultancy'
                              : `${answers.purpose} Visa`,
                      destination: answers.destination,
                      source: '4-Step Assessment Tool',
                    })
                  }
                >
                  Speak With a Visa Expert
                </CTAButton>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#001952] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Start Over</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
