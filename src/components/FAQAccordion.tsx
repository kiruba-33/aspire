import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../data/contentData';

export const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white overflow-hidden">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                onClick={() => toggle(item.id)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#F6F8FC] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#F2BA49]"
              >
                <span className="font-display text-sm sm:text-base font-bold text-[#001952]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-150 ${
                    isOpen ? 'rotate-180 text-[#F2BA49]' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={`panel-${item.id}`}
                className="px-6 pb-5 text-sm text-slate-600 leading-relaxed bg-[#F6F8FC]/70"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
