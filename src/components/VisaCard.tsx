import React from 'react';
import {
  GraduationCap,
  Plane,
  Briefcase,
  Building2,
  Compass,
  Users,
  Home,
  HeartPulse,
  Route,
  Calendar,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import { VisaServiceItem } from '../data/visaServices';
import { useAppContext } from '../context/RouterContext';

const iconMap: Record<VisaServiceItem['iconKey'], React.ComponentType<{ className?: string }>> = {
  graduation: GraduationCap,
  plane: Plane,
  building: Building2,
  briefcase: Briefcase,
  compass: Compass,
  users: Users,
  home: Home,
  heart: HeartPulse,
  route: Route,
  calendar: Calendar,
  globe: Globe2,
};

export const VisaCard: React.FC<{ service: VisaServiceItem }> = ({ service }) => {
  const { navigate } = useAppContext();
  const Icon = iconMap[service.iconKey] || Globe2;
  const isFeatured = service.tier === 'featured';

  return (
    <article
      className={`group rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
        isFeatured
          ? 'bg-[#001952] text-white border border-[#002D7A] shadow-lg'
          : 'bg-white text-[#172033] border border-slate-200 hover:border-[#002D7A]/40 hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
              isFeatured
                ? 'bg-[#002D7A] text-[#F2BA49] border border-white/10'
                : 'bg-[#F6F8FC] border border-slate-200 text-[#002D7A] group-hover:bg-[#001952] group-hover:text-[#F2BA49] group-hover:border-[#001952]'
            }`}
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          {isFeatured && (
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F8D77A]">
              Core Service
            </span>
          )}
        </div>

        <h3
          className={`font-display text-lg font-bold ${
            isFeatured ? 'text-white' : 'text-[#001952]'
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            isFeatured ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {service.shortDescription}
        </p>
      </div>

      <div
        className={`mt-6 pt-4 border-t ${
          isFeatured ? 'border-white/15' : 'border-slate-100'
        }`}
      >
        <a
          href={`/visa-services/${service.slug}`}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/visa-services/${service.slug}`);
          }}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            isFeatured
              ? 'text-[#F2BA49] hover:text-[#F8D77A]'
              : 'text-[#002D7A] hover:text-[#001952]'
          }`}
        >
          <span>Explore Service</span>
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};
