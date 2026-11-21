import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { visaServicesData } from '../data/visaServices';
import { destinationsData } from '../data/destinations';
import {
  journeyCards,
  studentSixSteps,
  whyAspirePoints,
  sampleTestimonials,
  faqItems,
  articlesData,
} from '../data/contentData';
import { useAppContext } from '../context/RouterContext';
import { getWhatsAppUrl } from '../utils/contactLinks';
import { Hero } from '../components/Hero';
import { StatCard } from '../components/StatCard';
import { VisaCard } from '../components/VisaCard';
import { DestinationCard } from '../components/DestinationCard';
import { JourneyTimeline } from '../components/JourneyTimeline';
import { AssessmentTool } from '../components/AssessmentTool';
import { DocumentChecklist } from '../components/DocumentChecklist';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { ArticleCard } from '../components/ArticleCard';
import { ContactSection } from '../components/ContactSection';
import { CTAButton } from '../components/CTAButton';
import {
  CountryFlag,
  DestinationSkyline,
  JourneyCardArtwork,
  StudyAbroadVisual,
  AdvisoryVisualCard,
} from '../components/VisualArtwork';

const cardStaggerClasses = ['lg:mt-0', 'lg:mt-6', 'lg:mt-3', 'lg:mt-9'];

export const HomePage: React.FC = () => {
  const { navigate, openConsultationModal } = useAppContext();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderProgress, setSliderProgress] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const [scopeTab, setScopeTab] = useState<'aspire' | 'authority'>('aspire');

  const primaryServices = visaServicesData.filter((s) => s.tier !== 'secondary');
  const secondaryServices = visaServicesData.filter((s) => s.tier === 'secondary');
  const studyChips = destinationsData.filter((d) => d.studyAbroadFeatured);
  const touristDestinations = destinationsData.filter((d) => d.touristFeatured).slice(0, 8);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const offset = direction === 'left' ? -345 : 345;
    sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const handleSliderScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setSliderProgress(100);
      return;
    }
    const pct = Math.max(12, Math.min(100, Math.round((el.scrollLeft / maxScroll) * 88 + 12)));
    setSliderProgress(pct);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - sliderRef.current.offsetLeft;
    dragScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.4;
    sliderRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <div>
      {/* 1. Hero & Live-Reactive Flight Route Journey Planner */}
      <Hero />

      {/* 2. Trust Bar */}
      <section aria-label="Consultancy Overview Metrics" className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. "WHAT'S YOUR JOURNEY?" Signature Ascending Stagger Section */}
      <section id="whats-your-journey" className="py-16 sm:py-20 bg-[#F6F8FC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
              What’s Your Journey?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#001952] tracking-tight leading-[1.1]">
              Every Journey Has a Destination.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us where you’re headed. We’ll help you understand the pathway.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {journeyCards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => navigate(card.routePath)}
                className={`group text-left rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:border-[#002D7A] hover:shadow-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F2BA49] ${cardStaggerClasses[idx] || ''}`}
              >
                <div className="overflow-hidden">
                  <JourneyCardArtwork theme={card.theme} />
                  <div className="p-6">
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
                      {card.label}
                    </p>
                    <h3 className="font-display text-xl font-bold text-[#001952] leading-snug">
                      {card.headline}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">{card.visaLabel}</p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#002D7A] group-hover:text-[#001952]">
                  <span>Explore Pathway</span>
                  <ArrowRight
                    className="w-4 h-4 text-[#F2BA49] transition-transform duration-200 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visa Solutions for Every Journey */}
      <section id="visa-services" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Comprehensive Visa Advisory
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#001952] tracking-tight leading-tight">
                Visa Solutions for Every Journey
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Structured consultation, checklist review, and submission guidance across study,
                tourism, work, business, family, and permanent residency categories.
              </p>
            </div>
            <CTAButton variant="outline" size="md" onClick={() => navigate('/visa-services')}>
              View All Services
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {primaryServices.map((service) => (
              <VisaCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {secondaryServices.map((service) => (
              <VisaCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Student Visa — Editorial Split Section */}
      <section id="study-abroad" className="py-16 sm:py-20 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <StudyAbroadVisual />
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Student Visa Featured Advisory
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#001952] tracking-tight leading-[1.08]">
                Study Abroad. Build What’s Next.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                From choosing your destination to preparing your visa application, our team helps
                students navigate the journey with structured guidance.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {studentSixSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200"
                  >
                    <span className="font-display text-xs font-bold text-[#F2BA49] bg-[#001952] w-7 h-7 rounded-lg inline-flex items-center justify-center shrink-0 tabular-nums">
                      {step.num}
                    </span>
                    <span className="text-sm font-semibold text-[#001952]">{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-slate-500 mb-3">
                  Study Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {studyChips.map((dest) => (
                    <button
                      key={dest.slug}
                      type="button"
                      onClick={() => navigate(`/destinations/${dest.slug}`)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 hover:border-[#001952] text-xs font-semibold text-[#001952] transition-colors cursor-pointer"
                    >
                      <CountryFlag code={dest.flagCode} className="w-5 h-3.5 rounded-xs shrink-0" />
                      <span>{dest.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton
                  variant="gold"
                  size="lg"
                  showArrow
                  onClick={() => navigate('/visa-services/student-visa')}
                >
                  Explore Student Visa
                </CTAButton>
                <CTAButton
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    openConsultationModal({
                      visaCategory: 'Student Visa',
                      source: 'Student Visa Section',
                    })
                  }
                >
                  Speak With Student Advisor
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tourist Visa Section with Custom Country Skylines */}
      <section id="tourist-visa" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Tourist &amp; Visit Visas
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#001952] tracking-tight leading-tight">
                See More of the World.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Explore popular leisure, family visit, and corporate travel destinations supported
                by our Colombo advisory team.
              </p>
            </div>
            <CTAButton
              variant="primary"
              size="md"
              onClick={() => navigate('/visa-services/tourist-visa')}
            >
              Tourist Visa Guide
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {touristDestinations.map((dest) => (
              <article
                key={dest.slug}
                onClick={() => navigate(`/destinations/${dest.slug}`)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-[#F6F8FC] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#002D7A] hover:shadow-xl"
              >
                <div>
                  <div className="h-36 bg-gradient-to-br from-[#07132F] via-[#001952] to-[#0A4FB3] p-5 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-85 pointer-events-none transition-transform duration-300 group-hover:scale-105">
                      <DestinationSkyline slug={dest.slug} />
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <CountryFlag code={dest.flagCode} />
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F8D77A]">
                        {dest.region}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-display text-lg font-bold tracking-wide uppercase text-white">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-bold text-[#002D7A]">{dest.touristDescriptor}</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {dest.cityHighlight}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-200/80">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#001952] group-hover:text-[#0A4FB3]">
                    <span>Explore Destination</span>
                    <ArrowRight
                      className="w-4 h-4 text-[#F2BA49] transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Horizontal Draggable Destination Explorer */}
      <section id="destinations" className="py-16 sm:py-20 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Destination Explorer
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001952] tracking-tight">
                Select Your Next Destination
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Drag, swipe, or scroll horizontally to explore visa categories across 11 key
                countries.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => scrollSlider('left')}
                aria-label="Scroll destinations left"
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-[#001952] hover:border-[#001952] inline-flex items-center justify-center cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider('right')}
                aria-label="Scroll destinations right"
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-[#001952] hover:border-[#001952] inline-flex items-center justify-center cursor-pointer transition-colors"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <CTAButton variant="outline" size="sm" onClick={() => navigate('/destinations')}>
                View All
              </CTAButton>
            </div>
          </div>

          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            className={`flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {destinationsData.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} sliderMode />
            ))}
          </div>

          {/* Interactive Scroll Progress Bar */}
          <div className="mt-3 flex items-center gap-4">
            <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F2BA49] transition-all duration-150"
                style={{ width: `${sliderProgress}%` }}
              />
            </div>
            <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">
              Drag or swipe to explore
            </span>
          </div>
        </div>
      </section>

      {/* 8. "HOW WE GUIDE YOU" Progressive Gold Route Timeline */}
      <JourneyTimeline />

      {/* 9. Why Aspire Editorial Layout + Transparency Boundary Switcher */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <span
                aria-hidden="true"
                className="font-display text-[120px] sm:text-[160px] font-extrabold text-[#F6F8FC] leading-none select-none block -mb-14 -ml-2"
              >
                01
              </span>
              <div className="relative z-10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                  Why Choose Aspire?
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#001952] tracking-tight leading-[1.1]">
                  Guidance that goes beyond paperwork.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  Every visa file carries personal goals, family timelines, and financial precision.
                  We combine clear Sri Lankan applicant advisory with structured pre-submission
                  quality checks.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whyAspirePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F8FC] border border-slate-200/80"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#001952] text-[#F2BA49] inline-flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-[#001952]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <AdvisoryVisualCard />

              {/* Interactive Transparency Boundary Switcher */}
              <div className="rounded-2xl border border-slate-200 bg-[#F6F8FC] p-5">
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#001952]">
                    <ShieldCheck className="w-4 h-4 text-[#F2BA49]" aria-hidden="true" />
                    <span>Transparency &amp; Authority Boundary</span>
                  </div>
                  <div className="flex items-center gap-1 p-0.5 bg-slate-200/80 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setScopeTab('aspire')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors cursor-pointer ${
                        scopeTab === 'aspire'
                          ? 'bg-[#001952] text-[#F8D77A]'
                          : 'text-slate-600 hover:text-[#001952]'
                      }`}
                    >
                      What Aspire Guides
                    </button>
                    <button
                      type="button"
                      onClick={() => setScopeTab('authority')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors cursor-pointer ${
                        scopeTab === 'authority'
                          ? 'bg-[#001952] text-[#F8D77A]'
                          : 'text-slate-600 hover:text-[#001952]'
                      }`}
                    >
                      What Embassies Decide
                    </button>
                  </div>
                </div>

                {scopeTab === 'aspire' ? (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Profile evaluation, tailored Sri Lankan document checklists, financial consistency
                    reviews, form preparation, cover letter structuring, appointment coordination,
                    and mock interview practice.
                  </p>
                ) : (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Final visa approval or refusal, processing timelines, visa validity duration,
                    interview waivers, and official fee schedules are determined exclusively by the
                    relevant embassy, consulate, or government immigration authority.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. 4-Step Visa Assessment Tool */}
      <AssessmentTool />

      {/* 11. Interactive Document Checklist */}
      <DocumentChecklist />

      {/* 12. Success Stories */}
      <section id="success-stories" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Applicant Experiences
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#001952] tracking-tight leading-tight">
                Journeys We’ve Helped Move Forward.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Illustrative client experiences from Colombo, Kandy, Galle, and Negombo across
                student, tourist, work, and family visit pathways.
              </p>
            </div>
            <CTAButton variant="outline" size="md" onClick={() => navigate('/success-stories')}>
              View All Stories
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleTestimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. About Aspire & Team Section */}
      <section className="py-16 sm:py-20 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                About {siteConfig.companyName}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001952] tracking-tight">
                More Than a Visa Application.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                International travel, education and immigration decisions can be complex. Aspire
                Visa Experts provides structured guidance designed around each applicant’s goals,
                profile and destination.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <CTAButton variant="primary" size="lg" showArrow onClick={() => navigate('/about')}>
                Meet Aspire
              </CTAButton>
            </div>
          </div>

          <div>
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Our Advisory Specialists
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001952] tracking-tight">
                Meet the People Behind Your Journey.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {siteConfig.teamMembers.map((member) => (
                <article
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001952] to-[#002D7A] text-[#F2BA49] font-display text-lg font-extrabold flex items-center justify-center mb-4 border border-[#F2BA49]/30">
                      {member.initials}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#001952]">{member.name}</h3>
                    <p className="text-xs font-bold tracking-wide uppercase text-[#0A4FB3] mt-1">
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
        </div>
      </section>

      {/* 14. Dramatic Navy Consultation CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-[#001952] text-white">
        <svg
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M -60 270 C 320 120, 760 220, 1480 65"
            fill="none"
            stroke="#F2BA49"
            strokeWidth="2"
            strokeDasharray="7 6"
          />
          <polygon points="1050,320 1440,80 1440,320" fill="rgba(10,79,179,0.25)" />
          <circle cx="1180" cy="112" r="5" fill="#F2BA49" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#F2BA49] mb-2">
              Start Today
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Your Next Destination Could Start With One Conversation.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              Speak with our team about your study, travel, work or immigration plans.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <CTAButton
              variant="gold"
              size="lg"
              showArrow
              onClick={() => openConsultationModal({ source: 'Dramatic Navy CTA' })}
            >
              Book a Consultation
            </CTAButton>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 15. FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 bg-[#F6F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001952] tracking-tight">
              Clarity Before You Apply
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* 16. Resources / Insights */}
      <section id="resources" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#002D7A] mb-2">
                Editorial Guides
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#001952] tracking-tight">
                Visa &amp; Travel Insights
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Practical checklists and preparation guides curated for Sri Lankan applicants.
              </p>
            </div>
            <CTAButton variant="outline" size="md" showArrow onClick={() => navigate('/resources')}>
              All Insights
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 17. Contact Section */}
      <ContactSection />
    </div>
  );
};
