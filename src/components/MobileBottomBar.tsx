import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { getWhatsAppUrl, getPhoneHref } from '../utils/contactLinks';
import { useAppContext } from '../context/RouterContext';

export const MobileActionBar: React.FC = () => {
  const { openConsultationModal } = useAppContext();

  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 h-12 bg-[#001952] border-t border-white/15 grid grid-cols-3 divide-x divide-white/15 text-white"
      role="region"
      aria-label="Quick Contact Actions"
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider uppercase hover:bg-[#002D7A] transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a
        href={getPhoneHref()}
        className="flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider uppercase hover:bg-[#002D7A] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#F2BA49]" aria-hidden="true" />
        <span>Call</span>
      </a>
      <button
        type="button"
        onClick={() => openConsultationModal({ source: 'Mobile Action Bar' })}
        className="flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-[#F2BA49] text-[#001952] hover:bg-[#F8D77A] transition-colors cursor-pointer"
      >
        <CalendarCheck className="w-4 h-4" aria-hidden="true" />
        <span>Enquire</span>
      </button>
    </div>
  );
};

export const MobileBottomBar = MobileActionBar;
