import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../data/contentData';

export const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
      <div>
        {/* Subtle Destination Header Band */}
        <div className="bg-gradient-to-r from-[#001952] to-[#002D7A] px-6 py-4 flex items-center justify-between gap-3 text-white">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F2BA49]">
              {item.visaType}
            </p>
            <p className="font-display text-base font-bold text-white mt-0.5">
              {item.destination}
            </p>
          </div>
          <Quote className="w-5 h-5 text-[#F2BA49]/80 shrink-0" aria-hidden="true" />
        </div>

        <div className="p-6">
          <p className="text-sm sm:text-base text-[#172033] leading-relaxed">“{item.quote}”</p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-slate-100">
        <p className="text-sm font-bold text-[#001952]">{item.client}</p>
        <p className="text-xs text-slate-500 mt-0.5">{item.city}</p>
      </div>
    </article>
  );
};
